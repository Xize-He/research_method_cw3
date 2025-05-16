const generatedBibEntries = {
    "Bai2013Heap": {
        "abstract": "This article presents a software-only scheme for managing heap data in the local memory of limited local memory (LLM) multicore processors. Unlike semi-automatic software cache approaches requiring complex crossthread code modifications, our intuitive programming interface offers an automatic, scalable heap management solution. For embedded applications with profiled maximum heap sizes, optimizations significantly reduce library overheads. Experiments on MiBench benchmarks using the Sony Playstation 3 demonstrate natural usability and a 14% average performance improvement with known heap sizes.",
        "author": "Bai, Ke and Shrivastava, Aviral",
        "doi": "10.1145/2501626.2501632",
        "journal": "ACM Transactions on Embedded Computing Systems",
        "keywords": "type:experimental, memory_type:heap_management, domain:multicore_processors, focus:performance_optimization, classification:early_modeling",
        "number": "1",
        "pages": "1-18",
        "title": "A Software-Only Scheme for Managing Heap Data on Limited Local Memory (LLM) Multicore Processors",
        "type": "article",
        "url": "https://doi.org/10.1145/2501626.2501632",
        "volume": "13",
        "year": "2013"
    },
    "Bengio2003NNLM": {
        "abstract": "Traditional n-gram language models suffer from data sparsity and limited context modeling. This paper proposes a neural probabilistic language model (NNLM) using a feedforward neural network to predict word probabilities based on distributed representations. NNLM captures richer semantic relationships, improving generalization and laying the groundwork for scalable neural language models.",
        "author": "Bengio, Yoshua and Ducharme, R\u00e9jean and Vincent, Pascal and Jauvin, Christian",
        "journal": "Journal of Machine Learning Research",
        "keywords": "type:experimental, memory_type:semantic_memory, domain:neural_language_model, focus:language_modeling, classification:early_modeling",
        "pages": "1137-1155",
        "title": "A Neural Probabilistic Language Model",
        "type": "article",
        "url": "http://jmlr.org/papers/v3/bengio03a.html",
        "volume": "3",
        "year": "2003"
    },
    "Collobert2008Unified": {
        "abstract": "Natural language processing tasks often rely on task-specific models with limited generalization. This paper presents a unified neural network architecture for multiple NLP tasks, using shared word embeddings to capture semantic relationships. The model improves efficiency and performance in tasks like part-of-speech tagging and named entity recognition, influencing subsequent large-scale language models.",
        "author": "Collobert, Ronan and Weston, Jason",
        "journal": "International Conference on Machine Learning (ICML)",
        "keywords": "type:experimental, memory_type:semantic_memory, domain:natural_language_processing, focus:word_embeddings, classification:early_modeling",
        "pages": "160-167",
        "title": "A Unified Architecture for Natural Language Processing: Deep Neural Networks with Multitask Learning",
        "type": "article",
        "url": "https://dl.acm.org/doi/pdf/10.1145/1390156.1390177",
        "year": "2008"
    },
    "Devlin2018BERT": {
        "abstract": "Traditional language models process text unidirectionally, limiting context understanding. This paper introduces BERT, a bidirectional transformer model pre-trained on large corpora, achieving state-of-the-art results in various NLP tasks. BERT's scalability and context awareness mark a milestone in large language model development.",
        "author": "Devlin, Jacob and Chang, Ming-Wei and Lee, Kenton and Toutanova, Kristina",
        "keywords": "type:experimental, memory_type:bidirectional_transformer, domain:large_language_model, focus:context_understanding, classification:early_modeling",
        "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        "type": "article",
        "url": "https://arxiv.org/pdf/1810.04805",
        "venue": "arXiv",
        "year": "2018"
    },
    "Gao2024Energy": {
        "abstract": "Large language models (LLMs) require significant energy due to their extensive memory and computational demands, posing challenges for edge device deployment. While parameter compression and pruning reduce memory needs, exponential parameter growth persists. This study explores approximate memories to store LLM parameters, significantly lowering energy dissipation by tolerating bit errors. Error injection experiments on compressed Bidirectional Encoder Representations from Transformers (BERT) demonstrate reliable operation at high bit error rates, enabling substantial energy savings with negligible performance impact.",
        "author": "Gao, Zhen and Deng, Jie and Reviriego, Pedro and Liu, Shanshan and Lombardi, Fabrizio",
        "doi": "10.1109/ISCAS58744.2024.10558275",
        "journal": "2024 IEEE International Symposium on Circuits and Systems (ISCAS)",
        "keywords": "type:experimental, memory_type:approximate_memories, domain:energy_dissipation, focus:memory_management, classification:cross_domain",
        "pages": "1-5",
        "title": "Reducing the Energy Dissipation of Large Language Models (LLMs) with Approximate Memories",
        "type": "article",
        "url": "https://doi.org/10.1109/ISCAS58744.2024.10558275",
        "year": "2024"
    },
    "Hong2024Memory": {
        "abstract": "Large language models (LLMs) face high inference costs due to inefficient knowledge storage and retrieval. Memory^3 introduces an explicit memory mechanism, converting text into explicit memories stored on disk and retrieved on demand, resembling key-value pairs in attention mechanisms. This memory format is cheaper than model parameters and retrieval-augmented generation (RAG). Experiments demonstrate that Memory^3 significantly reduces inference costs while improving performance in multi-task scenarios, offering a scalable solution for efficient language modeling.",
        "author": "Hong, Geunwoo and Yang, Hongkang and Kim, Taeho and Kim, Jinsung and Kim, Youngjoong and Lee, James Thorne",
        "keywords": "type:experimental, memory_type:explicit_memory, domain:large_language_model, focus:memory_augmentation, focus:efficiency, classification:memory_augmentation",
        "title": "Memory^3: Language Modeling with Explicit Memory",
        "type": "article",
        "url": "https://arxiv.org/abs/2407.01178",
        "venue": "arXiv",
        "year": "2024"
    },
    "Li2024Vector": {
        "abstract": "Current large language model (LLM) intelligences face challenges of high inference cost and low decision quality in complex tasks, particularly in maintaining context coherence during long tasks. This research presents VIMBank, a vector storage long-term memory mechanism model, to enhance LLM context retention and task execution efficiency by storing and retrieving historical interaction data via a vector database. Utilizing dynamic memory updating and Ebbinghaus forgetting curve theory, VIMBank optimizes memory management, reinforces critical information, and reduces storage and reasoning costs. Experiments show significant improvements in decision quality and efficiency in multi-task scenarios, with a 10%\u201320% increase in task success rate and a 23% reduction in computational cost.",
        "author": "Li, Kun and Xin, Jing and Chengang, Jing",
        "doi": "10.2478/ijanmc-2024-0029",
        "journal": "International Journal of Advanced Network, Monitoring, and Controls",
        "keywords": "type:experimental, memory_type:long_term_memory, memory_type:vector_storage, domain:large_language_model, focus:context_coherence, focus:efficiency, classification:memory_augmentation",
        "number": "3",
        "pages": "69-79",
        "title": "Vector Storage Based Long-term Memory Research on LLM",
        "type": "article",
        "url": "https://doi.org/10.2478/ijanmc-2024-0029",
        "volume": "9",
        "year": "2024"
    },
    "Wang2024Survey": {
        "abstract": "This survey explores the memory mechanisms of large language model (LLM)-based agents, which are increasingly pivotal in advancing towards Artificial General Intelligence (AGI). It categorizes these mechanisms into Short-term Memory, Long-term Memory, External Memory, and Hybrid Memory, discussing their definitions, necessity, and practical implementations. The paper examines how these mechanisms contribute to agent capabilities in planning, reflection, and tool utilization, and identifies challenges such as hallucination and context window limitations.",
        "author": "Wang, Zilin and Mao, Yilei and Wu, Jingyun and Zhang, Hongkun and Ding, Nan and Wang, Xu and Xu, Yan and Yang, An",
        "keywords": "type:survey, memory_type:short_term_memory, memory_type:long_term_memory, memory_type:external_memory, memory_type:hybrid_memory, domain:llm_agents, focus:context_coherence, focus:scalability, classification:memory_augmentation",
        "title": "A Survey on the Memory Mechanism of Large Language Model based Agents",
        "type": "article",
        "url": "https://arxiv.org/abs/2404.13501",
        "venue": "arXiv",
        "year": "2024"
    },
    "Yao2024Survey": {
        "abstract": "Large Language Models (LLMs) like ChatGPT and Bard excel in natural language tasks, offering deep comprehension and human-like text generation. This survey explores their impact on security and privacy, categorizing applications as beneficial (The Good), offensive (The Bad), and vulnerable (The Ugly). LLMs enhance code vulnerability detection and data privacy but are susceptible to user-level attacks due to their reasoning capabilities. Vulnerabilities like model extraction require further research, and safe instruction tuning remains underexplored, highlighting LLMs' dual role in bolstering and kindizing cybersecurity.",
        "author": "Yao, Yifan and Duan, Jinhao and Xu, Kaidi and Cai, Yuanfang and Sun, Zhibo and Zhang, Yue",
        "doi": "10.1016/j.hcc.2024.100211",
        "journal": "High-Confidence Computing",
        "keywords": "type:survey, domain:LLM_security, domain:LLM_privacy, focus:cybersecurity, classification:cross_domain",
        "number": "2",
        "pages": "100211",
        "title": "A Survey on Large Language Model (LLM) Security and Privacy: The Good, The Bad, and The Ugly",
        "type": "article",
        "url": "https://doi.org/10.1016/j.hcc.2024.100211",
        "volume": "4",
        "year": "2024"
    },
    "Yu2023Augmented": {
        "abstract": "This survey examines augmented large language models with parametric knowledge guiding, focusing on integrating external knowledge to enhance memory and context retention. It reviews methods like knowledge-augmented architectures and their applications in reasoning and question answering, addressing challenges in scalability and knowledge integration efficiency.",
        "author": "Yu, Guanhua and Zhang, Wei and Liu, Qiang and Yang, Zhipu",
        "keywords": "type:survey, memory_type:external_memory, domain:knowledge_guiding, focus:context_retention, focus:scalability, classification:memory_augmentation",
        "title": "Augmented Large Language Models with Parametric Knowledge Guiding",
        "type": "article",
        "url": "https://arxiv.org/abs/2307.02738",
        "venue": "arXiv",
        "year": "2023"
    }
};