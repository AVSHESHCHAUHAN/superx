
// ================= IMPORTS =================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({
    origin: "*"
}));

const app = express();

app.use(cors());
app.use(express.json());

// CONFIG
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

// DB CONNECT
mongoose.connect(MONGO_URL)
.then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.log("❌ DB Error:", err.message);
});

// ================= ROUTES =================

// -------- STUDENT LOGIN --------
app.post("/student/login", async (req, res) => {
    try {
        const { studentId, password } = req.body;

        const user = await db.collection("users").findOne({
            studentId,
            password,
            role: "student"
        });

        if (user) {
            res.json({
                success: true,
                studentId: user.studentId,
                username: user.username
            });
        } else {
            res.json({ success: false });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- ADMIN LOGIN --------
app.post("/admin/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await db.collection("users").findOne({
            username,
            password,
            role: "admin"
        });

        res.json({ success: !!admin });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- PERSONAL DETAILS --------
app.get("/student/:id", async (req, res) => {
    try {
        const student = await db.collection("students")
            .findOne({ studentId: req.params.id });

        res.json(student);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- MARKS --------
app.get("/student/marks/:id", async (req, res) => {
    try {
        const data = await db.collection("marks")
            .find({ studentId: req.params.id })
            .toArray();

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- ATTENDANCE --------
app.get("/student/attendance/:id", async (req, res) => {
    try {
        const data = await db.collection("attendance")
            .find({ studentId: req.params.id })
            .toArray();

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- FEES --------
app.get("/student/fees/:id", async (req, res) => {
    try {
        const data = await db.collection("fees")
            .findOne({ studentId: req.params.id });

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- TRANSACTIONS --------
app.get("/student/transactions/:id", async (req, res) => {
    try {
        const data = await db.collection("transactions")
            .find({ studentId: req.params.id })
            .toArray();

        res.json(data || []);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- FACULTY --------
app.get("/student/faculty", async (req, res) => {
    try {
        const data = await db.collection("faculty").find().toArray();
        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// -------- COURSES --------
app.get("/student/courses/:id", async (req, res) => {
    try {
        const enrollments = await db.collection("enrollments")
            .find({ studentId: req.params.id })
            .toArray();

        const courseIds = enrollments.map(e => e.courseId);

        const courses = await db.collection("courses")
            .find({ courseId: { $in: courseIds } })
            .toArray();

        res.json(courses);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ================= ADMIN =================

// ADD STUDENT
app.post("/admin/addStudent", async (req, res) => {
    try {
        await db.collection("students").insertOne(req.body);

        await db.collection("users").insertOne({
            studentId: req.body.studentId,
            username: req.body.name,
            password: req.body.password,
            role: "student"
        });

        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE STUDENT
app.post("/admin/updateStudent", async (req, res) => {
    try {
        await db.collection("students").updateOne(
            { studentId: req.body.studentId },
            { $set: req.body }
        );

        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ADD MARKS
app.post("/admin/addMarks", async (req, res) => {
    try {
        await db.collection("marks").insertOne(req.body);
        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ADD ATTENDANCE
app.post("/admin/addAttendance", async (req, res) => {
    try {
        await db.collection("attendance").insertOne(req.body);
        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE FEES
app.post("/admin/updateFees", async (req, res) => {
    try {
        await db.collection("fees").updateOne(
            { studentId: req.body.studentId },
            { $set: req.body },
            { upsert: true }
        );

        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ADD TRANSACTION
app.post("/admin/addTransaction", async (req, res) => {
    try {
        await db.collection("transactions").insertOne(req.body);
        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ADD COURSE
app.post("/admin/addCourse", async (req, res) => {
    try {
        await db.collection("courses").insertOne(req.body);
        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE COURSE
app.post("/admin/updateCourse", async (req, res) => {
    try {
        await db.collection("courses").updateOne(
            { courseId: req.body.courseId },
            { $set: req.body }
        );

        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ADD FACULTY
app.post("/admin/addFaculty", async (req, res) => {
    try {
        await db.collection("faculty").insertOne(req.body);
        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE FACULTY
app.post("/admin/updateFaculty", async (req, res) => {
    try {
        await db.collection("faculty").updateOne(
            { name: req.body.name },
            { $set: req.body }
        );

        res.json({ success: true });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
