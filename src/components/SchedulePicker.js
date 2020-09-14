import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const days = [
  {day: "Sunday", id: "0"},
  {day: "Monday", id: "1"},
  {day: "Tuesday", id: "2"},
  {day: "Wednesday", id: "3"},
  {day: "Thursday", id: "4"},
  {day: "Friday", id: "5"},
  {day: "Saturday", id: "6"}
];

function SelectedButton({item, onPress}) {
  return (
    <Button title={item.day}
      buttonStyle={{padding: 5, marginRight: 5}}
      iconRight
      icon={<Feather name="delete" size={20} color="white" style={{marginLeft: 5}} />}
      onPress={() => onPress(item)}
    />
  );
}

function ButtonInList({item, onPress}) {
  return (
    <Button
      title={item.day}
      type= 'clear'
      onPress={() => onPress(item)}
    />
  );
}

export default function SchedulePicker({options}) {
  const [selected, setSelected] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);

  function filterOutSelected(value) {
    return value !== this;
  }

  function updateSchedule(item) {
    if (selected.includes(item)) {
      const newArr = selected.filter(filterOutSelected, item);
      setSelected([...newArr]);
    }
    else {
      setSelected([...selected, item]);
    }
  }

  function toggleDropDown() {
    if (isDropDown) {
      setIsDropDown(false);
    }
    else {
      setIsDropDown(true);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={{color: '#909090', fontWeight: 'bold', marginBottom: 5, fontSize: 16}}>
        Schedule
      </Text>
      <View style={{flexDirection: 'row'}}>

        <View style={styles.scheduleDisplay}>
          <FlatList
            data={selected}
            renderItem = {({item}) => <SelectedButton
                item={item}
                onPress={updateSchedule}
              />
            }
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Button
          buttonStyle={styles.dropDownButton}
          containerStyle={styles.dropDownButton}
          icon= {<Icon name="plus" size= {15} color= 'white'/>}
          onPress={() => toggleDropDown()}
        />
      </View>
      {isDropDown ?
        <FlatList
          data={days}
          renderItem = {({item}) => <ButtonInList
              item={item}
              onPress={updateSchedule}
            />
          }
          keyExtractor={item => item.id}
        />
        :
        null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  scheduleDisplay: {
    flex: 1,
    minHeight: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#909090',
    padding: 5
  },
  dropDownButton: {
    height:50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
});
