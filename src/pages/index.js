import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Typography, Row, Col } from "antd";
import styles from "./index.module.css";

const { Title, Text } = Typography;

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Row gutter={[24, 24]} align="middle" justify="space-between">
          {/* Left Column: Text Content */}
          <Col xs={24} md={12} style={{ padding: 20 }}>
            <Title level={2} style={{ color: "#fff" }}>
              Build with Goodwill
            </Title>
            <Text style={{ fontSize: 16, color: "#eee" }}>
              Build your own innovative platforms or deploy algorithmic trading
              strategies that suit your unique requirements using our robust and
              reliable trading APIs.
            </Text>

            <div className={styles.buttons} style={{ marginTop: 24 }}>
              <Link
                className="button button--secondary button--lg"
                to="/api/v1/introduction"
              >
                API Documentation
              </Link>

              <Link
                className="button button--secondary button--lg"
                style={{ marginLeft: 16 }}
                to="https://developer.gwcindia.in/#/"
              >
                Sign In
              </Link>
            </div>
          </Col>

          {/* Right Column: Logo Image */}
          {/* <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <img
              src="/img/webLogo.png"
              alt="Goodwill Logo"
              className={styles.heroImage}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                margin: "0 auto",
              }}
            />
          </Col> */}
        </Row>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Official API Documentation and Developer Console"
    >
      <HomepageHeader />
    </Layout>
  );
}
