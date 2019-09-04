const fs = require('fs');

import { ProjectSerializer } from '@dvl-fw/core';
import { XMacroscopeProject } from '../shared/xmacroscope-project';

async function exportProject(outYAML, graphQLData?: string) {
  let staticData: 'mocked' | any = 'mocked';
  if (graphQLData) {
    staticData = JSON.parse(fs.readFileSync(graphQLData));
  }
  const project = await XMacroscopeProject.create({staticData});
  const yamlString = await ProjectSerializer.toYAML(project);
  fs.writeFileSync(outYAML, yamlString, 'utf8');
}

const args = process.argv.slice(2);
exportProject(args[0], args.length > 1 ? args[1] : undefined).then(() => {
  process.exit();
});
