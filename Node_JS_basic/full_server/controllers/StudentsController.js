import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = req.query.filePath;
    try {
      const students = await readDatabase(database);
      res.status(200).write('Voici la liste de nos étudiants\n');

      for (const [field, names] of Object.entries(students).sort()) {
        res.write(`Nombre d'étudiants en ${field} : ${names.length}. Liste : ${names.join(', ')}\n`);
      }

      res.end();
    } catch (err) {
      res.status(500).send('Impossible de charger la base de données');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const database = req.query.filePath;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Le paramètre major doit être CS ou SWE');
      return;
    }

    try {
      const students = await readDatabase(database);
      const names = students[major] || [];
      res.status(200).send(`Liste : ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send('Impossible de charger la base de données');
    }
  }
}

export default StudentsController;
