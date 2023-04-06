import classes from './Comment.module.css'

export const Comment = ({comments,id}) =>{
  

  return (
    comments.map(({writerName,comment})=>(
      <div key={id} className={classes.com}>
        <div className={classes.comWriterName}>{writerName}</div> 
        <div>{comment}</div>   
      </div>))
  );
};