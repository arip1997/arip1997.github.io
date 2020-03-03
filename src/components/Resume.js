import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../image/me.jpg';
import Education from './Education';
import Experience from './Experience';
import Skil from './Skil';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col ={4}>
            <div style={{textAlign:'center'}}>
              <img 
                src={me}
                alt="Avatar"
                style={{height:'200px', borderRadius:'20px'}}
              /> 
            </div>
            <h2 style={{paddingTop:'2em'}}> Arif Rahmat Santoso </h2>
            <h4 style={{color:'grey'}}> Mahasiswa </h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Mahasiswa yang berada di malang yang sedang berkuliah di POliteknik Negeri Malang</p>
            
            <h4 style={{color:'grey'}}>Alamat</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Surabaya, Jawa Timur, Indonesia </p>
          </Cell>
          <Cell col ={8} className='resume-right-cel'>
            <h2>Pendidikan</h2>            
            <Education 
              startYear={2004}
              endYear={2010}
              schoolName='SD Dahlanuddin'
              schoolDescription=' Memulai merasakan sekolah SD '
            />
            <Education 
              startYear={2010}
              endYear={2013}
              schoolName='MTs Unggulan Amanatul Ummah'
              schoolDescription=' Merasakan sekolah Mts dengan ilmu formal yang di imbangi ilmu pondok pesantren  '
            />
            <Education 
              startYear={2013}
              endYear={2016}
              schoolName='SMK Queen Al Falah'
              schoolDescription=' Mengambil Jurusan Teknologi Komputer dan Jaringan '
            />
            <Education 
              startYear={2016}
              endYear={2021}
              schoolName=' Politeknik Negeri Malang '
              schoolDescription=' Mengambil Jurusan Teknologi Informasi  '
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Pengalaman</h2>            
            <Experience               
              startYear={2020 }
              endYear='1 Bulan'
              jobName='PT. Otak Kanan'
              jobDescription=' PKL di Bidang Softwarehose di Kota Surabaya'
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Skill</h2>
            
            <Skil
              skill = 'HTML/CSS'
              value = {80}
            />
            <Skil
              skill = 'PHP'
              value = {75}
            />
            
            <Skil
              skill = 'C#'
              value = {50}
            />

          </Cell>          
        </Grid>
      </div>
    )
  }
}

export default Resume
