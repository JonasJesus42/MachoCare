import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';

const CustomNavigationBar = () => {
    const navigation = useNavigation();

    const barHeight = 92

    const goToHome = () => {
        navigation.navigate('Home');
    };

    const goToOther = () => {
        navigation.navigate('Other');
    };

    const goToCalendar = () => {
        navigation.navigate('Calendar');
    }

    const goToAlarms = () => {
        navigation.navigate('Alarms');
    }

    const colorChange = (namePage: string) => {
        const active = "#735BF2"
        const inactive = "#C4C4C4"

        return navigation.getCurrentRoute()?.name === namePage ? active : inactive
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  height: barHeight, backgroundColor: '#ffffff',  }}>
            <TouchableOpacity onPress={goToCalendar} style={{ padding: 10 }}>
                <Icon name="calendar" size={30} color={colorChange("Calendar")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAlarms} style={{ padding: 10 }}>
                <Icon name={"bell"} size={30} color={colorChange("Alarms")} />
            </TouchableOpacity>
              <TouchableOpacity style={styles.button} >
                  <IconAnt  style={styles.buttonText} name={"plus"} size={30} color="#fff" />
              </TouchableOpacity>
            <TouchableOpacity onPress={goToHome} style={{ padding: 10 }}>
                <Icon name={"home"} size={30} color={colorChange("Home")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goToOther} style={{ padding: 10 }}>
                <Icon name={"bars"} size={30} color={colorChange("Other")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    bottom: 30,
    backgroundColor: "#735BF2",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
})

export default CustomNavigationBar;