insert into Tags(id, name, description, state, type) VALUES(null, '工作', null, 0, 1);
insert into Tags(id, name, description, state, type) VALUES(null, '生活', null, 0, 1);
insert into Tags(id, name, description, state, type) VALUES(null, '优化功能', null, 0, 1);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能1', 1,  0,  -1, 1, 1);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能2', 0,  0,  -1, 1, 1);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能3', 1,  0,  -1, 1, 1);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能4', 0,  0,  -1, 1, 1);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能5', 0,  0,  -1, 1, 2);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能6', 1,  0,  -1, 1, 2);
insert into Todos(ID, Title, State, Delflag, ParentId, StepNum, TagId) VALUES (NULL, '存储功能7', 0,  0,  -1, 1, 2);

-- select * from Tags
-- 获取表列表
-- SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;
-- 获取表结构
-- PRAGMA table_info(TableName)
CREATE TABLE Tags (
    ID              INTEGER             PRIMARY KEY     AUTOINCREMENT,
    Name            NVARCHAR(30)        not null, 
    Description     NVARCHAR(200)       null, 
    State           TINYINT             not null, 
    Type            TINYINT             not null
);

CREATE TABLE Todos (
    ID              INTEGER         PRIMARY KEY     AUTOINCREMENT,
    Title           NVARCHAR(30)    not null,                                   -- 任务名称、分步名称
    State           TINYINT         not null DEFAULT 0,                         -- 任务状态 0 未完成 1 已完成
    DelFlag         TINYINT         not null DEFAULT 0,                         -- 删除标记
    ImportantFlag   TINYINT         not null DEFAULT 0,                         -- 重要标记
    ParentId        INTEGER         not null DEFAULT -1,                        -- 父级任务
    StepNum         INTEGER         not null DEFAULT -1,
    TagId           INTEGER         not null,
    Creator         NVARCHAR(20)    null,
    CreateDatetime  DATETIME        null DEFAULT(datetime('now','localtime')),                            -- 
    DDLine          DATETIME        null,
    Attechements    NVARCHAR(500)   NULL,                                       -- 附件，多个使用 | 分割
    Remarks         TEXT            null
);
