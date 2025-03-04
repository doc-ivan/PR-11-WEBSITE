document.addEventListener("DOMContentLoaded", function () {
  let savedState = localStorage.getItem("storyState");
  if (savedState) {
    document.getElementById("container-id").innerHTML = savedState;
  }
});

function STAY_QUIET() {
  let newContent = `
    <div class="story-container">
      Zia told him ”try to talk about it, maybe I understand you”
      <br>
      <br>
      "There’s just… too much. Too much pain. I tried—I really did—but no matter how hard I work, it’s never enough for my parents. They expect so much from me, always comparing me to others. I struggle in school, and no matter what I do, I still fail in their eyes."
      <br>
      <br>
      His voice wavered as he continued.
      <br>
      <br>
      "I’m exhausted. My family is a mess, and I’m tired of all the fighting. I was bullied before, and even now, I still hear their voices in my head. But the worst part?"
      <br>
      <br>
      Tristan’s body trembled, his vision blurring with unshed tears.
      <br>
      <br>
      "The only person who ever understood me... the only one who cheered me up... died two and a half months ago."
      <br>
      <br>
      A bitter chuckle escaped his lips, but it quickly faded into a whisper.
      <br>
      <br>
      "There’s so much pain... I don’t know how to make it stop. And... I’m just so tired of it."
      <br>
      <br>
      The tears he had been trying so hard to hold back finally began to fall, one by one, like raindrops hitting the cold, empty shore.
      <br>
      <br>
      Zia gently placed a hand on Tristan’s shoulder, offering silent comfort as they watched the sun slowly dip into the horizon. The waves whispered against the shore, carrying away the weight of unspoken pain. For a moment, they simply sat there, letting the quiet presence of each other ease the heaviness in their hearts.
      <br>
      <br>
      As time passed, the sky turned a deep shade of orange, and the evening breeze signaled it was time to part ways. Standing up, they dusted the sand off their clothes.
      <br>
      <br>
      "I guess this is goodbye for now," Zia said with a soft smile.
      <br>
      <br>
      Before leaving, she turned to Tristan one last time. "Are you okay now? Do you feel a little better?"
      <br>
      <br>
      Tristan hesitated for a moment before forcing a small smile. "I'm okay."
      <br>
      <br>
      But Zia noticed the sadness still lingering in his eyes—the kind of pain that couldn’t simply fade in one night. She let out a small chuckle and said, "Tristan… eyes never lie. It’s okay not to be okay sometimes."
      <br>
      <br>
      She smiled warmly, not with pity, but with understanding. Then, with a gentle wave, she said goodbye.
      <br>
      <br>
      Tristan stood there, watching her walk away, the echo of her words lingering in his heart.
      <br>
      <br>
      Maybe, just maybe… he wasn’t as alone as he thought.
      <br>
      <br>
      Monday came, and Tristan saw Zia again at the school canteen.
    </div>
    <div class="option-container">
      <div class="option1" onclick="GREET_AND_TALK_TO_ZIA()">
         GREET AND TALK TO ZIA
      </div>

      <div class="option2" onclick="IGNORE_HER()">
          IGNORE HER
      </div> 
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0);
}


function SPOKE_ABOUT_YOUR_LIFE() {
  let newContent = `
      <div class="story-container">
        "There’s just… too much. Too much pain. I tried—I really did—but no matter how hard I work, it’s never enough for my parents. They expect so much from me, always comparing me to others. I struggle in school, and no matter what I do, I still fail in their eyes."
        <br>
        <br>
        His voice wavered as he continued.
        <br>
        <br>
        "I’m exhausted. My family is a mess, and I’m tired of all the fighting. I was bullied before, and even now, I still hear their voices in my head. But the worst part?"
        <br>
        <br>
        Tristan’s body trembled, his vision blurring with unshed tears.
        <br>
        <br>
        "The only person who ever understood me... the only one who cheered me up... died two and a half months ago."
        <br>
        <br>
        A bitter chuckle escaped his lips, but it quickly faded into a whisper.
        <br>
        <br>
        "There’s so much pain... I don’t know how to make it stop. And... I’m just so tired of it."
        <br>
        <br>
        The tears he had been trying so hard to hold back finally began to fall, one by one, like raindrops hitting the cold, empty shore.
        <br>
        <br>
        Zia gently placed a hand on Tristan’s shoulder, offering silent comfort as they watched the sun slowly dip into the horizon. The waves whispered against the shore, carrying away the weight of unspoken pain. For a moment, they simply sat there, letting the quiet presence of each other ease the heaviness in their hearts.
        <br>
        <br>
        As time passed, the sky turned a deep shade of orange, and the evening breeze signaled it was time to part ways. Standing up, they dusted the sand off their clothes.
        <br>
        <br>
        "I guess this is goodbye for now," Zia said with a soft smile.
        <br>
        <br>
        Before leaving, she turned to Tristan one last time. "Are you okay now? Do you feel a little better?"
        <br>
        <br>
        Tristan hesitated for a moment before forcing a small smile. "I'm okay."
        <br>
        <br>
        But Zia noticed the sadness still lingering in his eyes—the kind of pain that couldn’t simply fade in one night. She let out a small chuckle and said, "Tristan… eyes never lie. It’s okay not to be okay sometimes."
        <br>
        <br>
        She smiled warmly, not with pity, but with understanding. Then, with a gentle wave, she said goodbye.
        <br>
        <br>
        Tristan stood there, watching her walk away, the echo of her words lingering in his heart.
        <br>
        <br>
        Maybe, just maybe… he wasn’t as alone as he thought.
        <br>
        <br>
        Monday came, and Tristan saw Zia again at the school canteen. 
    </div>

    <div class="option-container">
      <div class="option1" onclick="GREET_AND_TALK_TO_ZIA()">
        GREET AND TALK TO ZIA
      </div>

      <div class="option2" onclick="IGNORE_HER()">
        IGNORE HER
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0);      
}

