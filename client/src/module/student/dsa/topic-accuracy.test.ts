
i
m
p
o
r
t
 
{
 
d
e
s
c
r
i
b
e
,
 
e
x
p
e
c
t
,
 
i
t
 
}
 
f
r
o
m
 
"
v
i
t
e
s
t
"
;


i
m
p
o
r
t
 
{
 
b
u
i
l
d
T
o
p
i
c
A
c
c
u
r
a
c
y
 
}
 
f
r
o
m
 
"
.
/
t
o
p
i
c
-
a
c
c
u
r
a
c
y
"
;




d
e
s
c
r
i
b
e
(
"
b
u
i
l
d
T
o
p
i
c
A
c
c
u
r
a
c
y
"
,
 
(
)
 
=
>
 
{


 
 
i
t
(
"
c
o
m
p
u
t
e
s
 
s
t
r
o
n
g
e
s
t
,
 
n
e
e
d
s
 
w
o
r
k
 
a
n
d
 
n
o
t
 
s
t
a
r
t
e
d
 
t
o
p
i
c
s
"
,
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
e
s
u
l
t
 
=
 
b
u
i
l
d
T
o
p
i
c
A
c
c
u
r
a
c
y
(
[


 
 
 
 
 
 
{
 
i
d
:
 
1
,
 
n
a
m
e
:
 
"
A
r
r
a
y
s
"
,
 
s
l
u
g
:
 
"
a
r
r
a
y
s
"
,
 
o
r
d
e
r
I
n
d
e
x
:
 
0
,
 
p
r
o
b
l
e
m
C
o
u
n
t
:
 
5
0
,
 
s
o
l
v
e
d
C
o
u
n
t
:
 
2
3
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
2
,
 
n
a
m
e
:
 
"
H
a
s
h
 
M
a
p
s
"
,
 
s
l
u
g
:
 
"
h
a
s
h
-
m
a
p
s
"
,
 
o
r
d
e
r
I
n
d
e
x
:
 
1
,
 
p
r
o
b
l
e
m
C
o
u
n
t
:
 
5
0
,
 
s
o
l
v
e
d
C
o
u
n
t
:
 
4
1
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
3
,
 
n
a
m
e
:
 
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
"
,
 
s
l
u
g
:
 
"
d
y
n
a
m
i
c
-
p
r
o
g
r
a
m
m
i
n
g
"
,
 
o
r
d
e
r
I
n
d
e
x
:
 
2
,
 
p
r
o
b
l
e
m
C
o
u
n
t
:
 
5
0
,
 
s
o
l
v
e
d
C
o
u
n
t
:
 
6
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
4
,
 
n
a
m
e
:
 
"
S
e
g
m
e
n
t
 
T
r
e
e
s
"
,
 
s
l
u
g
:
 
"
s
e
g
m
e
n
t
-
t
r
e
e
s
"
,
 
o
r
d
e
r
I
n
d
e
x
:
 
3
,
 
p
r
o
b
l
e
m
C
o
u
n
t
:
 
2
5
,
 
s
o
l
v
e
d
C
o
u
n
t
:
 
0
 
}
,


 
 
 
 
]
)
;




 
 
 
 
e
x
p
e
c
t
(
r
e
s
u
l
t
.
t
o
p
i
c
A
c
c
u
r
a
c
y
.
m
a
p
(
(
t
o
p
i
c
)
 
=
>
 
t
o
p
i
c
.
p
c
t
)
)
.
t
o
E
q
u
a
l
(
[
4
6
,
 
8
2
,
 
1
2
,
 
0
]
)
;


 
 
 
 
e
x
p
e
c
t
(
r
e
s
u
l
t
.
s
t
r
o
n
g
e
s
t
T
o
p
i
c
?
.
n
a
m
e
)
.
t
o
B
e
(
"
H
a
s
h
 
M
a
p
s
"
)
;


 
 
 
 
e
x
p
e
c
t
(
r
e
s
u
l
t
.
n
e
e
d
s
W
o
r
k
T
o
p
i
c
?
.
n
a
m
e
)
.
t
o
B
e
(
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
"
)
;


 
 
 
 
e
x
p
e
c
t
(
r
e
s
u
l
t
.
n
o
t
S
t
a
r
t
e
d
T
o
p
i
c
?
.
n
a
m
e
)
.
t
o
B
e
(
"
S
e
g
m
e
n
t
 
T
r
e
e
s
"
)
;


 
 
}
)
;


}
)
;


