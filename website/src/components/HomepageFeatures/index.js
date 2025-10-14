import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Druid Basics',
    year: '2024',
    image: require('@site/static/img/druid-basics.png').default,
    link: '/courses/druid-basics/',
    description: (
      <>
        Druid is becoming the go-to cloud-native answer to scalable time series data storage and analytics.
        If you have time series data, you need to learn Druid!
      </>
    ),
  },
  {
    title: 'Druid Data Modeling',
    year: '2024',
    image: require('@site/static/img/data-modeling.png').default,
    link: '/courses/data-modeling/',
    description: (
      <>
        Data modeling is essential to derive speed and scalability from Druid.
        Learn how to ingest data to maximize Druid's capabilities.
      </>
    ),
  },
   {
    title: 'Druid Monitoring',
    year: '2024',
    image: require('@site/static/img/monitoring.png').default,
    link: '/courses/druid-monitoring/',
    description: (
      <>
        Learn about the observability data emitted by Druid.
        Examine the logs and metrics in hands-on exercises.
      </>
    ),
  },
     {
    title: 'Druid Streaming',
    year: '2024',
    image: require('@site/static/img/streaming.png').default,
    link: '/courses/druid-streaming/',
    description: (
      <>
        Learn about the observability data emitted by Druid.
        Examin the logs and metrics in hands-on exercises.
      </>
    ),
  }
];

function Feature({image, title, year, description, link}) {
  return (
    <div className={clsx('col col--3 feature-box')}>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
         <img src={image} style={{maxHeight: 250}} />
         <Heading as="h3">{title}</Heading>
         <Heading as="h4">{year}</Heading>
          <p>{description}</p>
        </Link>
      </div>
    </div>

  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}