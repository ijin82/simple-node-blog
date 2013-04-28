module.exports = function (app, obj) {
  // check access
  app.get('/adm/settings', obj.settingsList);
  // edit setings param card
  app.get('/adm/edit-param/:param_id', obj.editParamm);
  // save settings param prop
  app.post('/adm/save-settings-param', obj.saveParamm);
  // add new settings param
  app.post('/adm/add-settings-param', obj.addParamm);
  // del settings param
  app.get('/adm/delete-settings-param/:id', obj.delParamm);
}
