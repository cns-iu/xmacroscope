import argparse
import pathlib
import typing as t
import re

# Constants

_ARCHIVE_NAME_PATTERN = re.compile(r'ACS_(?P<year>\d\d)_(EST|1YR)_S0101')
_DATA_FILE_NAME_PATTERN = re.compile(r'ACS_\d\d_(EST|1YR)_S0101_with_ann.csv')

_FEMALE_TOTAL_PATTERN = re.compile('Female; Estimate; Total population', re.I)
_MALE_TOTAL_PATTERN = re.compile('Male; Estimate; Total population', re.I)

_DATA_PATTERN = re.compile(
  '(?P<gender>Male|Female); '
  'Estimate; '
  '(Total population - )?'
  'AGE - '
  '(Under (?P<zero>5) years|'
  '(?P<seventeen>85) years and over|'
  r'(?P<between>\d+) to \d+ years)',
  re.I
)

# Script functionality

def setup_cmd_parser(parser: argparse.ArgumentParser = None) -> argparse.ArgumentParser:
  if parser is None:
    parser = argparse.ArgumentParser(description='Process census data into the format required by visualization #1')
  parser.add_argument('archives', nargs='+', type=pathlib.Path, help='data zip archives')
  parser.add_argument('--output', '-o', type=argparse.FileType('w'), default='-', help='output file')

  return parser

def _flatten_archive_arg(archives: t.Iterable[pathlib.Path]) -> t.Iterable[t.Tuple[int, pathlib.Path]]:
  for path in archives:
    if not path.exists():
      continue
    if path.is_dir():
      yield from _flatten_archive_arg(path.iterdir())
    elif path.suffix != '.zip':
      continue
    else:
      match = _ARCHIVE_NAME_PATTERN.search(path.stem)
      year = int(match.groupdict()['year']) if match else -1
      yield year, path

if __name__ == '__main__':
  ns = setup_cmd_parser().parse_args()
  with ns.output as outfile:
    for index, (year, path) in enumerate(_flatten_archive_arg(ns.archives)):
      raw_data = read_raw_data(path)
      data = process_raw_data(raw_data, year)
      savef_data(outfile, data, index == 0)
