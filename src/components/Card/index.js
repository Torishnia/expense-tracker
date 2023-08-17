import styles from './index.module.scss';

function Card (props) {
  const classes = `${styles.card} ${props.className}`;

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;
