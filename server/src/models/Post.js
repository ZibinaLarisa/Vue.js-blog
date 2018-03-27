module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  })

  return Post
}
