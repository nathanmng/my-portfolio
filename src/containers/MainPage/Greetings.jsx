import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinFilled, WhatsAppOutlined } from '@ant-design/icons';
import avatar from '../../avatar_square.png';
import './styles.css';
import TypeWriter from './TypeWriter';

const Greetings = () => {
  const handleOnClickDownloadCV = () => {
    fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV.pdf';
        alink.click();
      })
    })
  }

  const handleOnClickGithub = () => {
    window.open('https://github.com/nathanmng');
  };

  const handleOnClickWhatsapp = () => {
    window.open('tel:+61451370261');
  };

  const handleOnClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/nathanmng/');
  };

  return (
    <div className='greetings'>
      <div className='greetings__line1'>Hello!</div>
      <div className='greetings__line2'>I'm Eric</div>
      <TypeWriter />
      <div className='greetings__line_avatar'>
      <img className='avatar' src={avatar} alt='me' />
      </div>
      <div className='greetings__line4'>
        <Button ghost shape="round" onClick={handleOnClickDownloadCV} icon={<DownloadOutlined />} className="btn-download-cv" size='large'>
          Download CV
        </Button>
        <Button icon={<GithubOutlined />} onClick={handleOnClickGithub} ghost shape="circle" className='btn-git' size='large' />
        <Button icon={<WhatsAppOutlined />} onClick={handleOnClickWhatsapp} ghost shape="circle" className='btn-whatsapp' size='large' />
        <Button icon={<LinkedinFilled />} onClick={handleOnClickLinkedin} ghost shape="circle" className='btn-linkedin' size='large' />
      </div>

    </div>
  )
};

export default Greetings;
