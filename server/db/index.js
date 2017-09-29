var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Messages = orm.define('Messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Messages);
Message.belongsTo(User);

User.sync();
Messages.sync();

exports.User = User;
exports.Messages = Messages;