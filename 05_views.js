// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for joining our experiment on mental rotation!
            <br />
            <br />
            We will test your visual cognition. The whole experiment will only take a few minutes.
            <br />`,
  buttonText: 'Start now'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In the following we will together go through an experiment on spatial thinking.
            <br/ >
            Each trial I will present you a pair of geometric figures, 12 in the practice and 48 in the main trial, and you name whether they are the same or not (after mental rotation).
            <br
            Press "f" if they are the same and "j" if they are not. Please try to answer correct and as fast as you can.`,
          //<br />
          //In the practice you will get feedback after every trial, later you will not.
  buttonText: 'Go to practice'
});

const begin = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'Begin',
  title: 'Practice wrapping',
  text: `You have finished the practice trials.
            <br/ >
            Now we will continue with the main trial.
            <br/ >
            Again press "f" if the figures are the same and "j" if they are not.
            <br />
            You will not get any feedback, just try to answer correct and as fast as you can.`,
  buttonText: 'Go to the main trials'
});



// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for helping us with our experiment!',
  prolificConfirmText: 'Finish'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/
const practice_trials = magpieViews.view_generator('key_press', {
  trials: 12,
  name: 'practice_trials',
  pause: 250,
  //stim_duration: 7500,
  data: practice_info.key_press,

});
const main_trials = magpieViews.view_generator('key_press', {
  trials: 48,
  name: 'main_trials',
  pause: 250,
  //stim_duration: 7500,
  data: main_info.key_press,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
