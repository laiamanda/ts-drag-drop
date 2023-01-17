/* /// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts"/>
/// <reference path="decorator/autobind.ts" />
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-item.ts" /> 
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" /> */

import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput(); // Render HTML file 
new ProjectList('active'); // Render ProjectList that's Active
new ProjectList('finished'); // Render ProjectList that's Finished'
