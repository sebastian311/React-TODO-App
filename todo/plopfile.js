module.exports = (plop) => {
  // ./plopfile.js
  // Setting up Plop to generate components
  // When run `npm run plop` you'll be asked to enter the component name.
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}Component/{{pascalCase name}}.tsx',
        templateFile: 'src/Plop-Templates/component.hbs'
      },
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}Component/{{pascalCase name}}.scss',
      },
    ],
  });
  // Setting up Plop to generate services
  // When run `npm run plop` you'll be asked to enter the service name.
  // TODO: Fix this later. Too lazy rn
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name? (x.service.tsx)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/data-access/services/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'src/Plop-Templates/service.hbs'
      },
      {
        type: 'add',
        path: './src/data-access/services/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
      },
    ],
  });
};