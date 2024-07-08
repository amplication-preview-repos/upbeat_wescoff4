import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InviteList } from "./invite/InviteList";
import { InviteCreate } from "./invite/InviteCreate";
import { InviteEdit } from "./invite/InviteEdit";
import { InviteShow } from "./invite/InviteShow";
import { DiscordUserList } from "./discordUser/DiscordUserList";
import { DiscordUserCreate } from "./discordUser/DiscordUserCreate";
import { DiscordUserEdit } from "./discordUser/DiscordUserEdit";
import { DiscordUserShow } from "./discordUser/DiscordUserShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DiscordInviteTracker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Invite"
          list={InviteList}
          edit={InviteEdit}
          create={InviteCreate}
          show={InviteShow}
        />
        <Resource
          name="DiscordUser"
          list={DiscordUserList}
          edit={DiscordUserEdit}
          create={DiscordUserCreate}
          show={DiscordUserShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
