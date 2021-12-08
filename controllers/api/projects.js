const fetch = require('node-fetch');
const Project = require('../../models/project');

module.exports = {
    create,
    getAll,
    findOneAndDelete,
    updateProject
};

async function getAll(req, res) {
    const projects = await Project.find({});
    res.json(projects);
}

async function create(req, res) {
    console.log(req.body);
    const project = await Project({...req.body, user: req.user});
    project.save();
    res.json(project);
}

async function findOneAndDelete(req, res) {
    await Project.findByIdAndDelete(req.params.id);
    console.log("controller");
    const projects = await Project.find({});
    res.json(projects);
}

async function updateProject(req, res) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log("edits on edits");
    res.json(project);
}