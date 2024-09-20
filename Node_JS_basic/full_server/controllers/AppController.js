class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Bonjour École Holberton !');
  }
}

export default AppController;
