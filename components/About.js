import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Linking,
  TouchableHighlight
  // Image
} from "react-native";
import styles from "../styles/aboutStyles";
// import hamburgerImg from "../images/hamburger.png";
import TitleBar from "./TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";

const URL =
  "https://www.amazon.co.uk/s?k=travel+guide&linkCode=sl2&linkId=eb60e7e2dfa44e8d2215447ead78ca11&tag=noelectextrep-21&ref=as_li_ss_tl";

class About extends Component {
  handlePress = () => {
    // inform user of error
    Linking.openURL(URL).catch(err => console.error("An error occurred", err));
  };
  render() {
    return (
      <View style={styles.parent}>
        {/* <View style={styles.titleWrapper}>
          <Text style={styles.title}>About</Text>
        </View>
        <TouchableHighlight
          style={styles.hamburger}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image style={{ width: 25, height: 25 }} source={hamburgerImg} />
        </TouchableHighlight> */}
        <TitleBar
          toggle={() => {
            this.props.navigation.toggleDrawer();
          }}
          name="About"
        />
        <ScrollView style={styles.scrollWrapper}>
          <Text style={styles.about}>
            I recently spent a few months travelling around South America and
            soon stumbled into a minefield. A metaphorical minefield of social
            embarassment and practical problems that the guide books did little
            to alleviate. The problem? What to do with the toilet paper after it
            had been "used". I have to admit that I'd imagined that in most
            countries in the world, putting toilet paper down the toilet was the
            accepted method of disposal, but if you're a Western European or
            similar type of person and you decide to do a bit of travelling,
            where you put the paper can suddenly turn into a bit of a problem –
            at least until you get the hang of the country and their rules. Now,
            fair enough, there are plenty of guide books and you'll probably
            have one (if not, feel free to click the button below and buy
            something, it all helps pay for hosting), and some books for some
            countries were quite specific, but many aren't, some don't mention
            it at all and there were some glaring omissions when you could
            really do with knowing; this is the product of a spare few weeks
            when I got back. So, if you're a travelling sort and don't have
            access to, or are a bit shy to ask, a local, the bits of information
            collected here will hopefully help you out in those occasional
            sticky situations.
          </Text>
          <Text style={styles.about}>So, where do I put the paper?</Text>
          <Text style={styles.about}>
            If you flick through the countries in this app you'll find out what
            to do with the paper after you've finished with it; I won't claim
            that it's entirely accurate or complete, it's a partially exhaustive
            list of where to put the paper after you've visited the little boys'
            or girls' room. I have tried to be accurate, but there's bound to be
            some mistakes, so let me know if you know better (see contact page);
            and if this information is remotely useful or entertaining, feel
            free to click through a link and buy something to help keep this
            running. And of course, if there are instructions given to you
            locally, follow them. I don't want to be held responsible for an
            international incident if you bung up the bog somewhere posh.
          </Text>
          {/* <View style={styles.buttonWrapper}>
            <Button
              color="#bb86fc"
              onPress={this.handlePress}
              title="Guide books"
            />
          </View> */}
          <TouchableHighlight
            onPress={this.handlePress}
            style={styles.bookButton}
          >
            <View style={styles.getBookWrapper}>
              <View>
                <Text style={styles.getTheBook}>Guide books</Text>
                <Text style={styles.supportAppreciated}>
                  Your support is appreciated
                </Text>
              </View>
              <Icon name="book" color="white" size={60} />
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default About;
