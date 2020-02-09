import {Layout} from "../components/Layout";
import axios from "axios";
import Error from "./_error";
import { Component } from "react";
  
export default class Payments extends Component {
  static async getInitialProps() {
    const res = await axios.get("https://api.github.com/users/reedbarger");
    const statusCode = res.status > 200 ? res.status : false;
    // const data = await res.json();
    const data = {};
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="Payments">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
  }
}
