import React from 'react';
import WorkItem from '../components/WorkItem';

const works = [
  {
    title: "Watawat ng Pilipinas",
    date: "2023",
    description: "Developed using Inkscape.",
    mediaUrl: "https://drive.google.com/file/d/1Dz9AAdLw0tz0g1Q1FWhlBFq8LK6RjfPY/view?usp=drive_link",
    isSvg: true
  },
  {
    title: "Invitation",
    date: "2023",
    description: "Developed using Inkscape.",
    mediaUrl: "https://drive.google.com/file/d/1D5zgzlygg15haOr3eharxcu14pDfPvjW/view?usp=drive_link",
    isSvg: true
  },
  {
    title: "Shape",
    date: "2023",
    description: "Developed using Inkscape.",
    mediaUrl: "https://drive.google.com/file/d/1_qDpnYquGHf3lu5oZQjt83arEGZJm_nx/view?usp=drive_link",
    isSvg: true
  },
];

function OutputPage() {
  return (
    <div className="output-page">
      <h1>My Work</h1>
      <p>Below is a collection of projects and assignments completed during the Computer Graphics and Visual Computing course.</p>
      {works.map((work, index) => (
        <WorkItem key={index} {...work} />
      ))}
    </div>
  );
}

export default OutputPage;

