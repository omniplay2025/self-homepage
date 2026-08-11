window.siteData = {
  profile: {
    name: "Fuqing Bie",
    cnName: "别福庆",
    role: "LLM Agent & Reinforcement Learning Researcher",
    availability: "Open to full-time AGI research roles · Graduating June 2027",
    intro:
      "PhD candidate at BUPT with research experience at Tencent, Alibaba Cloud, Zhipu AI, and 4Paradigm. I build long-horizon agents, multimodal post-training systems, and evaluation benchmarks.",
    phone: "+86-178-6232-6340",
    email: "biehenry9@gmail.com",
    github: "https://github.com/fuqingbie",
    githubLabel: "github.com/fuqingbie",
    location: "Beijing, China",
    affiliation: "Beijing University of Posts and Telecommunications",
    researchAreas: ["LLM Agents", "Reinforcement Learning", "Multi-Agent RL", "Multimodal Models"],
    meta: [
      { label: "Now", value: "Tencent · 青云计划" },
      { label: "PhD", value: "BUPT · Computer Science" },
      { label: "Focus", value: "Agents · RL · MARL · VLM" },
    ],
    stats: [
      { value: "15", label: "Publications", note: "NeurIPS · ICCV · TNNLS" },
      { value: "1.7k+", label: "OpenRL Lab stars", note: "Core contributor" },
      { value: "5.5k+", label: "OmniGUI downloads", note: "Within two weeks" },
      { value: "6", label: "Research roles", note: "Industry + applied labs" },
    ],
  },

  projects: [
    {
      type: "Agentic information seeking",
      title: "Table-as-Search",
      description:
        "Reframing long-horizon web research as structured table completion, giving agents a clearer state, search plan, and evidence trail.",
      impact: "ACL Findings 2026",
      link: "https://arxiv.org/abs/2602.06724",
      linkLabel: "Read the paper",
    },
    {
      type: "GUI agent evaluation",
      title: "OmniGUI",
      description:
        "A benchmark for GUI agents in omni-modal smartphone environments, connecting web agents with rich multimodal interaction.",
      impact: "5,500+ downloads in two weeks",
      link: "https://omni-gui.github.io/",
      linkLabel: "Explore the project",
    },
    {
      type: "Open-source reinforcement learning",
      title: "OpenRL",
      description:
        "A unified reinforcement learning framework designed for flexible research workflows across single- and multi-agent settings.",
      impact: "820+ stars · 80+ forks · #2 contributor",
      link: "https://github.com/OpenRL-Lab/openrl",
      linkLabel: "View on GitHub",
    },
    {
      type: "Multimodal foundation models",
      title: "GLM-4.1V",
      description:
        "Contributed to the model training pipeline and multimodal post-training infrastructure supporting GLM-4.1V and GLM-4V-Plus.",
      impact: "Core training infrastructure",
      link: "https://github.com/zai-org/GLM-V",
      linkLabel: "View the model",
    },
  ],

  experience: [
    {
      organization: "Tencent · Tencent Advertising",
      organizationCn: "腾讯 · 腾讯广告业务线",
      organizationUrl: "https://www.tencent.com/",
      location: "Beijing, China",
      role: "Agent Researcher · 青云计划",
      period: "Jul 2026 — Present",
      featured: true,
      bullets: [
        "Developing an enterprise-facing, domain-specific cloud data agent for autonomous data processing, precise retrieval, and structured report generation.",
        "Designed an in-context verification loop spanning coding, test generation, error detection, iterative optimization, and delivery.",
        "Established a multi-dimensional evaluation system covering business tasks, agent self-evolution, and general-purpose benchmarks.",
      ],
    },
    {
      organization: "Alibaba Cloud",
      organizationCn: "阿里云",
      organizationUrl: "https://www.aliyun.com/",
      location: "Beijing, China",
      role: "Agent Researcher",
      period: "Oct 2025 — Jun 2026",
      bullets: [
        "Researched long-horizon information seeking for DeepResearch-style agents and co-developed Table-as-Search, accepted by ACL Findings 2026.",
        "Architected core planning, retrieval, evidence organization, and report synthesis components for DeepResearch workflows.",
        "Authored the OmniGUI benchmark for omni-modal GUI-agent evaluation; its dataset passed 5,500 downloads within two weeks.",
      ],
    },
    {
      organization: "Zhipu AI",
      organizationCn: "智谱 AI",
      organizationUrl: "https://www.zhipuai.cn/",
      location: "Beijing, China",
      role: "Large Model Researcher",
      period: "Jun 2024 — Sep 2025",
      bullets: [
        "Ran DPO post-training for GLM-4V-Plus and engineered multimodal post-training infrastructure later used by GLM-4.1V.",
        "Contributed to the Zhipu Qingyan text-to-image model and built an AIGC-powered intelligent agent based on Jet Li's public persona.",
      ],
    },
    {
      organization: "4Paradigm",
      organizationCn: "第四范式",
      organizationUrl: "https://www.4paradigm.com/",
      location: "Beijing, China",
      role: "Algorithm Researcher",
      period: "Apr 2023 — Feb 2024",
      bullets: [
        "Served as a core contributor to OpenRL Lab and engineered OpenRL, ranking second in overall code contributions.",
      ],
    },
    {
      organization: "Huaru Technology",
      organizationCn: "华如科技",
      organizationUrl: "http://www.huaru.com/",
      location: "Beijing, China",
      role: "Reinforcement Learning Algorithm Intern",
      period: "Apr 2022 — Aug 2022",
      bullets: [
        "Key developer for XSim, an early multi-agent reinforcement learning platform for military simulation in China.",
      ],
    },
    {
      organization: "CETC · Space Supercomputing Division",
      organizationCn: "中国电子科技集团",
      organizationUrl: "",
      location: "Beijing, China",
      role: "Software Department Intern",
      period: "Mar 2021 — Jul 2021",
      bullets: [
        "Supported development and testing for applications running on the space supercomputing platform.",
      ],
    },
  ],

  representativePublications: [
    {
      title: "Table-as-Search: Formulate Long-Horizon Agentic Information Seeking as Table Completion",
      authorsHtml:
        'Tian Lan, <strong>Fuqing Bie (Felix Henry)</strong>, Bin Zhu, Qianghuai Jia, Junyang Ren, Qihang Pu, Haijun Li, Longyue Wang, Zhao Xu, Weihua Luo.',
      venue: "ACL Findings",
      status: "Accepted",
      link: "https://arxiv.org/abs/2602.06724",
      year: "2026",
    },
    {
      title: "OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments",
      authorsHtml:
        '<strong>Fuqing Bie (Felix Henry)</strong>, Xiaochen Lin, Jiangyou Zhu, Yang Fan, Bingqian Zhang, Min Chen, Shiyu Huang.',
      venue: "ECCV",
      status: "Submission",
      link: "https://omni-gui.github.io/",
      year: "2026",
    },
    {
      title: "OmniPlay: Benchmarking Omni-Modal Models on Omni-Modal Game Playing",
      authorsHtml:
        '<strong>Fuqing Bie</strong>, Shiyu Huang, Xijia Tao, Zhiqin Fang, Leyi Pan, Junzhe Chen, Min Ren, Liuyu Xiang, Zhaofeng He.',
      venue: "EMNLP",
      status: "Submission",
      link: "https://arxiv.org/abs/2508.04361",
      year: "2026",
    },
    {
      title: "Can Large Language Models Master Complex Card Games?",
      authorsHtml:
        'Wei Wang, <strong>Fuqing Bie</strong>, Junzhe Chen, Dan Zhang, Shiyu Huang, Evgeny Kharlamov, Jie Tang.',
      venue: "NeurIPS",
      status: "Published",
      link: "https://arxiv.org/abs/2509.01328",
      year: "2025",
    },
    {
      title: "OpenRL: A Unified Reinforcement Learning Framework",
      authorsHtml:
        'Shiyu Huang, Wentse Chen, Yiwen Sun, <strong>Fuqing Bie</strong>, Wei-Wei Tu.',
      venue: "arXiv",
      status: "Open source",
      link: "https://arxiv.org/abs/2312.16189",
      year: "2023",
    },
  ],

  fullPublications: [
    {
      title: "OmniPlay: Benchmarking Omni-Modal Models on Omni-Modal Game Playing",
      authorsHtml:
        '<strong>Fuqing Bie</strong>, Shiyu Huang, Xijia Tao, Zhiqin Fang, Leyi Pan, Junzhe Chen, Min Ren, Liuyu Xiang, Zhaofeng He.',
      venue: "EMNLP",
      status: "Submission",
      link: "https://arxiv.org/abs/2508.04361",
      year: "2026",
    },
    {
      title: "Omni-RRM: Advancing Omni Reward Modeling via Automatic Rubric-Grounded Preference Synthesis",
      authorsHtml:
        'Zicheng Kong, Dehua Ma, Zhenbo Xu, Alven Yang, Yiwei Ru, Haoran Wang, Zixuan Zhou, <strong>Fuqing Bie</strong>, Liuyu Xiang, Huijia Wu, Jian Zhao, Zhaofeng He.',
      venue: "ECCV",
      status: "Published",
      link: "https://arxiv.org/abs/2602.00846",
      year: "2026",
    },
    {
      title: "Omni-SafetyBench: A Benchmark for Safety Evaluation of Audio-Visual Large Language Models",
      authorsHtml:
        'Leyi Pan, Zheyu Fu, Yunpeng Zhai, Shuchang Tao, Sheng Guan, Shiyu Huang, Lingzhe Zhang, Zhaoyang Liu, Bolin Ding, <strong>Fuqing Bie (Felix Henry)</strong>, Lijie Wen, Aiwei Liu.',
      venue: "ACM MM",
      status: "Published",
      link: "https://arxiv.org/abs/2508.07173",
      year: "2026",
    },
    {
      title: "Table-as-Search: Formulate Long-Horizon Agentic Information Seeking as Table Completion",
      authorsHtml:
        'Tian Lan, <strong>Fuqing Bie (Felix Henry)</strong>, Bin Zhu, Qianghuai Jia, Junyang Ren, Qihang Pu, Haijun Li, Longyue Wang, Zhao Xu, Weihua Luo.',
      venue: "ACL Findings",
      status: "Accepted",
      link: "https://arxiv.org/abs/2602.06724",
      year: "2026",
    },
    {
      title: "OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments",
      authorsHtml:
        '<strong>Fuqing Bie (Felix Henry)</strong>, Xiaochen Lin, Jiangyou Zhu, Yang Fan, Bingqian Zhang, Min Chen, Shiyu Huang.',
      venue: "ECCV",
      status: "Submission",
      link: "https://omni-gui.github.io/",
      year: "2026",
    },
    {
      title: "HMP-Align: Jointly Modeling Human-LLM Traits via Context-Aware Tuning",
      authorsHtml:
        'Anwen Yang, Jian Zhao, Yuchen Yuan, Dehua Ma, Leyan Wang, Peipei Li, Huijia Wu, <strong>Fuqing Bie</strong>, Zhaofeng He.',
      venue: "IJCAI",
      status: "Submission",
      link: "",
      year: "2026",
    },
    {
      title: "Simulation-Free PSRO: Removing Game Simulation from Policy Space Response Oracles",
      authorsHtml:
        'Yingzhuo Liu, Shuodi Liu, Weijun Luo, <strong>Fuqing Bie</strong>, Yida Wang, Liuyu Xiang, Zhaofeng He.',
      venue: "IJCAI",
      status: "Submission",
      link: "",
      year: "2026",
    },
    {
      title: "Can Large Language Models Master Complex Card Games?",
      authorsHtml:
        'Wei Wang, <strong>Fuqing Bie</strong>, Junzhe Chen, Dan Zhang, Shiyu Huang, Evgeny Kharlamov, Jie Tang.',
      venue: "NeurIPS",
      status: "Published",
      link: "https://arxiv.org/abs/2509.01328",
      year: "2025",
    },
    {
      title:
        "Knowledge-Guided Policy Arbitration: A Hierarchical Cognitive Framework for Safety-Critical Decision-Making under Dynamic Conflicting Objectives",
      authorsHtml:
        '<strong>Fuqing Bie</strong>*, Xingyang Chang*, Leyan Wang, Dehua Ma, Songfu Xu, Shuodi Liu, Yingzhuo Liu, Liuyu Xiang, Zhaofeng He.',
      venue: "Expert Systems with Applications",
      status: "Published",
      link: "https://www.sciencedirect.com/science/article/pii/S0957417426013606?via=ihub",
      year: "2025",
    },
    {
      title: "MIRAGE: A Multi-modal Benchmark for Spatial Perception, Reasoning, and Intelligence",
      authorsHtml:
        'Chonghan Liu, Haoran Wang, <strong>Fuqing Bie (Felix Henry)</strong>, Pu Miao, Yajie Zhang, Yu Zhao, Peiran Wu.',
      venue: "arXiv",
      status: "Preprint",
      link: "https://arxiv.org/abs/2505.10604",
      year: "2025",
    },
    {
      title: "Improving Generalization in Multi-Agent Reinforcement Learning via Complementary Self-supervised Learning",
      authorsHtml:
        '<strong>Fuqing Bie</strong>, Shiyu Huang, Yujie Wei, Bingzhen Zhang, Liuyu Xiang.',
      venue: "Knowledge-Based Systems",
      status: "Submission",
      link: "",
      year: "2025",
    },
    {
      title: "CVPReward: Captioning Videos with Process Rewards via Large Multimodal Models",
      authorsHtml:
        'Song Xixuan, Xiao Liu, Bo Li, Yean Cheng, <strong>Fuqing Bie</strong>, Junzhe Chen, Leyi Pan, Bo Lin, Shiyu Huang, Yuxiao Dong, Jie Tang.',
      venue: "ICCV",
      status: "Published",
      link: "",
      year: "2025",
    },
    {
      title: "OpenRL: A Unified Reinforcement Learning Framework",
      authorsHtml:
        'Shiyu Huang, Wentse Chen, Yiwen Sun, <strong>Fuqing Bie</strong>, Wei-Wei Tu.',
      venue: "arXiv",
      status: "Open source",
      link: "https://arxiv.org/abs/2312.16189",
      year: "2023",
    },
    {
      title: "Communication With Gate Attention Network for Multi-Agent Reinforcement Learning",
      authorsHtml:
        'Qinglai Wei, Shuai Wu, Jie Zhang, <strong>Fuqing Bie</strong>, Feiyue Wang.',
      venue: "IEEE TNNLS",
      status: "Published",
      link: "",
      year: "2022",
    },
    {
      title: "Attention Enhanced Policy Sharing Mechanism for Multiagent Reinforcement Learning",
      authorsHtml: '<strong>Fuqing Bie</strong>, Qinglai Wei.',
      venue: "International Journal of Intelligent Control and Systems",
      status: "Published",
      link: "",
      year: "2021",
    },
  ],

};
