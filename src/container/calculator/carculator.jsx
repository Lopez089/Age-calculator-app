import { ShowAge } from '../../components';
import { AgeForm } from '../'
import './carculator.css'

export const Carculator = () => {
  return (
    <section className="carculator">
      <AgeForm />
      <hr />
      <ShowAge />
    </section>
  )
}

