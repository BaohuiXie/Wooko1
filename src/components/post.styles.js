const styles = {
  header: {
      width: '100%',
      color: 'rgb(97, 95, 95)',
      textAlign: 'center',
  },
  Form:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    width:'50%',
    height: 'auto',
    left:'31%',
    margin:'5px',
    padding: '2.5px',
    flexWrap:'wrap',
  },

  box:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    width:'80%',
    height: 'auto',
    left:'31%',
    margin:'5px',
    padding: '2.5px',
    flexWrap:'wrap',
  },


  topbox:{
    width: '100%',
    textAlign:'center',
    backgroundColor: 'rgb(97, 95, 95)',
    color: 'black',
  },

  midbox:{
    display: 'flex',
    width: '100%', 
    flexDirection: 'column',
  },

  starbox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    flexWrap:'wrap',
  },

  bottombox:{
    display: 'flex',
    width: '100%',
    backgroundColor: 'rgb(97, 95, 95)',
    textAlign:'left',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap:'wrap',

  },

  arrow:{
    display: 'flex',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  paragraph:{
    textAlign:'left',
    width: '50%',
  },

  innercomment:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:'none',
    width:'auto',
    height: 'auto',
    left:'31%',
    margin:'5px',
    padding: '2.5px',
    flexWrap:'wrap',
  },


  innerBBRight:{
    color: 'black',
    backgroundColor: 'rgb(68, 67, 67)',
    borderColor: 'black',
    borderStyle: 'solid',
   // flexWrap:'wrap',
    //width:'50',
    flex:1
  },


  innerBBLeft:{
      color: 'black',
      backgroundColor: 'rgb(68, 67, 67)',
      borderColor: 'black',
      borderStyle: 'solid',
     // flexWrap:'wrap',
      //width:'50%',
      flex:1
  },

  innerBottemBox:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    border:'none',
  },

  innercommentsecondbox:{
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderStyle: 'solid',
    width:'auto',
    height: 'auto',
    left:'31%',
    margin:'5px',
    padding: '2.5px',
  }
}
export default styles;