function GREET_AND_TALK_TO_ZIA() {
  let newContent = `
    <div class="story-container">
      He walked up to Zia, greeted her with a smile, and started a conversation.
      <br>
      <br>
      That day marked the beginning of their unbreakable bond. They grew closer, helping each other in ways no one else could. Tristan, a slow learner, found great support in Zia, who patiently guided him through his studies. In return, Tristan shared his skills with her, making them a perfect team.
      <br>
      <br>
      Their favorite escape remained the seashore—a place where they could breathe, feel free, and forget their worries, even just for a while. They talked about their dreams, their hopes for the future, and made a promise: No matter what happens, we’ll always be there for each other. We’ll support one another until we graduate.
      <br>
      <br>
      One afternoon, as the sun painted the sky in warm hues, Tristan found himself staring at Zia. A strange feeling knocked at his mind and heart—something unfamiliar yet undeniable. 
      <br>
      <br>
      Was he falling in love with her?
    </div>
      
    <div class="option-container">
      <div class="option1" onclick="YES()">
        YES
      </div>

      <div class="option2" onclick="NO()">
        NO
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}



function IGNORE_HER() {
  let newContent = `
    <div class="story-container">
      Zia approached him, and greeted him warmly, and the two of them started talking.
      <br>
      <br>
      That day marked the beginning of their unbreakable bond. They grew closer, helping each other in ways no one else could. Tristan, a slow learner, found great support in Zia, who patiently guided him through his studies. In return, Tristan shared his skills with her, making them a perfect team.
      <br>
      <br>
      Their favorite escape remained the seashore—a place where they could breathe, feel free, and forget their worries, even just for a while. They talked about their dreams, their hopes for the future, and made a promise: No matter what happens, we’ll always be there for each other. We’ll support one another until we graduate.
      <br>
      <br>
      One afternoon, as the sun painted the sky in warm hues, Tristan found himself staring at Zia. A strange feeling knocked at his mind and heart—something unfamiliar yet undeniable. 
      <br>
      <br>
      Was he falling in love with her?
    </div>
    
    <div class="option-container">
      <div class="option1" onclick="YES()">
        YES
      </div>

      <div class="option2" onclick="NO()">
        NO
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0);  
}


