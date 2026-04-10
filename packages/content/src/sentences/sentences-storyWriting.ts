/**
 * Story Writing Sentences for PET B1
 * Sentences for writing stories in English
 */

import { SentenceCard } from 'shared-types';

export const storyWritingSentences: Omit<SentenceCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    sentence: 'One day, I was walking home from school.',
    sentenceZh: '有一天，我正从学校走回家。',
    chunkList: ['One day', ',', 'I was walking', 'home', 'from school', '.'],
    keyPhrases: ['One day', 'walking home', 'from school'],
    functionTag: 'story_opening',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'It was a cold morning in December.',
    sentenceZh: '那是十二月一个寒冷的早晨。',
    chunkList: ['It was', 'a cold morning', 'in December', '.'],
    keyPhrases: ['cold morning', 'December'],
    functionTag: 'story_setting',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Last summer, my family went to the beach.',
    sentenceZh: '去年夏天，我们全家去了海滩。',
    chunkList: ['Last summer', ',', 'my family', 'went to', 'the beach', '.'],
    keyPhrases: ['Last summer', 'my family', 'went to', 'the beach'],
    functionTag: 'story_opening',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'The sun was shining brightly in the sky.',
    sentenceZh: '太阳在天空中明亮地照耀着。',
    chunkList: ['The sun', 'was shining', 'brightly', 'in the sky', '.'],
    keyPhrases: ['sun shining', 'brightly', 'in the sky'],
    functionTag: 'story_setting',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I woke up early that morning.',
    sentenceZh: '那天早上我醒得很早。',
    chunkList: ['I woke up', 'early', 'that morning', '.'],
    keyPhrases: ['woke up', 'early', 'morning'],
    functionTag: 'story_opening',
    topicTag: 'writing',
    difficulty: 1
  },
  {
    sentence: 'Then, something strange happened.',
    sentenceZh: '然后，奇怪的事情发生了。',
    chunkList: ['Then', ',', 'something strange', 'happened', '.'],
    keyPhrases: ['Then', 'something strange', 'happened'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'After that, we decided to call the police.',
    sentenceZh: '之后，我们决定报警。',
    chunkList: ['After that', ',', 'we decided', 'to call', 'the police', '.'],
    keyPhrases: ['After that', 'decided', 'call the police'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Meanwhile, my brother was waiting at home.',
    sentenceZh: '与此同时，我弟弟正在家里等着。',
    chunkList: ['Meanwhile', ',', 'my brother', 'was waiting', 'at home', '.'],
    keyPhrases: ['Meanwhile', 'brother', 'waiting', 'at home'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Later, we found out the truth.',
    sentenceZh: '后来，我们发现了真相。',
    chunkList: ['Later', ',', 'we found out', 'the truth', '.'],
    keyPhrases: ['Later', 'found out', 'the truth'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Suddenly, I heard a loud noise.',
    sentenceZh: '突然，我听到一声巨响。',
    chunkList: ['Suddenly', ',', 'I heard', 'a loud noise', '.'],
    keyPhrases: ['Suddenly', 'heard', 'loud noise'],
    functionTag: 'story_event',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'All at once, the lights went out.',
    sentenceZh: '突然之间，灯全灭了。',
    chunkList: ['All at once', ',', 'the lights', 'went out', '.'],
    keyPhrases: ['All at once', 'lights', 'went out'],
    functionTag: 'story_event',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Without warning, the door opened.',
    sentenceZh: '毫无预兆地，门开了。',
    chunkList: ['Without warning', ',', 'the door', 'opened', '.'],
    keyPhrases: ['Without warning', 'door opened'],
    functionTag: 'story_event',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'But then, I realized my mistake.',
    sentenceZh: '但后来，我意识到了我的错误。',
    chunkList: ['But then', ',', 'I realized', 'my mistake', '.'],
    keyPhrases: ['But then', 'realized', 'mistake'],
    functionTag: 'story_twist',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'To my surprise, it was my old friend.',
    sentenceZh: '令我惊讶的是，那是我的老朋友。',
    chunkList: ['To my surprise', ',', 'it was', 'my old friend', '.'],
    keyPhrases: ['To my surprise', 'old friend'],
    functionTag: 'story_twist',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'However, things were not as they seemed.',
    sentenceZh: '然而，事情并不像看起来那样。',
    chunkList: ['However', ',', 'things were not', 'as they seemed', '.'],
    keyPhrases: ['However', 'not as they seemed'],
    functionTag: 'story_twist',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'In the end, everything worked out fine.',
    sentenceZh: '最终，一切都顺利解决了。',
    chunkList: ['In the end', ',', 'everything', 'worked out', 'fine', '.'],
    keyPhrases: ['In the end', 'worked out', 'fine'],
    functionTag: 'story_ending',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Finally, we arrived at our destination.',
    sentenceZh: '最后，我们到达了目的地。',
    chunkList: ['Finally', ',', 'we arrived', 'at our destination', '.'],
    keyPhrases: ['Finally', 'arrived', 'destination'],
    functionTag: 'story_ending',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Eventually, we became good friends.',
    sentenceZh: '最终，我们成为了好朋友。',
    chunkList: ['Eventually', ',', 'we became', 'good friends', '.'],
    keyPhrases: ['Eventually', 'became', 'good friends'],
    functionTag: 'story_ending',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'She was wearing a beautiful red dress.',
    sentenceZh: '她穿着一件漂亮的红色连衣裙。',
    chunkList: ['She was wearing', 'a beautiful red dress', '.'],
    keyPhrases: ['was wearing', 'beautiful red dress'],
    functionTag: 'character_description',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'He looked tired and worried.',
    sentenceZh: '他看起来又累又担心。',
    chunkList: ['He looked', 'tired and worried', '.'],
    keyPhrases: ['looked', 'tired and worried'],
    functionTag: 'character_description',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'They seemed happy and excited.',
    sentenceZh: '他们看起来既开心又兴奋。',
    chunkList: ['They seemed', 'happy and excited', '.'],
    keyPhrases: ['seemed', 'happy and excited'],
    functionTag: 'character_description',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'It was getting dark outside.',
    sentenceZh: '外面天色渐暗。',
    chunkList: ['It was getting', 'dark', 'outside', '.'],
    keyPhrases: ['getting dark', 'outside'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'The wind was blowing strongly.',
    sentenceZh: '风刮得很猛。',
    chunkList: ['The wind', 'was blowing', 'strongly', '.'],
    keyPhrases: ['wind', 'blowing strongly'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'The room was quiet and empty.',
    sentenceZh: '房间安静而空旷。',
    chunkList: ['The room', 'was', 'quiet and empty', '.'],
    keyPhrases: ['room', 'quiet and empty'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I felt scared and alone.',
    sentenceZh: '我感到害怕和孤独。',
    chunkList: ['I felt', 'scared and alone', '.'],
    keyPhrases: ['felt', 'scared and alone'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'My heart was beating fast.',
    sentenceZh: '我的心跳得很快。',
    chunkList: ['My heart', 'was beating', 'fast', '.'],
    keyPhrases: ['heart', 'beating fast'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I couldn\'t believe what I was seeing.',
    sentenceZh: '我简直不敢相信我所看到的。',
    chunkList: ['I couldn\'t believe', 'what I was seeing', '.'],
    keyPhrases: ['couldn\'t believe', 'what I was seeing'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The next morning, the sun rose as usual.',
    sentenceZh: '第二天早上，太阳照常升起。',
    chunkList: ['The next morning', ',', 'the sun rose', 'as usual', '.'],
    keyPhrases: ['next morning', 'sun rose', 'as usual'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'A few minutes later, the phone rang.',
    sentenceZh: '几分钟后，电话响了。',
    chunkList: ['A few minutes later', ',', 'the phone', 'rang', '.'],
    keyPhrases: ['A few minutes later', 'phone rang'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'At that moment, I knew what to do.',
    sentenceZh: '在那一刻，我知道该做什么了。',
    chunkList: ['At that moment', ',', 'I knew', 'what to do', '.'],
    keyPhrases: ['At that moment', 'knew', 'what to do'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The sky was full of dark clouds.',
    sentenceZh: '天空中布满了乌云。',
    chunkList: ['The sky', 'was full of', 'dark clouds', '.'],
    keyPhrases: ['sky', 'full of', 'dark clouds'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Rain started falling heavily.',
    sentenceZh: '雨开始下得很大。',
    chunkList: ['Rain started', 'falling heavily', '.'],
    keyPhrases: ['Rain started', 'falling heavily'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I was walking through the forest.',
    sentenceZh: '我正穿过森林。',
    chunkList: ['I was walking', 'through the forest', '.'],
    keyPhrases: ['walking', 'through the forest'],
    functionTag: 'story_opening',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'The path was narrow and winding.',
    sentenceZh: '小路狭窄而曲折。',
    chunkList: ['The path', 'was', 'narrow and winding', '.'],
    keyPhrases: ['path', 'narrow and winding'],
    functionTag: 'story_setting',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Birds were singing in the trees.',
    sentenceZh: '鸟儿在树上歌唱。',
    chunkList: ['Birds were singing', 'in the trees', '.'],
    keyPhrases: ['Birds singing', 'in the trees'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I felt a strange sensation.',
    sentenceZh: '我感到一种奇怪的感觉。',
    chunkList: ['I felt', 'a strange sensation', '.'],
    keyPhrases: ['felt', 'strange sensation'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Time seemed to stand still.',
    sentenceZh: '时间仿佛静止了。',
    chunkList: ['Time seemed', 'to stand still', '.'],
    keyPhrases: ['Time seemed', 'stand still'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'Everything happened so quickly.',
    sentenceZh: '一切都发生得太快了。',
    chunkList: ['Everything happened', 'so quickly', '.'],
    keyPhrases: ['Everything happened', 'quickly'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I had no idea what was going to happen.',
    sentenceZh: '我不知道接下来会发生什么。',
    chunkList: ['I had no idea', 'what was going to happen', '.'],
    keyPhrases: ['had no idea', 'going to happen'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The air was cold and fresh.',
    sentenceZh: '空气寒冷而清新。',
    chunkList: ['The air', 'was', 'cold and fresh', '.'],
    keyPhrases: ['air', 'cold and fresh'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Leaves were falling from the trees.',
    sentenceZh: '树叶从树上飘落。',
    chunkList: ['Leaves were falling', 'from the trees', '.'],
    keyPhrases: ['Leaves falling', 'from the trees'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I could hear footsteps behind me.',
    sentenceZh: '我能听到身后的脚步声。',
    chunkList: ['I could hear', 'footsteps', 'behind me', '.'],
    keyPhrases: ['could hear', 'footsteps', 'behind me'],
    functionTag: 'story_event',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'My hands were shaking.',
    sentenceZh: '我的手在颤抖。',
    chunkList: ['My hands', 'were shaking', '.'],
    keyPhrases: ['hands', 'shaking'],
    functionTag: 'emotion',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'I took a deep breath and continued.',
    sentenceZh: '我深吸一口气，继续前进。',
    chunkList: ['I took', 'a deep breath', 'and continued', '.'],
    keyPhrases: ['took a deep breath', 'continued'],
    functionTag: 'story_progression',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'The moon was shining brightly.',
    sentenceZh: '月亮明亮地照耀着。',
    chunkList: ['The moon', 'was shining', 'brightly', '.'],
    keyPhrases: ['moon', 'shining brightly'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 2
  },
  {
    sentence: 'Stars were twinkling in the night sky.',
    sentenceZh: '星星在夜空中闪烁。',
    chunkList: ['Stars were twinkling', 'in the night sky', '.'],
    keyPhrases: ['Stars twinkling', 'night sky'],
    functionTag: 'atmosphere',
    topicTag: 'writing',
    difficulty: 3
  },
  {
    sentence: 'I felt a sense of peace.',
    sentenceZh: '我感到一种平静的感觉。',
    chunkList: ['I felt', 'a sense of peace', '.'],
    keyPhrases: ['felt