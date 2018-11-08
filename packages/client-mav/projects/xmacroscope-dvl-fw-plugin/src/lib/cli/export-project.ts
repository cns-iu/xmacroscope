const fs = require('fs');

import { ProjectSerializer } from '@dvl-fw/core';
import { XMacroscopeProject } from '../xmacroscope-project';

async function exportProject(outYAML) {
  const project = await XMacroscopeProject.create(true, true);
  const yamlString = await ProjectSerializer.toYAML(project);
  fs.writeFileSync(outYAML, yamlString, 'utf8');
}

const args = process.argv.slice(2);
exportProject(args[0]).then(() => {
  process.exit();
});
