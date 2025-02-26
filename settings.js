export default
    {
        "minecraft_version": "1.20.4", // 支持到1.21.1版本
        "host": "127.0.0.1", // 或 "localhost", "your.ip.address.here"
        "port": process.env.MINECRAFT_PORT || 25565,
        "auth": "offline", // 或 "microsoft"

        // mindserver 管理所有代理并托管UI
        "host_mindserver": true, // 如果为true，mindserver将在此机器上托管。否则，指定一个公共IP地址
        "mindserver_host": "localhost",
        "mindserver_port": process.env.MINDSERVER_PORT || 8080,

        // 基础配置文件由所有机器人共享，用于默认提示/示例/模式
        "base_profile": "./profiles/defaults/survival.json", // 也可以参考creative.json, god_mode.json
        "profiles": ((process.env.PROFILES) && JSON.parse(process.env.PROFILES)) || [
            // "./andy.json",
            // "./profiles/gpt.json",
            // "./profiles/claude.json",
            // "./profiles/gemini.json",
            // "./profiles/llama.json",
            // "./profiles/qwen.json",
            // "./profiles/mistral.json",
            // "./profiles/grok.json",
            // "./profiles/mistral.json",
            // "./profiles/deepseek.json",
           "./profiles/newapi.json",

            // 使用多个配置文件时，需要单独向每个机器人发送消息
            // 单个配置文件会覆盖基础配置文件中的值
        ],
        "load_memory": true, // 从之前的会话中加载记忆
        "init_message": "Respond with hello world and your name", // 生成时发送给所有机器人
        "only_chat_with": [], // 机器人监听并发送一般消息的用户。如果为空，则公开聊天

        "language": "en", // 翻译到/从此语言。支持这些语言名称：https://cloud.google.com/translate/docs/languages
        "show_bot_views": false, // 在浏览器中显示机器人的视图，访问localhost:3000, 3001...

        "allow_insecure_coding": true, // 允许newAction命令，模型可以在你的计算机上编写/运行代码。启用需自担风险
        "code_timeout_mins": -1, // 代码允许运行的分钟数。-1表示无超时
        "relevant_docs_count": 5, // 参数：-1 = 全部，0 = 无引用，5 = 五个引用。如果超过最大值，则返回所有引用文档。

        "max_messages": 15, // 上下文中保留的最大消息数
        "num_examples": 2, // 提供给模型的示例数量
        "max_commands": -1, // 连续响应中允许使用的最大命令数。-1表示无限制
        "verbose_commands": true, // 显示完整的命令语法
        "narrate_behavior": true, // 聊天中自动叙述简单动作（'捡起物品！'）
        "chat_bot_messages": true, // 公开向其他机器人发送消息
    }