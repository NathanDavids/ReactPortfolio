import React from 'react'
import '../Skills/Skills.css'
import HTML from "../../assets/html1.png"
import CSS from '../../assets/css.png'
import JS from '../../assets/javascript.png'
import LogoReact from '../../assets/reactSkills.png'
import Python from '../../assets/python.png'
import Java from '../../assets/java.png'
import VisualStudio from '../../assets/visualstudio.png'
import Github from '../../assets/Github.png'

function Skills () {
    let imgBx = document.querySelectorAll('.imgBx');
    let contentBx = document.querySelectorAll('.contentBx');

    for (let i=0; i<imgBx.length; i++){
        imgBx[i].addEventListener('mouseover', function(){
            for (let i=0; i<contentBx.length; i++){
                contentBx[i].className = 'contentBx';
            }
            document.getElementById(this.dataset.id).className = 'contentBx active';

            for (let i=0; i<imgBx.length; i++){
                imgBx[i].className = 'imgBx';
            }
            this.className = 'imgBx active'
        })
    }



    return (
      <>
      <body className='bodytag'>
      <div className="containers">
        <div className="symbol">
            <div className='imgBx active' style={{ '--i': 1}} data-id='content1'>
                <img src={HTML}/>
            </div>
            <div className='imgBx' style={{ '--i': 2}} data-id='content2'>
                <img src={CSS}/>
            </div>
            <div className='imgBx' style={{ '--i': 3}} data-id='content3'>
                <img src={LogoReact}/>
            </div>
            <div className='imgBx' style={{ '--i': 4}} data-id='content4'>
                <img src={Python}/>
            </div>
            <div className='imgBx' style={{ '--i': 5}} data-id='content5'>
                <img src={Java}/>
            </div>
            <div className='imgBx' style={{ '--i': 6}} data-id='content6'>
                <img src={VisualStudio}/>
            </div>
            <div className='imgBx' style={{ '--i': 7}} data-id='content7'>
                <img src={Github}/>
            </div>
            <div className='imgBx' style={{ '--i': 8}} data-id='content8'>
                <img src={JS}/>
            </div>
      </div>
      <div className="content">
        <div className="contentBx active" id='content1'>
            <div className="card">
                <div className="imgBx">
                    <img src={HTML}/>
                </div>
                <div className="textBx">
                    <h2>HTML <br /><br /><span>HTML is a markup <br /> language used to <br /> create and strcuture <br /> the content of web pages <br /><br /> 2 Years of Experience</span> <br /><br /></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content2'>
            <div className="card">
                <div className="imgBx">
                    <img src={CSS}/>
                </div>
                <div className="textBx">
                    <h2>CSS <br /><br /><span>CSS is used to <br />control the <br /> presentationan layout <br /> of HTML documents. <br /><br /> 2 Years Experience <br /><br /></span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content3'>
            <div className="card">
                <div className="imgBx">
                    <img src={LogoReact}/>
                </div>
                <div className="textBx">
                    <h2>React <br /><br /><span>React is used for building user interfaces, dynamic and interactive components <br /> <br />1 Year Experience <br /><br /></span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content4'>
            <div className="card">
                <div className="imgBx">
                    <img src={Python}/>
                </div>
                <div className="textBx">
                    <h2>Python <br /><br /><span>Python is known for its simplicity, readability, and extensive range of applications. <br /><br /> 1 Year Experience</span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content5'>
            <div className="card">
                <div className="imgBx">
                    <img src={Java}/>
                </div>
                <div className="textBx">
                    <h2>Java <br /><br /><span>Java is a object-oriented programming language known for its portability. <br /><br /> 1 Year Experience</span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content6'>
            <div className="card">
                <div className="imgBx">
                    <img src={VisualStudio}/>
                </div>
                <div className="textBx">
                    <h2>Visual Basic <br /><br /><span>Visual Basic is an (IDE) developed by Microsoft, designed to facilitate the creation of GUI applications. <br /><br />3 Years Experience</span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content7'>
            <div className="card">
                <div className="imgBx">
                    <img src={Github}/>
                </div>
                <div className="textBx">
                    <h2>Github <br /><br /><span>
GitHub enables developers to host, review, and manage code repositories for software projects. <br /><br /> 1 Year Experience</span></h2>
                </div>
            </div>
        </div>
        <div className="contentBx" id='content8'>
            <div className="card">
                <div className="imgBx">
                    <img src={JS}/>
                </div>
                <div className="textBx">
                    <h2>JavaScript <br /><br /><span>JavaScript is used for adding interactivity, functionality, and dynamic content. <br /><br /> 1 Year Experience</span></h2>
                </div>
            </div>
        </div>
      </div>
      </div>
      </body>
      </>
    )
  }
  
  export default Skills