function YES() {
  let newContent = `
    <div class="story-container">
      Breaking the moment, Zia excitedly mentioned a poster-making contest at their campus. She encouraged Tristan to join, but he hesitated, afraid of making mistakes and losing.
      <br>
      <br>
      "Then make those mistakes your lessons. Use them to improve yourself," Zia said with a reassuring smile.
      <br>
      <br>
      Tristan simply smiled back.
      <br>
      <br>
      Their friendship grew stronger with time, and soon, a year had passed. They were now in Grade 12. But just when things seemed to be going well, life threw a painful test at Zia—her mother, the source of her strength, passed away. Left alone with her abusive father, Zia became a shadow of herself. She stopped attending school, lost in grief and exhaustion.
      <br>
      <br>
      Tristan noticed her absence. He knew exactly where to find her.
      <br>
      <br>
      After school, he went straight to the seashore, and just as he expected, Zia was there, sitting alone, staring blankly at the waves. He called her name, but she didn’t respond. Without a word, he sat beside her, gently rubbing her back in comfort.
      <br>
      <br>
      "I understand what you're going through," he whispered.
      <br>
      <br>
      Then, he handed her a small gift—a handmade bracelet in warm colors.
      <br>
      <br>
      Zia stared at it for a moment before slipping it onto her wrist.
      <br>
      <br>
      Tristan sighed. "Let’s go home together, I still has a lot of school activities to finish."
      <br>
      <br>
      Zia shook her head. "I’ll stay here for a while."
    </div>

    <div class="option-container"> 
      <div class="option1" onclick="STAYED_AT_THE_SEASHORE_WITH_ZIA()">
        STAYED AT THE SEASHORE WITH ZIA
      </div>

      <div class="option2" onclick="GO_HOME_AND_DO_THE_SCHOOL_ACTIVITIES()">
        GO HOME AND DO THE SCHOOL ACTIVITIES
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}

function NO() {
  let newContent = `
    <div class="story-container">
      Breaking the moment, Zia excitedly mentioned a poster-making contest at their campus. She encouraged Tristan to join, but he hesitated, afraid of making mistakes and losing.
      <br>
      <br>
      "Then make those mistakes your lessons. Use them to improve yourself," Zia said with a reassuring smile.
      <br>
      <br>
      Tristan simply smiled back.
      <br>
      <br>
      Their friendship grew stronger with time, and soon, a year had passed. They were now in Grade 12. But just when things seemed to be going well, life threw a painful test at Zia—her mother, the source of her strength, passed away. Left alone with her abusive father, Zia became a shadow of herself. She stopped attending school, lost in grief and exhaustion.
      <br>
      <br>
      Tristan noticed her absence. He knew exactly where to find her.
      <br>
      <br>
      After school, he went straight to the seashore, and just as he expected, Zia was there, sitting alone, staring blankly at the waves. He called her name, but she didn’t respond. Without a word, he sat beside her, gently rubbing her back in comfort.
      <br>
      <br>
      "I understand what you're going through," he whispered.
      <br>
      <br>
      Then, he handed her a small gift—a handmade bracelet in warm colors.
      <br>
      <br>
      Zia stared at it for a moment before slipping it onto her wrist.
      <br>
      <br>
      Tristan sighed. "Let’s go home together, I still has a lot of school activities to finish."
      <br>
      <br>
      Zia shook her head. "I’ll stay here for a while."
    </div>

    <div class="option-container"> 
      <div class="option1" onclick="STAYED_AT_THE_SEASHORE_WITH_ZIA()">
        STAYED AT THE SEASHORE WITH ZIA
      </div>

      <div class="option2" onclick="GO_HOME_AND_DO_THE_SCHOOL_ACTIVITIES()">
        GO HOME AND DO THE SCHOOL ACTIVITIES
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}

