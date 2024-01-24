import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: 'Q. What are your symptoms?',
    options: ['Icchiness', 'Swelling', 'Redness', 'Bumps', 'Acne', 'Pigmentation'],
  },
  {
    question: 'Q. Select your age group',
    options: ['0-2', '15-25', '2-10', '25-55', '10-15', '55+'],
  },
  {
    question: 'Q. Is it a genetic problem?',
    options: ['Yes', 'No'],
  },
  {
    question: 'Q. What is the duration of the issue?',
    options: ['< 1 month', '>1year', '2-5 months', '2-5 years', '>6months', 'By birth'],
  },
  {
    question: 'Q. Have you consulted a doctor?',
    options: ['Yes', 'No'],
  },
  {
    question: 'Q. Are you taking any medications?',
    options: ['Yes', 'No'],
  },
  // Add more questions here
  {
    question: 'Q. New Question 1',
    options: ['Option A', 'Option B'],
  },
  {
    question: 'Q. New Question 2',
    options: ['Option X', 'Option Y'],
  },
  {
    question: 'Q. New Question 3',
    options: ['Option P', 'Option Q'],
  },
  {
    question: 'Q. New Question 4',
    options: ['Option M', 'Option N'],
  },
  {
    question: 'Q. New Question 5',
    options: ['Option M', 'Option N'],
  },
  {
    question: 'Q. New Question 6',
    options: ['Option M', 'Option N'],
  },
];

const MCQPage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<boolean[][]>(
    questions.map(() => Array(6).fill(false))
  );

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex][optionIndex] = !updatedSelectedOptions[questionIndex][optionIndex];
    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Questionnaire</Text>
      <ScrollView style={styles.questionsContainer}>
        {questions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>{question.question}</Text>
            </View>
            <View style={styles.optionsContainer}>
              {question.options.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.optionRow}>
                  <CheckBox
                    value={selectedOptions[questionIndex][optionIndex]}
                    onValueChange={() => handleOptionSelect(questionIndex, optionIndex)}
                  />
                  <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleOptionSelect(questionIndex, optionIndex)}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    alignItems: 'center',
    marginBottom:150,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    marginTop: 20,
    marginBottom: 20,
    marginLeft:-220,
  },
  questionsContainer: {
    padding: 2,
  },
  questionContainer: {
    backgroundColor: 'rgba(128, 183, 249, 0.3)', // Matching light shade of rgb(128, 183, 249)
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  questionTextContainer: {
    backgroundColor: 'rgba(128, 183, 249, 0.6)',
    padding: 5,
    borderRadius: 10,
  },
  questionText: {
    color: 'black',
  },
  optionsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Arrange options in a grid
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '48%', // Display two options per row
  },
  optionButton: {
    marginLeft: 10,
  },
});

export default MCQPage;
