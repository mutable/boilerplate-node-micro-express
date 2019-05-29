  const sendMarkdown =  require('./sendMarkdown');
  
  const homePage = (req, res) => {
    res.send(sendMarkdown());
  }

  module.exports = homePage;