function STAYED_AT_THE_SEASHORE_WITH_ZIA() {
  let newContent = `
    <div class="story-container">
      TRISTAN MADE HIS DECISION  AND SAID FIRMLY ”THEN I’LL STAY HERE WITH YOU”.ZIA STOPPED HIM AND SAID” FOCUS ON YOUR ACTIVITIES FIRST-THEY’RE MORE IMPORTANT.DON’T WORRY TOO MUCH ABOUT ME”
      <br>
      <br>
      Before leaving, Tristan turned to her one last time. "Do you feel better now?"
      <br>
      <br>
      Zia smiled faintly. "Don't worry, I'm okay."
      <br>
      <br>
      But Tristan noticed her eyes and sighed. "Eyes never lie."
      <br>
      <br>
      Zia chuckled softly, realizing those were her own words.
      <br>
      <br>
      A Month Before Graduation
      <br>
      <br>
      One afternoon, Tristan saw Zia at the shore again. She seemed... different. She looked happy, but there was something off—something he couldn't explain. It was as if he could see her, but he couldn’t feel her presence.
      <br>
      <br>
      He ignored the thought, choosing instead to be grateful that she was healing. Day by day, Zia seemed more like her old self, and she was genuinely happy to see Tristan moving forward too. He had made new friends and was slowly rebuilding himself.
      <br>
      <br>
      He ignored the thought, choosing instead to be grateful that she was healing. Day by day, Zia seemed more like her old self, and she was genuinely happy to see Tristan moving forward too. He had made new friends and was slowly rebuilding himself.
      <br>
      <br>
      One evening, as they watched the sunset, Tristan sighed.
      <br>
      <br>
      "One and a half months left... and we’ll be graduating. Next school year, we’ll be in college. Things won’t be the same anymore."
      <br>
      <br>
      Zia simply smiled as they walked home together.
      <br>
      <br>
      Two Weeks Before Graduation
      <br>
      <br>
      They spent their afternoons together, reviewing for exams while watching the sunset by the baywalk. It felt like old times—simple, peaceful, and full of dreams.
      <br>
      <br>
      But the next day, everything changed.
      <br>
      <br>
      As Tristan walked home, something caught his eye—a missing person’s poster plastered on a street post. His heart pounded as he recognized the face.
      <br>
      <br>
      Zia.
      <br>
      <br>
      The poster said she had been missing for a month.
      <br>
      <br>
      His mind went blank. That can’t be… I was just with her yesterday.
      <br>
      <br>
      Gripping the paper tightly, he ran straight to the seashore, hoping to find her there. But for the first time, she wasn’t there. She was nowhere to be found.
      <br>
      <br>
      Then, in the distance, he saw a group of rescuers gathered near the shore. His breath caught in his throat as he saw them carrying something—someone—wrapped in black.
      <br>
      <br>
      His hands trembled as he stepped closer.
      <br>
      <br>
      A glimpse of a familiar bracelet peeked out from beneath the sheet.
      <br>
      <br>
      Tristan froze. The warmth-colored bracelet.
      <br>
      <br>
      The poster slipped from his hands as the weight of realization crashed down on him. His chest tightened, his vision blurred.
      <br>
      <br>
      Moments later, Zia’s family arrived. With shaking hands, they lifted the cover.
      <br>
      <br>
      And there she was.
      <br>
      <br>
      Zia’s face was pale, her body lifeless. The vibrant, smiling girl who once promised they’d always be there for each other… was gone.
      <br>
      <br>
      Tristan fell to his knees, unable to breathe, unable to think. The world around him blurred as tears streamed down his face. The weight of reality pressed heavily on his chest, making it hard to inhale.
      <br>
      <br>
      Overwhelmed by anguish, Tristan stumbled away from the shoreline, his sobs echoing in the emptiness. He ran without direction, desperate to escape the pain consuming him. Finally, collapsing beneath a solitary tree, he buried his face in his hands, letting the grief wash over him.
      <br>
      <br>
      As the sun dipped below the horizon, casting a golden glow, Tristan's sobs subsided into quiet sniffles. He wiped his eyes, the events replaying in his mind. How could she be gone? The memories of their last moments together flooded back—the laughter, the shared dreams, the unspoken bond.
      <br>
      <br>
      Then, a chilling realization struck him. That day, a month ago, when I left her at the shore... He recalled her distant gaze, the sadness she tried to mask. She must have... The thought was too painful to complete. Guilt gnawed at his heart. If only I had stayed... If only I had seen the signs...
      <br>
      <br>
      Blaming himself, Tristan whispered, "It's my fault... I should have been there."
      <br>
      <br>
      Closing his eyes, Tristan took a deep breath. She’s here… Not in the physical sense, but in spirit. The realization brought a bittersweet comfort. He couldn't change the past, but he could honor Zia’s memory by living the life they had once dreamed of together.
      <br>
      <br>
      After graduation, Tristan returned to the seashore, hoping—just maybe—to see her again. But she wasn’t there anymore.
      <br>
      <br>
      He sighed, letting the waves wash over his feet as he sat in silence, allowing the wind to carry away the heaviness in his chest.
      <br>
      <br>
      As he stood up to leave, something unexpected happened. A flock of herons soared past him, their wings cutting through the golden sky. He followed them with his gaze, watching as they gracefully landed on the shore.
      <br>
      <br>
      And then… he felt it.
      <br>
      <br>
      That familiar presence. A warmth he thought he’d never feel again.
      <br>
      <br>
      Among the herons stood a girl, bathed in the soft glow of the setting sun.
      <br>
      <br>
      It was Zia.
      <br>
      <br>
      Tristan’s breath caught in his throat, his eyes welling with happy tears. “You came back… but why?”
      <br>
      <br>
      Zia smiled gently. “Of course. I had to make sure my friend was okay… and that he wouldn’t end up like me.”
      <br>
      <br>
      For the first time in a long while, Tristan smiled—a real, genuine smile.
      <br>
      <br>
      Zia noticed and chuckled. “Your eyes… they look different now.”
      <br>
      <br>
      Tristan nodded, wiping his tears. “It’s because of you… but it’s unfair. I’m sorry I couldn’t save you, like you saved me.”
      <br>
      <br>
      Zia stepped closer, wrapping her arms around him in a warm embrace. “You don’t have to be sorry,” she whispered. “Just like these herons, I’m free now. And happy—just like you should be.”
      <br>
      <br>
      *QUESTION*--- DO YOU HAVE FEELINGS FOR HER
    </div>

    <div class="option-container"> 
      <div class="option1" onclick="WERE_JUST_BESTFRIENDS()">
        WERE JUST BESTFRIENDS
      </div>

      <div class="option2" onclick="IM_INLOVE_WITH_ZIA_AND_TELL_HER()">
        IM INLOVE WITH ZIA,AND TELL HER
      </div>
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}


function GO_HOME_AND_DO_THE_SCHOOL_ACTIVITIES() {
  let newContent = `
    <div class="story-container">
      TRISTAN DECIDED TO HEAD HOME FIRST AND SAID”SORRY I CANT WAIT FOR YOU TODAY. I STILL HAVE A LOT OF ACTIVITIES TO FINISH…”
      <br>
      <br>
      Before leaving, Tristan turned to her one last time. "Do you feel better now?"
      <br>
      <br>
      Zia smiled faintly. "Don't worry, I'm okay."
      <br>
      <br>
      But Tristan noticed her eyes and sighed. "Eyes never lie."
      <br>
      <br>
      Zia chuckled softly, realizing those were her own words.
      <br>
      <br>
      A Month Before Graduation
      <br>
      <br>
      One afternoon, Tristan saw Zia at the shore again. She seemed... different. She looked happy, but there was something off—something he couldn't explain. It was as if he could see her, but he couldn’t feel her presence.
      <br>
      <br>
      He ignored the thought, choosing instead to be grateful that she was healing. Day by day, Zia seemed more like her old self, and she was genuinely happy to see Tristan moving forward too. He had made new friends and was slowly rebuilding himself.
      <br>
      <br>
      He ignored the thought, choosing instead to be grateful that she was healing. Day by day, Zia seemed more like her old self, and she was genuinely happy to see Tristan moving forward too. He had made new friends and was slowly rebuilding himself.
      <br>
      <br>
      One evening, as they watched the sunset, Tristan sighed.
      <br>
      <br>
      "One and a half months left... and we’ll be graduating. Next school year, we’ll be in college. Things won’t be the same anymore."
      <br>
      <br>
      Zia simply smiled as they walked home together.
      <br>
      <br>
      Two Weeks Before Graduation
      <br>
      <br>
      They spent their afternoons together, reviewing for exams while watching the sunset by the baywalk. It felt like old times—simple, peaceful, and full of dreams.
      <br>
      <br>
      But the next day, everything changed.
      <br>
      <br>
      As Tristan walked home, something caught his eye—a missing person’s poster plastered on a street post. His heart pounded as he recognized the face.
      <br>
      <br>
      Zia.
      <br>
      <br>
      The poster said she had been missing for a month.
      <br>
      <br>
      His mind went blank. That can’t be… I was just with her yesterday.
      <br>
      <br>
      Gripping the paper tightly, he ran straight to the seashore, hoping to find her there. But for the first time, she wasn’t there. She was nowhere to be found.
      <br>
      <br>
      Then, in the distance, he saw a group of rescuers gathered near the shore. His breath caught in his throat as he saw them carrying something—someone—wrapped in black.
      <br>
      <br>
      His hands trembled as he stepped closer.
      <br>
      <br>
      A glimpse of a familiar bracelet peeked out from beneath the sheet.
      <br>
      <br>
      Tristan froze. The warmth-colored bracelet.
      <br>
      <br>
      The poster slipped from his hands as the weight of realization crashed down on him. His chest tightened, his vision blurred.
      <br>
      <br>
      Moments later, Zia’s family arrived. With shaking hands, they lifted the cover.
      <br>
      <br>
      And there she was.
      <br>
      <br>
      Zia’s face was pale, her body lifeless. The vibrant, smiling girl who once promised they’d always be there for each other… was gone.
      <br>
      <br>
      Tristan fell to his knees, unable to breathe, unable to think. The world around him blurred as tears streamed down his face. The weight of reality pressed heavily on his chest, making it hard to inhale.
      <br>
      <br>
      Overwhelmed by anguish, Tristan stumbled away from the shoreline, his sobs echoing in the emptiness. He ran without direction, desperate to escape the pain consuming him. Finally, collapsing beneath a solitary tree, he buried his face in his hands, letting the grief wash over him.
      <br>
      <br>
      As the sun dipped below the horizon, casting a golden glow, Tristan's sobs subsided into quiet sniffles. He wiped his eyes, the events replaying in his mind. How could she be gone? The memories of their last moments together flooded back—the laughter, the shared dreams, the unspoken bond.
      <br>
      <br>
      Then, a chilling realization struck him. That day, a month ago, when I left her at the shore... He recalled her distant gaze, the sadness she tried to mask. She must have... The thought was too painful to complete. Guilt gnawed at his heart. If only I had stayed... If only I had seen the signs...
      <br>
      <br>
      Blaming himself, Tristan whispered, "It's my fault... I should have been there."
      <br>
      <br>
      Closing his eyes, Tristan took a deep breath. She’s here… Not in the physical sense, but in spirit. The realization brought a bittersweet comfort. He couldn't change the past, but he could honor Zia’s memory by living the life they had once dreamed of together.
      <br>
      <br>
      After graduation, Tristan returned to the seashore, hoping—just maybe—to see her again. But she wasn’t there anymore.
      <br>
      <br>
      He sighed, letting the waves wash over his feet as he sat in silence, allowing the wind to carry away the heaviness in his chest.
      <br>
      <br>
      As he stood up to leave, something unexpected happened. A flock of herons soared past him, their wings cutting through the golden sky. He followed them with his gaze, watching as they gracefully landed on the shore.
      <br>
      <br>
      And then… he felt it.
      <br>
      <br>
      That familiar presence. A warmth he thought he’d never feel again.
      <br>
      <br>
      Among the herons stood a girl, bathed in the soft glow of the setting sun.
      <br>
      <br>
      It was Zia.
      <br>
      <br>
      Tristan’s breath caught in his throat, his eyes welling with happy tears. “You came back… but why?”
      <br>
      <br>
      Zia smiled gently. “Of course. I had to make sure my friend was okay… and that he wouldn’t end up like me.”
      <br>
      <br>
      For the first time in a long while, Tristan smiled—a real, genuine smile.
      <br>
      <br>
      Zia noticed and chuckled. “Your eyes… they look different now.”
      <br>
      <br>
      Tristan nodded, wiping his tears. “It’s because of you… but it’s unfair. I’m sorry I couldn’t save you, like you saved me.”
      <br>
      <br>
      Zia stepped closer, wrapping her arms around him in a warm embrace. “You don’t have to be sorry,” she whispered. “Just like these herons, I’m free now. And happy—just like you should be.”
      <br>
      <br>
      *QUESTION*--- DO YOU HAVE FEELINGS FOR HER
    </div>

    <div class="option-container"> 
      <div class="option1" onclick="WERE_JUST_BESTFRIENDS()">
        WERE JUST BESTFRIENDS
      </div>

      <div class="option2" onclick="IM_INLOVE_WITH_ZIA_AND_TELL_HER()">
        IM INLOVE WITH ZIA,AND TELL HER
      </div>
    </div>

  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}

