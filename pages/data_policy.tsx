import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { dataPolicy } from '../data/dataPolicy';

const data_policy: React.FC = () => (
    <div>
        <NextHead title="PetsCity | Data Policy" />
        <Navbar />
        <div className="dataPolicy">
            <section className="section">
                {dataPolicy.map(({ title, text }, index) => (
                    <details className="details" key={index}>
                        <summary className="summary">{title}</summary>
                        <div className="div">
                            <p className="p">{text}</p>
                        </div>
                    </details>
                ))}
            </section>
        </div>
        <Footer />
    </div>
);

export default data_policy;
