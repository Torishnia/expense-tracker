import styles from './index.module.scss';

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className={styles.chart_bar}>
      <div className={styles.chart_bar__inner}>
        <div 
          className={styles.chart_bar__fill} 
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chart_bar__label}>{label}</div>
    </div>
  )
}

export default ChartBar;
