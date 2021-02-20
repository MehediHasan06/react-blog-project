import styles from '../../styles/emp.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { emp: data } // returning as props
  }
}

const Employees = ({ emp }) => {

  return (
    <div>
      <h1>All Employees</h1>
      {emp.map(employee => (
        <Link href={`/employees/${employee.id}`} key={employee.id}>
          <a className={styles.single}>
            <h3>{ employee.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Employees;
