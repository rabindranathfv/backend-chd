const { Router } = require("express");
const studentsData = require("../data/students");
const { update } = require("../model/student.model");
const router = Router();

const studentsModel = require("../model/student.model");

router.get("/insertion", async (req, res) => {
  let result = await studentsModel.insertMany(studentsData);
  return res.json({
    message: "all the students are inserted succesfully",
    result,
  });
});

router.get("/", async (req, res) => {
  // http://localhost:5000/api/students?genero=F o http://localhost:5000/api/students?genero=M
  const { genero } = req.query;

  const result = await studentsModel
    .find(!genero ? {} : { genero: `${genero}` })
    .sort({ edad: 1 });

  // version 2 de la query
  // const result = await studentsModel.aggregate([
  //   { $match: !genero ? {} : { genero: `${genero}` } },
  // ]);

  return res.json({
    message: "getAllStudents succesfully",
    students: result,
    studentsSize: result.length,
  });
});

router.post("/", async (req, res) => {
  const { nombre, apellido, edad, dni, curso, nota, genero } = req.body;
  if (!nombre || !apellido || !edad || !dni || !curso || !nota || !genero)
    return res.status(400).json({ message: "Incomplet values" });
  let user = {
    nombre,
    apellido,
    edad,
    dni,
    curso,
    nota,
    genero,
  };
  let result = await studentsModel.create(user);
  return res.json({
    message: "create new student successfully",
    student: result,
  });
});

router.put("/:sid", async (req, res) => {
  const id = req.params.sid;
  const UpdateStudent = req.body;
  let result = await studentsModel.updateOne(
    { _id: id },
    { $set: UpdateStudent }
  );
  return res.json({
    message: `getStudentById ${id} succesfully`,
    student: result,
  });
});

router.delete("/:sid", async (req, res) => {
  const id = req.params.sid;
  let result = await studentsModel.deleteOne({ _id: id });
  return res.json({
    message: `deleteStudentById ${id} succesfully`,
    student: result,
  });
});

router.get("/pagination", async (req, res) => {
  const limit = Number(req.query.limit) || 5;
  const page = Number(req.query.page) || 1;
  const order = req.query.order === "asc" ? 1 : -1;
  const result = await studentsModel
    .find()
    .limit(limit * 1)
    .skip(page * limit)
    .sort({ edad: order });

  return res.json({
    students: result,
    page,
    limit,
    message: `get all students list`,
  });
});

router.get("/filtros", async (req, res) => {
  try {
    // TODO: Listar todos los estudiantes ordenados por edad descendiente
    const studentOrder = await studentsModel.find({}).sort({ edad: -1 });

    // TODO: Listar el estudiante mas joven
    const youngestStudent = await studentsModel
      .find()
      .sort({ edad: 1 })
      .limit(1);

    // TODO: listar el 2do cliente mas joven
    const [, secondYoungestStudent] = await studentsModel
      .find()
      .sort({ edad: 1 })
      .limit(2);

    // TODO: listar los estudiantes llamados juan
    const juanList = await studentsModel.find({
      nombre: /^juan.*/i,
    });

    // TODO: listar los estudiantes llamados juan que tengan 29
    // INTENTAR ESCRIBIR ESTA QUERY CON AND
    const juan29List = await studentsModel.find({
      nombre: /^juan.*/i,
      edad: { $eq: 29 },
    });

    // TODO: listar los estudiantes llamados juan o lucia
    const juanOrLuciaList = await studentsModel.find({
      $or: [{ nombre: /^juan.*/i }, { nombre: /^lucia.*/i }],
    });

    // TODO: Listar todos los estudiantes que tengan mas de 25
    const stundentsOver25 = await studentsModel.find({ edad: { $gt: 25 } });

    // TODO: Listar todos los estudiantes que tengan 25 o menos
    const stundentsLower25 = await studentsModel.find({ edad: { $lte: 25 } });

    // TODO: Listar todos los estudiantes que tengan 25 o menos
    const stundentsNot25 = await studentsModel.find({
      $nor: [{ edad: { $eq: 25 } }],
    });

    return res.json({
      message: "severals querys based on parameters",
      studentOrder,
      youngestStudent,
      secondYoungestStudent: secondYoungestStudent,
      juanList,
      juan29List,
      juanOrLuciaList,
      stundentsOver25,
      stundentsLower25,
      stundentsNot25,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: students.routes.js:170 ~ router.get ~ error:",
      error
    );
  }
});

router.get("/avanzados", async (req, res) => {
  // TODO: listar los estudiantes que esten entre los 26 y los 35
  const studentBet26and35 = await studentsModel.find({
    $and: [{ edad: { $gte: 25 } }, { edad: { $lte: 35 } }],
  });

  // TODO: actualizar la edad de un estudiante a 36 y verificar que se actualizo
  const updateStudentAge = await studentsModel.updateOne(
    { _id: "63fa3a2b4955a42b29af4767" },
    {
      $set: {
        edad: 36,
        dni: 1111111111,
        genero: "M",
        nota: 1,
        curso: "programacion fullstack",
      },
    }
  );

  // actualizar 2 edades para que salgan de un listado
  const updateStudentsAge = await studentsModel.updateMany(
    { edad: { $eq: 36 } },
    { $set: { edad: 40 } }
  );

  // TODO: Eliminar a los juanes
  const deleteJuanes = await studentsModel.deleteMany({ nombre: /^juan.*/i });

  // TODO: eliminar todos sabiendo que tienen ID
  const deleteAllStudents = await studentsModel.deleteMany({
    _id: { $exists: true },
  });

  return res.json({
    message: "severals querys based on parameters",
    studentBet26and35,
    updateStudentAge,
    updateStudentsAge,
    deleteJuanes,
    deleteAllStudents,
  });
});

router.get("/:sid", async (req, res) => {
  const { sid } = req.params;

  // {
  //   _id: sid;
  // }
  let student = await studentsModel.findById(sid);

  if (!student) {
    return res.json({
      message: " this student does not exist",
    });
  }

  return res.json({
    message: `student with id ${sid}`,
    student,
  });
});

module.exports = router;
