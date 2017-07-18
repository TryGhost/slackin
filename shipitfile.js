function init(shipit) {
  require('ghost-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: './',
      deployTo: '/opt/slack/',
      ignores: ['.git', 'node_modules'],
      sharedLinks: [{
        name: 'node_modules',
        type: 'directory'
      }]
    },
    staging: {
      servers: process.env.STG_USER + '@' + process.env.STG_SERVER
    },
    production: {
      servers: process.env.PRD_USER + '@' + process.env.PRD_SERVER
    }
  });
}
module.exports = init;
