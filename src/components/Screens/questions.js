import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Button from '../Button/Button';

const Questions = ({navigation}) => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: 'How long have you been experiencing the symptoms?',
      options: ['Less than a day', '1–3 days', '1 week', 'More than 1 week'],
    },
    {
      question: 'Do you have a fever?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Is your fever:',
      options: ['Low-grade?', 'High-grade?', 'Intermittent?'],
    },
    {
      question: 'Do you have chills or sweating?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Where is your pain located?',
      options: ['Head', 'Chest', 'Abdomen', 'Joints', 'Other'],
    },
    {
      question: 'What type of pain do you feel?',
      options: ['Sharp', 'Dull', 'Throbbing', 'Burning'],
    },
    {
      question: 'Are you experiencing any of the following?',
      options: ['Cough', 'Shortness of breath', 'Chest tightness'],
    },
    {
      question: 'Is your cough:',
      options: ['Dry?', 'Productive (with mucus)?'],
    },
    {
      question: 'Are you experiencing:',
      options: ['Nausea?', 'Vomiting?', 'Diarrhea?', 'Constipation?'],
    },
    {
      question: 'Have you noticed blood in your stool?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Are you experiencing:',
      options: ['Headaches?', 'Dizziness?', 'Numbness or tingling in limbs?'],
    },
    {
      question: 'Have you had any recent fainting episodes?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Do you have a rash or skin irritation?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Have you been exposed to any allergens (dust, pollen, food)?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Are you experiencing:',
      options: ['Chest pain?', 'Palpitations (irregular heartbeat)?'],
    },
    {
      question: 'Do you have a history of high blood pressure?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Do you have a family history of:',
      options: [
        'Diabetes?',
        'Heart disease?',
        'Cancer?',
        'Other major illnesses?',
      ],
    },
    {
      question: 'Are you currently taking any medications?',
      options: ['Yes', 'No'],
    },
  ];

  const handleOptionSelect = (question, option) => {
    setAnswers({...answers, [question]: option});
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}>
      
      {questions.map((item, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{item.question}</Text>
          {item.options.map((option, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.optionButton,
                answers[item.question] === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(item.question, option)}>
              
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Button
        title="Next"
        onPress={() => navigation.navigate('')} // Navigate to Login screen
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#d3f5d5',
    margin: 0,
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  questionContainer: {
    marginBottom: 10,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
  },
  questionText: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '600',
    color: '#333',
  },
  optionButton: {
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 6,
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Questions;
