/**
 * Sport Vocabulary for PET B1
 */

import { WordCard } from 'shared-types';

export const sportWords: Omit<WordCard, 'id' | 'memoryState' | 'intervalDays' | 
  'nextReviewAt' | 'lapseCount' | 'correctCount' | 'wrongCount' | 
  'lastReviewedAt' | 'createdAt' | 'updatedAt'>[] = [
  {
    word: 'sport',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'physical activity with rules',
    meaningZh: '运动',
    exampleSentence: 'Football is a popular sport.',
    exampleSentenceZh: '足球是一项流行的运动。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'game',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'activity for fun or competition',
    meaningZh: '游戏',
    exampleSentence: 'Let\'s play a game of chess.',
    exampleSentenceZh: '我们下盘棋吧。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'team',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'group playing together',
    meaningZh: '团队',
    exampleSentence: 'Our team won the match.',
    exampleSentenceZh: '我们队赢了比赛。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'player',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'person who plays',
    meaningZh: '运动员',
    exampleSentence: 'He is a good tennis player.',
    exampleSentenceZh: '他是一个好的网球运动员。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'match',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sports competition',
    meaningZh: '比赛',
    exampleSentence: 'The match starts at 3 PM.',
    exampleSentenceZh: '比赛下午3点开始。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'competition',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'event to find the best',
    meaningZh: '竞赛',
    exampleSentence: 'I entered a swimming competition.',
    exampleSentenceZh: '我参加了一个游泳竞赛。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'race',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'competition of speed',
    meaningZh: '赛跑',
    exampleSentence: 'The race was very close.',
    exampleSentenceZh: '赛跑非常接近。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'win',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to be first in competition',
    meaningZh: '赢',
    exampleSentence: 'We want to win the championship.',
    exampleSentenceZh: '我们想赢冠军。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'lose',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to not win',
    meaningZh: '输',
    exampleSentence: 'It\'s okay to lose sometimes.',
    exampleSentenceZh: '有时候输也没关系。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'score',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get points',
    meaningZh: '得分',
    exampleSentence: 'He scored two goals.',
    exampleSentenceZh: '他得了两分。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'goal',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'point in football',
    meaningZh: '进球',
    exampleSentence: 'What a beautiful goal!',
    exampleSentenceZh: '多漂亮的进球！',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'point',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'unit in scoring',
    meaningZh: '分',
    exampleSentence: 'Our team has 10 points.',
    exampleSentenceZh: '我们队有10分。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'ball',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'round object for games',
    meaningZh: '球',
    exampleSentence: 'Throw me the ball.',
    exampleSentenceZh: '把球扔给我。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'kick',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to hit with foot',
    meaningZh: '踢',
    exampleSentence: 'Kick the ball to me.',
    exampleSentenceZh: '把球踢给我。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'throw',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to send through air',
    meaningZh: '扔',
    exampleSentence: 'Throw the ball to your teammate.',
    exampleSentenceZh: '把球扔给你的队友。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'catch',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to get something moving',
    meaningZh: '接',
    exampleSentence: 'Try to catch the ball.',
    exampleSentenceZh: '试着接住球。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'hit',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to strike',
    meaningZh: '击打',
    exampleSentence: 'He hit the ball hard.',
    exampleSentenceZh: '他用力击打球。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'run',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to move fast on feet',
    meaningZh: '跑',
    exampleSentence: 'Athletes run very fast.',
    exampleSentenceZh: '运动员跑得很快。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'jump',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to go up in air',
    meaningZh: '跳',
    exampleSentence: 'How high can you jump?',
    exampleSentenceZh: '你能跳多高？',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'swim',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to move in water',
    meaningZh: '游泳',
    exampleSentence: 'I swim every morning.',
    exampleSentenceZh: '我每天早上游泳。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'ride',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to sit on and control',
    meaningZh: '骑',
    exampleSentence: 'Can you ride a bicycle?',
    exampleSentenceZh: '你会骑自行车吗？',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'tennis',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sport with racket and ball',
    meaningZh: '网球',
    exampleSentence: 'We play tennis on weekends.',
    exampleSentenceZh: '我们周末打网球。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'football',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sport with round ball',
    meaningZh: '足球',
    exampleSentence: 'Football is the world\'s most popular sport.',
    exampleSentenceZh: '足球是世界上最受欢迎的运动。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'basketball',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sport with hoop and ball',
    meaningZh: '篮球',
    exampleSentence: 'Basketball is fun to watch.',
    exampleSentenceZh: '篮球很有趣看。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'swimming',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sport of moving in water',
    meaningZh: '游泳',
    exampleSentence: 'Swimming is good exercise.',
    exampleSentenceZh: '游泳是好的锻炼。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'cycling',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'sport of riding bicycles',
    meaningZh: '自行车运动',
    exampleSentence: 'Cycling is good for health.',
    exampleSentenceZh: '自行车运动对健康有益。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'athletics',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'track and field sports',
    meaningZh: '田径',
    exampleSentence: 'Athletics includes running and jumping.',
    exampleSentenceZh: '田径包括跑步和跳跃。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'exercise',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'physical activity for health',
    meaningZh: '锻炼',
    exampleSentence: 'Regular exercise is important.',
    exampleSentenceZh: '定期锻炼很重要。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'fit',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'in good physical condition',
    meaningZh: '健康的',
    exampleSentence: 'Athletes are very fit.',
    exampleSentenceZh: '运动员非常健康。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'strong',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'having power',
    meaningZh: '强壮的',
    exampleSentence: 'Weightlifters are very strong.',
    exampleSentenceZh: '举重运动员非常强壮。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'fast',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'quick',
    meaningZh: '快的',
    exampleSentence: 'Sprinters are very fast.',
    exampleSentenceZh: '短跑运动员非常快。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'slow',
    partOfSpeech: 'adjective',
    simpleDefinitionEn: 'not fast',
    meaningZh: '慢的',
    exampleSentence: 'I\'m too slow to win races.',
    exampleSentenceZh: '我太慢了，赢不了比赛。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'coach',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'person who trains athletes',
    meaningZh: '教练',
    exampleSentence: 'Our coach gives good advice.',
    exampleSentenceZh: '我们的教练给好建议。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'train',
    partOfSpeech: 'verb',
    simpleDefinitionEn: 'to prepare for sport',
    meaningZh: '训练',
    exampleSentence: 'Athletes train every day.',
    exampleSentenceZh: '运动员每天训练。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'practice',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'repeating to improve',
    meaningZh: '练习',
    exampleSentence: 'Practice makes perfect.',
    exampleSentenceZh: '熟能生巧。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'stadium',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'large place for sports',
    meaningZh: '体育场',
    exampleSentence: 'The stadium holds 50,000 people.',
    exampleSentenceZh: '体育场能容纳5万人。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'court',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'area for tennis, basketball',
    meaningZh: '球场',
    exampleSentence: 'The tennis court needs repair.',
    exampleSentenceZh: '网球场需要修理。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'pool',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'place for swimming',
    meaningZh: '游泳池',
    exampleSentence: 'The pool is open all summer.',
    exampleSentenceZh: '游泳池整个夏天都开放。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'pitch',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'field for football',
    meaningZh: '足球场',
    exampleSentence: 'The football pitch is wet.',
    exampleSentenceZh: '足球场是湿的。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'medal',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'award for winning',
    meaningZh: '奖牌',
    exampleSentence: 'She won a gold medal.',
    exampleSentenceZh: '她赢得了金牌。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'trophy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'cup for winning',
    meaningZh: '奖杯',
    exampleSentence: 'The team lifted the trophy.',
    exampleSentenceZh: '团队举起了奖杯。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'champion',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'winner of competition',
    meaningZh: '冠军',
    exampleSentence: 'He is the world champion.',
    exampleSentenceZh: '他是世界冠军。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'victory',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'win',
    meaningZh: '胜利',
    exampleSentence: 'Celebrate the victory!',
    exampleSentenceZh: '庆祝胜利！',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'defeat',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'loss',
    meaningZh: '失败',
    exampleSentence: 'The defeat was disappointing.',
    exampleSentenceZh: '失败令人失望。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'draw',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'tie in game',
    meaningZh: '平局',
    exampleSentence: 'The match ended in a draw.',
    exampleSentenceZh: '比赛以平局结束。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'referee',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'person who enforces rules',
    meaningZh: '裁判',
    exampleSentence: 'The referee made a bad call.',
    exampleSentenceZh: '裁判做了错误的判罚。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'umpire',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'referee in some sports',
    meaningZh: '裁判员',
    exampleSentence: 'The umpire said "out".',
    exampleSentenceZh: '裁判员说"出局"。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'fan',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'supporter of team',
    meaningZh: '粉丝',
    exampleSentence: 'Football fans are passionate.',
    exampleSentenceZh: '足球粉丝很热情。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'spectator',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'person who watches',
    meaningZh: '观众',
    exampleSentence: 'Spectators cheered loudly.',
    exampleSentenceZh: '观众大声欢呼。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'league',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'group of teams',
    meaningZh: '联赛',
    exampleSentence: 'Our team is top of the league.',
    exampleSentenceZh: '我们队在联赛中名列前茅。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'tournament',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'series of games',
    meaningZh: '锦标赛',
    exampleSentence: 'The tennis tournament lasts two weeks.',
    exampleSentenceZh: '网球锦标赛持续两周。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'championship',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'competition for title',
    meaningZh: '锦标赛',
    exampleSentence: 'They won the championship last year.',
    exampleSentenceZh: '他们去年赢得了锦标赛。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'final',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'last game in competition',
    meaningZh: '决赛',
    exampleSentence: 'The final is on Sunday.',
    exampleSentenceZh: '决赛在周日。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'semi-final',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'game before final',
    meaningZh: '半决赛',
    exampleSentence: 'Our team reached the semi-final.',
    exampleSentenceZh: '我们队进入了半决赛。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'quarter-final',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'game before semi-final',
    meaningZh: '四分之一决赛',
    exampleSentence: 'They lost in the quarter-final.',
    exampleSentenceZh: '他们在四分之一决赛中输了。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'opponent',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'person you compete against',
    meaningZh: '对手',
    exampleSentence: 'My opponent was very skilled.',
    exampleSentenceZh: '我的对手非常熟练。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'teammate',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'member of same team',
    meaningZh: '队友',
    exampleSentence: 'Help your teammates.',
    exampleSentenceZh: '帮助你的队友。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'captain',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'leader of team',
    meaningZh: '队长',
    exampleSentence: 'The captain makes decisions.',
    exampleSentenceZh: '队长做决定。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'substitute',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'player who replaces another',
    meaningZh: '替补',
    exampleSentence: 'The substitute scored a goal.',
    exampleSentenceZh: '替补进了一个球。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'warm-up',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'exercises before game',
    meaningZh: '热身',
    exampleSentence: 'Do a proper warm-up.',
    exampleSentenceZh: '做适当的热身。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'cool-down',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'exercises after game',
    meaningZh: '放松',
    exampleSentence: 'Cool-down prevents injuries.',
    exampleSentenceZh: '放松防止受伤。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'injury',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'physical harm',
    meaningZh: '受伤',
    exampleSentence: 'He has a knee injury.',
    exampleSentenceZh: '他膝盖受伤了。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'recovery',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'getting better after injury',
    meaningZh: '恢复',
    exampleSentence: 'Her recovery took six months.',
    exampleSentenceZh: '她的恢复花了六个月。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'fitness',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'physical condition',
    meaningZh: '健康',
    exampleSentence: 'Fitness is important for athletes.',
    exampleSentenceZh: '健康对运动员很重要。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'endurance',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'ability to continue',
    meaningZh: '耐力',
    exampleSentence: 'Marathon runners need endurance.',
    exampleSentenceZh: '马拉松运动员需要耐力。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'strength',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'power',
    meaningZh: '力量',
    exampleSentence: 'Weight training builds strength.',
    exampleSentenceZh: '重量训练增强力量。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'speed',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'how fast something moves',
    meaningZh: '速度',
    exampleSentence: 'His speed is amazing.',
    exampleSentenceZh: '他的速度令人惊讶。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'agility',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'ability to move quickly',
    meaningZh: '敏捷',
    exampleSentence: 'Gymnasts have great agility.',
    exampleSentenceZh: '体操运动员有很好的敏捷性。',
    topicTag: 'sport',
    difficulty: 3
  },
  {
    word: 'flexibility',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'ability to bend',
    meaningZh: '灵活性',
    exampleSentence: 'Yoga improves flexibility.',
    exampleSentenceZh: '瑜伽提高灵活性。',
    topicTag: 'sport',
    difficulty: 3
  },
  {
    word: 'balance',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'staying steady',
    meaningZh: '平衡',
    exampleSentence: 'Good balance is important.',
    exampleSentenceZh: '良好的平衡很重要。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'coordination',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'working together smoothly',
    meaningZh: '协调',
    exampleSentence: 'Team sports require coordination.',
    exampleSentenceZh: '团队运动需要协调。',
    topicTag: 'sport',
    difficulty: 3
  },
  {
    word: 'technique',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'way of doing something',
    meaningZh: '技术',
    exampleSentence: 'Practice your technique.',
    exampleSentenceZh: '练习你的技术。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'strategy',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'plan to win',
    meaningZh: '策略',
    exampleSentence: 'The team needs a good strategy.',
    exampleSentenceZh: '团队需要一个好策略。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'tactic',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'specific plan',
    meaningZh: '战术',
    exampleSentence: 'Changing tactics helped us win.',
    exampleSentenceZh: '改变战术帮助我们赢了。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'defense',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'protecting your goal',
    meaningZh: '防守',
    exampleSentence: 'Our defense is strong.',
    exampleSentenceZh: '我们的防守很强。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'offense',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'attacking',
    meaningZh: '进攻',
    exampleSentence: 'The offense scored many points.',
    exampleSentenceZh: '进攻得了很多分。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'goalkeeper',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'player who guards goal',
    meaningZh: '守门员',
    exampleSentence: 'The goalkeeper made a great save.',
    exampleSentenceZh: '守门员做了一个伟大的扑救。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'forward',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'attacking player',
    meaningZh: '前锋',
    exampleSentence: 'The forward scored three goals.',
    exampleSentenceZh: '前锋进了三个球。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'midfielder',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'player in middle of field',
    meaningZh: '中场',
    exampleSentence: 'Midfielders control the game.',
    exampleSentenceZh: '中场控制比赛。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'defender',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'defensive player',
    meaningZh: '后卫',
    exampleSentence: 'Defenders protect the goal.',
    exampleSentenceZh: '后卫保护球门。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'uniform',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'clothes for team',
    meaningZh: '制服',
    exampleSentence: 'Players wear team uniforms.',
    exampleSentenceZh: '球员穿队服。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'equipment',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'tools for sport',
    meaningZh: '设备',
    exampleSentence: 'We need new sports equipment.',
    exampleSentenceZh: '我们需要新的运动设备。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'racket',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'tool for tennis',
    meaningZh: '球拍',
    exampleSentence: 'I need a new tennis racket.',
    exampleSentenceZh: '我需要一个新的网球拍。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'bat',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'tool for baseball',
    meaningZh: '球棒',
    exampleSentence: 'The baseball bat broke.',
    exampleSentenceZh: '棒球棒断了。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'club',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'tool for golf',
    meaningZh: '高尔夫球杆',
    exampleSentence: 'He has a set of golf clubs.',
    exampleSentenceZh: '他有一套高尔夫球杆。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'net',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'mesh for tennis, volleyball',
    meaningZh: '网',
    exampleSentence: 'The volleyball net is too high.',
    exampleSentenceZh: '排球网太高了。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'goalpost',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'posts for football goal',
    meaningZh: '球门柱',
    exampleSentence: 'The ball hit the goalpost.',
    exampleSentenceZh: '球击中了球门柱。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'hoop',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'ring for basketball',
    meaningZh: '篮筐',
    exampleSentence: 'Shoot the ball through the hoop.',
    exampleSentenceZh: '把球投进篮筐。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'field',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'area for sports',
    meaningZh: '场地',
    exampleSentence: 'The soccer field is green.',
    exampleSentenceZh: '足球场是绿色的。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'track',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'path for running',
    meaningZh: '跑道',
    exampleSentence: 'Runners use the track.',
    exampleSentenceZh: '跑步者使用跑道。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'gym',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'place for exercise',
    meaningZh: '健身房',
    exampleSentence: 'I go to the gym three times a week.',
    exampleSentenceZh: '我每周去健身房三次。',
    topicTag: 'sport',
    difficulty: 1
  },
  {
    word: 'fitness center',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'place for exercise',
    meaningZh: '健身中心',
    exampleSentence: 'The fitness center has many machines.',
    exampleSentenceZh: '健身中心有很多机器。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'yoga',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'exercise for mind and body',
    meaningZh: '瑜伽',
    exampleSentence: 'Yoga helps me relax.',
    exampleSentenceZh: '瑜伽帮助我放松。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'pilates',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'exercise system',
    meaningZh: '普拉提',
    exampleSentence: 'Pilates strengthens core muscles.',
    exampleSentenceZh: '普拉提增强核心肌肉。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'aerobics',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'exercises to music',
    meaningZh: '有氧运动',
    exampleSentence: 'Aerobics classes are fun.',
    exampleSentenceZh: '有氧运动课很有趣。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'workout',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'session of exercise',
    meaningZh: '锻炼',
    exampleSentence: 'I did a 30-minute workout.',
    exampleSentenceZh: '我做了30分钟的锻炼。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'training',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'preparation for sport',
    meaningZh: '训练',
    exampleSentence: 'Hard training leads to success.',
    exampleSentenceZh: '艰苦的训练导致成功。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'coaching',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'giving instruction',
    meaningZh: '教练指导',
    exampleSentence: 'Good coaching improves performance.',
    exampleSentenceZh: '好的教练指导提高表现。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'mentoring',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'guiding and advising',
    meaningZh: '指导',
    exampleSentence: 'Young athletes need mentoring.',
    exampleSentenceZh: '年轻运动员需要指导。',
    topicTag: 'sport',
    difficulty: 3
  },
  {
    word: 'sportsmanship',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'fair play',
    meaningZh: '体育精神',
    exampleSentence: 'Good sportsmanship is important.',
    exampleSentenceZh: '良好的体育精神很重要。',
    topicTag: 'sport',
    difficulty: 3
  },
  {
    word: 'fair play',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'playing by rules',
    meaningZh: '公平竞争',
    exampleSentence: 'We believe in fair play.',
    exampleSentenceZh: '我们相信公平竞争。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'cheating',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'breaking rules',
    meaningZh: '作弊',
    exampleSentence: 'Cheating is unacceptable.',
    exampleSentenceZh: '作弊是不可接受的。',
    topicTag: 'sport',
    difficulty: 2
  },
  {
    word: 'doping',
    partOfSpeech: 'noun',
    simpleDefinitionEn: 'using drugs to improve performance',
    meaningZh: '兴奋剂',
    exampleSentence: 'Doping is banned in sports.',
    exampleSentenceZh: '兴奋剂在运动中被禁止。',
    topicTag: 'sport',
    difficulty: 3
  }
];