function WERE_JUST_BESTFRIENDS() {
  let newContent = `
    <div class="story-container">
      They held onto that moment, knowing it was their last.
      <br>
      <br>
      Then, Zia stepped back. “Tristan, people don’t become strong because of what they achieve, but because of what they go through. And you… you’ve grown stronger.”
      <br>
      <br>
      Tristan’s voice wavered. “One last goodbye, Zia.”
      <br>
      <br>
      Zia smiled, her eyes filled with warmth. “Keep going, Tristan… keep going.”
      <br>
      <br>
      They waved at each other, their hands lingering in the air—a silent promise, a final farewell.
      <br>
      <br>
      As the sun dipped below the horizon, the herons took flight, soaring freely into the sky.
      <br>
      <br>
      And just like them, Zia faded away.
      <br>
      <br>
      Tristan watched the birds disappear into the distance, a bittersweet smile on his lips. Then, he turned and walked away—carrying her memory, and the strength to keep moving forward.
      <br>
      <br>
      On his way home, deep in thought, he noticed a girl standing in the middle of the road. The headlights of an approaching car illuminated her face—she wasn’t moving.
      <br>
      <br>
      His heart pounded. Without hesitation, Tristan sprinted forward, grabbing her just in time and pulling her back to safety.
      <br>
      <br>
      The girl stared at him, wide-eyed and breathless. "Why did you save me?" she asked.
      <br>
      <br>
      Tristan felt a lump in his throat as a flood of memories washed over him.
      <br>
      <br>
      He met her gaze and, with quiet understanding, said, “Because… I see myself in you.”
      <br>
      <br>
      ~ THE END ~
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}

function IM_INLOVE_WITH_ZIA_AND_TELL_HER() {
  let newContent = `
    <div class="story-container">
      Tristan had been holding onto his feelings for a long time. Every moment with Zia made his heart race, but he never found the right words—or the right time—to tell her. But now, he knew. He couldn’t keep it inside any longer. This time, he would finally tell Zia how he truly felt.
      <br>
      <br>
      Tristan looked into Zia’s eyes, his hands trembling slightly as he took a deep breath. "Zia... I—I’ve been holding this in for so long, but I can’t anymore. Every moment with you has meant everything to me. You were there when I was at my lowest, you made me feel seen, understood... alive. I love you, Zia. I really do." He searched her eyes, hoping—praying—that she felt the same.
      <br>
      <br> 
      Zia’s eyes widened in surprise, her breath hitching as she processed Tristan’s words. For a moment, she was speechless, her heart pounding against her chest. "Tristan... I—" She hesitated, but then a warm smile slowly formed on her lips. "I never thought I’d hear you say that." She took a small step closer, reaching for his hand. "Because... I feel the same way. I’ve been too scared to say it, but I’ve loved you for a long time too." Her grip tightened slightly as she gazed at him, her eyes filled with emotion.
      <br>
      <br>
      Tristan felt his heart swell with happiness, but a lingering ache remained. His voice wavered as he whispered her name, his eyes searching hers with a mix of joy and sorrow. "But... Zia… if you felt the same way, then why?" His voice cracked slightly. "Why didn’t you hold on? Why didn’t you try to live… for me?"
      <br>
      <br>
      Zia’s eyes glistened with unshed tears as she fell silent, lost in thought. After a moment, she smiled softly, her expression filled with both warmth and sadness. "Maybe… we were never meant to be, Tristan," she whispered. "Some people come into our lives to teach us, to change us, but not to stay forever. And maybe… the right person for you is still out there, someone who will love you in ways you never expected—someone who will stay." She let out a gentle sigh before adding, "Tristan, be careful with love… Don’t rush it. Sometimes, we mistake familiarity for love, thinking it’s meant to last when, in reality, it’s just something we’ve grown used to. A lot of people have made that mistake… maybe we were one of them."
      <br>
      <br>
      Tristan felt a strange sense of relief wash over him. Maybe Zia was right. Maybe love wasn’t just about holding on—but also about knowing when to let go.
      <br>
      <br> 
      He met her gaze, a bittersweet smile forming on his lips. There were no more words left to say, just the quiet understanding between them.
      <br>
      <br>
      Zia smiled back, her eyes filled with warmth. “It’s time, isn’t it?” she whispered.
      <br>
      <br> 
      Tristan nodded, his heart heavy yet lighter than before. “Yeah… it is.”
      <br>
      <br>
      For a moment, they simply stood there, memorizing each other’s presence one last time. Then, as the wind carried the sound of the waves around them, they shared a final goodbye—one not spoken, but felt.
      <br>
      <br>
      Tristan’s voice wavered. “One last goodbye, Zia.”
      <br>
      <br>
      Zia smiled, her eyes filled with warmth. “Keep going, Tristan… keep going.”
      <br>
      <br>
      They waved at each other, their hands lingering in the air—a silent promise, a final farewell.
      <br>
      <br>
      As the sun dipped below the horizon, the herons took flight, soaring freely into the sky.
      <br>
      <br>
      And just like them, Zia faded away.
      <br>
      <br>
      Tristan watched the birds disappear into the distance, a bittersweet smile on his lips. Then, he turned and walked away—carrying her memory, and the strength to keep moving forward.
      <br>
      <br>
      On his way home, deep in thought, he noticed a girl standing in the middle of the road. The headlights of an approaching car illuminated her face—she wasn’t moving.
      <br>
      <br>
      His heart pounded. Without hesitation, Tristan sprinted forward, grabbing her just in time and pulling her back to safety.
      <br>
      <br>
      The girl stared at him, wide-eyed and breathless. "Why did you save me?" she asked.
      <br>
      <br>
      Tristan felt a lump in his throat as a flood of memories washed over him.
      <br>
      <br>
      He met her gaze and, with quiet understanding, said, “Because… I see myself in you.”
      <br>
      <br>
      ~ THE END ~
    </div>
  `;
  document.getElementById("container-id").innerHTML = newContent;
  localStorage.setItem("storyState", newContent);
  window.scrollTo(0, 0); 
}

function reset_story() {
  localStorage.removeItem("storyState"); 
  document.getElementById("container-id").innerHTML = `
    <div class="title-container" >Seen But Unfelt</div>

    <div class="story-container">
      Tristan was in the darkest and deepest point of his life. Like a candle, he tried his best to make his life meaningful and bright, even as his energy slowly melted away. A single tear began to fall. Tristan, a Grade 11 student from Lemery, struggled to connect with others. Socializing felt like a burden, and his own shyness became a prison. No matter how much he wanted to reach out, something always held him back—fear, doubt, or maybe the thought that no one would truly understand. 
      <br>
      <br>
      Tristan was at the lowest point of his life. As he walked down the street, he saw a car speeding toward him. A single thought consumed his mind—ending it all. Just as he was about to step forward, a girl named Zia grabbed him, pulling him back. Her voice trembled as she asked, 'Are you okay'.Zia asked Tristan if he was okay, but he just closed his eyes, trying to comfort himself. He whispered to himself over and over, 'I'm okay... I'm okay... I'm okay.' But Zia asked again, her voice filled with concern. As Tristan slowly calmed down, he hesitantly opened his eyes—only to hear Zia’s voice growing louder, repeatedly asking, 'Are you okay?!' And then, as he truly saw her—her worried eyes, her outstretched hand—something felt different. Something warm. Something bright. A feeling he thought he had long forgotten.And then, as he truly saw her—her worried eyes, her outstretched hand—something felt different. Something warm. Something bright. A feeling he thought he had long forgotten. Tristan was speechless for a moment, overwhelmed by the unfamiliar sensation. Then, finally, he answered, 'I'm okay.' Zia, still looking at him with concern, asked, 'Why did you do that?' Tristan didn’t say anything about what was running through his mind. Instead, Zia let out a small sigh and said, 'You know what? Let's go for a walk.' Tristan hesitated before responding, 'Where are we going?' With a gentle smile, Zia replied, 'Somewhere that will make you feel better.'
      <br>
      <br>
      They walked to the seashore near the highway, the crashing waves filling the silence between them. As they strolled along the shore, their footsteps fading into the sand, Tristan finally asked, "Why did you save me?"
      <br>
      <br>
      Zia paused, looking at him for a moment before softly replying, "Because... I see myself in you."
      <br>
      <br>
      Tristan hesitated before asking, "You see yourself in me...? What do you mean?"
      <br>
      <br>
      Zia let out a small sigh. "I can see it in your eyes—you’re carrying something heavy. You don’t have to tell me everything, but maybe... maybe you can share it with me. I might be able to help."
      <br>
      <br>
      Tristan stayed quiet, his gaze fixed on the sunset, trying to hold back his tears.
      <br>
      <br>
      Sensing his hesitation, Zia took a deep breath and began sharing her own struggles—the pain she carried, the battles she fought. As she spoke, Tristan slowly realized how similar their stories were. And as she finished, she smiled faintly and said,
      <br>
      <br>
      "No matter how much we struggle, no matter how unfair life seems... we have to keep going. Because I believe, one day, the world will finally be on our side.
      <br>
      <br>
      After a brief silence, Zia turned to him again. "Tristan... what’s really going on? What brought you here?"
      <br>
      <br>
      Tristan clenched his fists, his breathing uneven. He tried to hold back his tears, but the weight in his chest felt unbearable. Taking a shaky breath, he finally spoke.
    </div>

    <div class="option-container">

      <div class="option1" onclick="STAY_QUIET()">
        STAY QUIET
      </div>

      <div class="option2" onclick="SPOKE_ABOUT_YOUR_LIFE()">
        SPOKE ABOUT YOUR LIFE
      </div>

    </div>
  `;
}