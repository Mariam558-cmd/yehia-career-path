"use client";

import { useState } from "react";
import { tasks } from "../data/plan";

export default function Plan() {
  const [completed, setCompleted] = useState<string[]>([]);

  function handleCheck(taskId: string) {
    if (completed.includes(taskId)) {
      setCompleted(completed.filter((item) => item !== taskId));
    } else {
      setCompleted((previous) => [...previous,taskId]);
    }
  }

  const progress = Math.round(
    (completed.length / tasks.length) * 100
  );

  return (
    <main className="plan-page">
      <section className="plan-header">
        <h1>A simple plan, big goals</h1>

        <div className="progress-box">
          <div className="progress-top">
            <strong>Your Progress</strong>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>
            {completed.length} of {tasks.length} tasks completed
          </p>
        </div>
      </section>

  
      <section className="plan-tasks">

        <p className="plan-introduction">
         🎯 Three steps to turn my skills into opportunities
        </p>

        {/* Prepare */}
        <div className="milestone">
          <div className="milestone-header">

            <div className="milestone-title">
              <span className="milestone-number">01</span>
              <h3>Prepare</h3>
            </div>

            <p>
              Build a strong foundation and get ready to apply
              for my first job.
            </p>

          </div>

          <div className="task-list">
            {tasks
              .filter((task) => task.stage === "Prepare")
              .map((task) => (
                <div
                  key={task.id}
                  className={`task ${
                    completed.includes(task.id)
                      ? "task-completed"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completed.includes(task.id)}
                    onChange={() => handleCheck(task.id)}
                  />

                  <h4>{task.title}</h4>
                </div>
              ))}
          </div>
        </div>

        {/* Practice */}
        <div className="milestone">
          <div className="milestone-header">

            <div className="milestone-title">
              <span className="milestone-number">02</span>
              <h3>Practice</h3>
            </div>

            <p>
              Strengthen the skills needed for my target role
              and become more confident.
            </p>

          </div>

          <div className="task-list">
            {tasks
              .filter((task) => task.stage === "Practice")
              .map((task) => (
                <div
                  key={task.id}
                  className={`task ${
                    completed.includes(task.id)
                      ? "task-completed"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completed.includes(task.id)}
                    onChange={() => handleCheck(task.id)}
                  />

                  <h4>{task.title}</h4>
                </div>
              ))}
          </div>
        </div>

        {/* Apply */}
        <div className="milestone">
          <div className="milestone-header">

            <div className="milestone-title">
              <span className="milestone-number">03</span>
              <h3>Apply</h3>
            </div>

            <p>
              Start applying to suitable opportunities and
              manage the application process.
            </p>

          </div>

          <div className="task-list">
            {tasks
              .filter((task) => task.stage === "Apply")
              .map((task) => (
                <div
                  key={task.id}
                  className={`task ${
                    completed.includes(task.id)
                      ? "task-completed"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={completed.includes(task.id)}
                    onChange={() => handleCheck(task.id)}
                  />

                  <h4>{task.title}</h4>
                </div>
              ))}
          </div>
        </div>

      </section>
    </main>
  );
}