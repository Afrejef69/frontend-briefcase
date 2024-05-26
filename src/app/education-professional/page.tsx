"use client";
import java from "../../../public/java.svg";
import python from "../../../public/python.svg";
import js from "../../../public/javascript.svg";
import html from "../../../public/html-five.svg";
import css from "../../../public/css3.svg";
import react from "../../../public/react.svg";
import node from "../../../public/nodejs.svg";
import mongo from "../../../public/mongodb.svg";
import mysql from "../../../public/mysql.svg";
import postgres from "../../../public/postgresql.svg";
import firebase from "../../../public/firebase.svg";
import git from "../../../public/git.svg";
import docker from "../../../public/docker.svg";
import jira from "../../../public/jira.svg";
import vscode from "../../../public/vscode.svg";
import jetbrains from "../../../public/jetbrains.svg";
import ts from "../../../public/typescript.svg";
import { Habilities, ListProgramms, Loading } from "@/components";

const develop = [
  {
    name: "Java",
    icon: java,
    value: "lenguage",
  },
  {
    name: "Python",
    icon: python,
    value: "lenguage",
  },
  {
    name: "JavaScript",
    icon: js,
    value: "lenguage",
  },
  {
    name: "HTML",
    icon: html,
    value: "lenguage",
  },
  {
    name: "CSS",
    icon: css,
    value: "lenguage",
  },
  {
    name: "TypeScript",
    icon: ts,
    value: "lenguage",
  },
  {
    name: "React",
    icon: react,
    value: "framework",
  },
  {
    name: "Node",
    icon: node,
    value: "framework",
  },
  {
    name: "MongoDB",
    icon: mongo,
    value: "database",
  },
  {
    name: "MySQL",
    icon: mysql,
    value: "database",
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    value: "database",
  },
  {
    name: "Firebase",
    icon: firebase,
    value: "database",
  },
  {
    name: "Git",
    icon: git,
    value: "tools",
  },
  {
    name: "Docker",
    icon: docker,
    value: "tools",
  },
  {
    name: "Jira",
    icon: jira,
    value: "tools",
  },
  {
    name: "VS Code",
    icon: vscode,
    value: "tools",
  },
  {
    name: "JetBrains",
    icon: jetbrains,
    value: "tools",
  },
];

export default function Resume() {
  const lenguages = develop.filter((item) => item.value === "lenguage");
  const frameworks = develop.filter((item) => item.value === "framework");
  const databases = develop.filter((item) => item.value === "database");
  const tools = develop.filter((item) => item.value === "tools");

  return (
    <div className="container animate-fadeIn">
      <div className="section animate-slideInLeft">
        <h2 className="section-title">Estudios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 items-center">
          <div className="subsection">
            <h3>Colegio</h3>
            <p>IEA - Instituto de Estudios Avanzados</p>
          </div>
          <div className="subsection">
            <h3>Universidad</h3>
            <p>URL- Universidad Rafael Landivar</p>
          </div>
          <div className="subsection">
            <h3>Idiomas</h3>
            <p>Ingles (Medio)</p>
            <p>Español (lengua materna)</p>
          </div>
          <div className="subsection md:col-span-3">
            <h3>Cursos Externos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h4>
                Taller de Git y Github <br /> &quot;De cero a Maestro&quot;.
              </h4>
              <p className="p-5">
                Taller impartido en un simposio por parte de la URL
              </p>
              <h4 lang="en">Learn HTML</h4>
              <p className="p-5">Curso de web.dev</p>
              <h4 lang="en">Learn CSS</h4>
              <p className="p-5">Curso de web.dev</p>
              <h4 lang="en">Learn Forms</h4>
              <p className="p-5">Curso de web.dev</p>
              <h4 lang="en">Learn Responsive Design</h4>
              <p className="p-5">Curso de web.dev</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section animate-slideInLeft">
        <div className="subsection">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-10 box-border">
            <ListProgramms list={lenguages} title="Lenguajes de programación" />
            <ListProgramms list={frameworks} title="Frameworks" />
            <ListProgramms list={databases} title="Bases de datos" />
            <ListProgramms list={tools} title="Herramientas" />
          </div>
        </div>
        <div className="subsection p-10">
          <Habilities />
        </div>
      </div>
      <div className="section p-10 animate-slideInLeft">
        <h2>Experiencia Profesional</h2>
        <div className="subsection">
          <h3>Ventas</h3>
          <p>Empresa: ElZeppelin</p>
          <p>Periodo: 2021 - Actualidad</p>
          <p>Descripción: Practicante en el area de ventas</p>
        </div>
      </div>
      <Loading />
    </div>
  );
}
