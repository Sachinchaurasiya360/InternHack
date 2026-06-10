
e
x
p
o
r
t
 
t
y
p
e
 
E
x
a
m
S
e
c
t
i
o
n
 
=
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
d
u
r
a
t
i
o
n
M
i
n
:
 
n
u
m
b
e
r
;


 
 
t
o
p
i
c
T
a
g
s
:
 
s
t
r
i
n
g
[
]
;


}
;




e
x
p
o
r
t
 
t
y
p
e
 
E
x
a
m
Q
u
e
s
t
i
o
n
 
=
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
e
x
a
m
I
d
:
 
s
t
r
i
n
g
;


 
 
s
e
c
t
i
o
n
I
d
:
 
s
t
r
i
n
g
;


 
 
t
o
p
i
c
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
 
|
 
"
M
e
d
i
u
m
"
 
|
 
"
H
a
r
d
"
;


 
 
q
u
e
s
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
s
t
r
i
n
g
;


}
;




e
x
p
o
r
t
 
t
y
p
e
 
E
x
a
m
 
=
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
t
a
g
l
i
n
e
:
 
s
t
r
i
n
g
;


 
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
/
/
 
t
a
i
l
w
i
n
d
 
b
g
 
c
o
l
o
r
 
c
l
a
s
s


 
 
l
o
g
o
:
 
s
t
r
i
n
g
;
 
/
/
 
l
e
t
t
e
r


 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
s
e
c
t
i
o
n
s
:
 
E
x
a
m
S
e
c
t
i
o
n
[
]
;


 
 
p
a
s
s
C
u
t
o
f
f
:
 
n
u
m
b
e
r
;


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
E
X
A
M
S
:
 
E
x
a
m
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
T
C
S
"
,


 
 
 
 
n
a
m
e
:
 
"
T
C
S
 
N
Q
T
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
N
a
t
i
o
n
a
l
 
Q
u
a
l
i
f
i
e
r
 
T
e
s
t
,
 
N
u
m
e
r
i
c
a
l
,
 
V
e
r
b
a
l
,
 
R
e
a
s
o
n
i
n
g
,
 
C
o
d
i
n
g
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
b
l
u
e
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
T
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
1
0
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
0
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,
 
n
a
m
e
:
 
"
N
u
m
e
r
i
c
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
r
i
t
h
m
e
t
i
c
"
,
 
"
p
e
r
c
e
n
t
a
g
e
s
"
,
 
"
r
a
t
i
o
s
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
v
e
r
b
a
l
"
,
 
n
a
m
e
:
 
"
V
e
r
b
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
r
e
a
d
i
n
g
"
,
 
"
g
r
a
m
m
a
r
"
,
 
"
v
o
c
a
b
u
l
a
r
y
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,
 
n
a
m
e
:
 
"
L
o
g
i
c
a
l
 
R
e
a
s
o
n
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
p
u
z
z
l
e
s
"
,
 
"
s
e
r
i
e
s
"
,
 
"
c
o
d
i
n
g
-
d
e
c
o
d
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
c
o
d
i
n
g
"
,
 
n
a
m
e
:
 
"
C
o
d
i
n
g
 
L
o
g
i
c
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
l
g
o
r
i
t
h
m
s
"
,
 
"
d
a
t
a
-
s
t
r
u
c
t
u
r
e
s
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
i
n
f
o
s
y
s
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
I
n
f
o
s
y
s
"
,


 
 
 
 
n
a
m
e
:
 
"
I
n
f
o
s
y
s
 
I
n
f
y
T
Q
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
R
e
a
s
o
n
i
n
g
,
 
M
a
t
h
s
,
 
V
e
r
b
a
l
,
 
P
s
e
u
d
o
-
c
o
d
e
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
c
y
a
n
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
I
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
1
0
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
5
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,
 
n
a
m
e
:
 
"
L
o
g
i
c
a
l
 
R
e
a
s
o
n
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
s
y
l
l
o
g
i
s
m
"
,
 
"
s
e
r
i
e
s
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
m
a
t
h
s
"
,
 
n
a
m
e
:
 
"
M
a
t
h
e
m
a
t
i
c
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
3
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
p
r
o
b
a
b
i
l
i
t
y
"
,
 
"
a
l
g
e
b
r
a
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
v
e
r
b
a
l
"
,
 
n
a
m
e
:
 
"
V
e
r
b
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
g
r
a
m
m
a
r
"
,
 
"
c
o
m
p
r
e
h
e
n
s
i
o
n
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
p
s
e
u
d
o
"
,
 
n
a
m
e
:
 
"
P
s
e
u
d
o
-
c
o
d
e
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
l
o
o
p
s
"
,
 
"
a
r
r
a
y
s
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
p
r
o
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
W
i
p
r
o
"
,


 
 
 
 
n
a
m
e
:
 
"
W
i
p
r
o
 
E
l
i
t
e
 
N
L
T
H
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
A
p
t
i
t
u
d
e
,
 
E
n
g
l
i
s
h
,
 
L
o
g
i
c
a
l
,
 
C
o
d
i
n
g
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
v
i
o
l
e
t
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
W
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
1
4
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
0
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
a
p
t
i
t
u
d
e
"
,
 
n
a
m
e
:
 
"
Q
u
a
n
t
i
t
a
t
i
v
e
 
A
p
t
i
t
u
d
e
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
1
6
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
r
i
t
h
m
e
t
i
c
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
e
n
g
l
i
s
h
"
,
 
n
a
m
e
:
 
"
E
n
g
l
i
s
h
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
1
6
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
g
r
a
m
m
a
r
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
l
o
g
i
c
a
l
"
,
 
n
a
m
e
:
 
"
L
o
g
i
c
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
1
4
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
r
e
a
s
o
n
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
c
o
d
i
n
g
"
,
 
n
a
m
e
:
 
"
C
o
d
i
n
g
 
S
k
i
l
l
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
6
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
l
g
o
r
i
t
h
m
s
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
a
c
c
e
n
t
u
r
e
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
A
c
c
e
n
t
u
r
e
"
,


 
 
 
 
n
a
m
e
:
 
"
A
c
c
e
n
t
u
r
e
 
A
s
s
e
s
s
m
e
n
t
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
C
o
g
n
i
t
i
v
e
,
 
T
e
c
h
n
i
c
a
l
,
 
C
o
d
i
n
g
,
 
C
o
m
m
u
n
i
c
a
t
i
o
n
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
r
o
s
e
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
A
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
9
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
0
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
c
o
g
n
i
t
i
v
e
"
,
 
n
a
m
e
:
 
"
C
o
g
n
i
t
i
v
e
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
e
n
g
l
i
s
h
"
,
 
"
r
e
a
s
o
n
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
t
e
c
h
n
i
c
a
l
"
,
 
n
a
m
e
:
 
"
T
e
c
h
n
i
c
a
l
 
A
s
s
e
s
s
m
e
n
t
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
m
c
q
"
,
 
"
n
e
t
w
o
r
k
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
c
o
d
i
n
g
"
,
 
n
a
m
e
:
 
"
C
o
d
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
3
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
l
g
o
r
i
t
h
m
s
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,
 
n
a
m
e
:
 
"
C
o
m
m
u
n
i
c
a
t
i
o
n
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
1
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
e
n
g
l
i
s
h
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
a
p
g
e
m
i
n
i
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
C
a
p
g
e
m
i
n
i
"
,


 
 
 
 
n
a
m
e
:
 
"
C
a
p
g
e
m
i
n
i
 
E
x
a
m
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
G
a
m
e
-
b
a
s
e
d
,
 
P
s
e
u
d
o
-
c
o
d
e
,
 
E
n
g
l
i
s
h
,
 
E
s
s
a
y
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
i
n
d
i
g
o
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
C
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
1
0
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
0
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
g
a
m
e
"
,
 
n
a
m
e
:
 
"
G
a
m
e
-
b
a
s
e
d
 
A
p
t
i
t
u
d
e
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
r
e
a
s
o
n
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
p
s
e
u
d
o
"
,
 
n
a
m
e
:
 
"
P
s
e
u
d
o
-
c
o
d
e
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
l
o
o
p
s
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
e
n
g
l
i
s
h
"
,
 
n
a
m
e
:
 
"
E
n
g
l
i
s
h
 
C
o
m
p
r
e
h
e
n
s
i
o
n
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
5
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
g
r
a
m
m
a
r
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
e
s
s
a
y
"
,
 
n
a
m
e
:
 
"
E
s
s
a
y
 
W
r
i
t
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
3
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
w
r
i
t
i
n
g
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
o
g
n
i
z
a
n
t
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
"
C
o
g
n
i
z
a
n
t
"
,


 
 
 
 
n
a
m
e
:
 
"
C
o
g
n
i
z
a
n
t
 
G
e
n
C
"
,


 
 
 
 
t
a
g
l
i
n
e
:
 
"
L
o
g
i
c
a
l
,
 
V
e
r
b
a
l
,
 
Q
u
a
n
t
i
t
a
t
i
v
e
,
 
A
u
t
o
m
a
t
a
"
,


 
 
 
 
c
o
l
o
r
:
 
"
b
g
-
t
e
a
l
-
6
0
0
"
,


 
 
 
 
l
o
g
o
:
 
"
C
"
,


 
 
 
 
t
o
t
a
l
D
u
r
a
t
i
o
n
:
 
9
0
,


 
 
 
 
p
a
s
s
C
u
t
o
f
f
:
 
6
0
,


 
 
 
 
s
e
c
t
i
o
n
s
:
 
[


 
 
 
 
 
 
{
 
i
d
:
 
"
l
o
g
i
c
a
l
"
,
 
n
a
m
e
:
 
"
L
o
g
i
c
a
l
 
R
e
a
s
o
n
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
r
e
a
s
o
n
i
n
g
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
v
e
r
b
a
l
"
,
 
n
a
m
e
:
 
"
V
e
r
b
a
l
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
g
r
a
m
m
a
r
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
q
u
a
n
t
"
,
 
n
a
m
e
:
 
"
Q
u
a
n
t
i
t
a
t
i
v
e
 
A
b
i
l
i
t
y
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
2
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
r
i
t
h
m
e
t
i
c
"
]
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
"
a
u
t
o
m
a
t
a
"
,
 
n
a
m
e
:
 
"
A
u
t
o
m
a
t
a
 
C
o
d
i
n
g
"
,
 
d
u
r
a
t
i
o
n
M
i
n
:
 
3
0
,
 
t
o
p
i
c
T
a
g
s
:
 
[
"
a
l
g
o
r
i
t
h
m
s
"
]
 
}
,


 
 
 
 
]
,


 
 
}
,


]
;




/
/
 
Q
u
e
s
t
i
o
n
 
b
a
n
k
 
(
a
 
c
u
r
a
t
e
d
 
s
a
m
p
l
e
;
 
i
n
 
p
r
o
d
u
c
t
i
o
n
 
t
h
i
s
 
w
o
u
l
d
 
b
e
 
h
u
n
d
r
e
d
s
 
p
e
r
 
s
e
c
t
i
o
n
)


e
x
p
o
r
t
 
c
o
n
s
t
 
Q
U
E
S
T
I
O
N
S
:
 
E
x
a
m
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
/
/
 
T
C
S
 
N
Q
T
 
-
 
N
u
m
e
r
i
c
a
l


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
u
m
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
p
e
r
c
e
n
t
a
g
e
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
s
h
o
p
k
e
e
p
e
r
 
m
a
r
k
s
 
a
n
 
i
t
e
m
 
4
0
%
 
a
b
o
v
e
 
c
o
s
t
 
p
r
i
c
e
 
a
n
d
 
g
i
v
e
s
 
a
 
2
0
%
 
d
i
s
c
o
u
n
t
.
 
W
h
a
t
 
i
s
 
h
i
s
 
p
r
o
f
i
t
 
p
e
r
c
e
n
t
a
g
e
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
8
%
"
,
 
"
1
2
%
"
,
 
"
1
6
%
"
,
 
"
2
0
%
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
L
e
t
 
C
P
=
1
0
0
.
 
M
P
=
1
4
0
.
 
S
P
 
a
f
t
e
r
 
2
0
%
 
d
i
s
c
o
u
n
t
 
=
 
1
4
0
×
0
.
8
 
=
 
1
1
2
.
 
P
r
o
f
i
t
 
=
 
1
2
%
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
u
m
-
2
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
t
i
m
e
-
w
o
r
k
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
c
a
n
 
d
o
 
a
 
w
o
r
k
 
i
n
 
1
2
 
d
a
y
s
 
a
n
d
 
B
 
i
n
 
1
8
 
d
a
y
s
.
 
W
o
r
k
i
n
g
 
t
o
g
e
t
h
e
r
,
 
h
o
w
 
m
a
n
y
 
d
a
y
s
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
6
"
,
 
"
7
.
2
"
,
 
"
8
"
,
 
"
9
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
1
/
1
2
 
+
 
1
/
1
8
 
=
 
5
/
3
6
.
 
T
i
m
e
 
=
 
3
6
/
5
 
=
 
7
.
2
 
d
a
y
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
u
m
-
3
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
r
a
t
i
o
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
a
:
b
 
=
 
2
:
3
 
a
n
d
 
b
:
c
 
=
 
4
:
5
,
 
f
i
n
d
 
a
:
b
:
c
.
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
2
:
3
:
5
"
,
 
"
8
:
1
2
:
1
5
"
,
 
"
2
:
4
:
5
"
,
 
"
8
:
1
5
:
1
2
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
c
a
l
e
 
b
 
t
o
 
c
o
m
m
o
n
 
v
a
l
u
e
:
 
2
:
3
 
→
 
8
:
1
2
,
 
4
:
5
 
→
 
1
2
:
1
5
.
 
S
o
 
a
:
b
:
c
 
=
 
8
:
1
2
:
1
5
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
u
m
-
4
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
p
r
o
b
a
b
i
l
i
t
y
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
p
r
o
b
a
b
i
l
i
t
y
 
o
f
 
g
e
t
t
i
n
g
 
a
 
s
u
m
 
o
f
 
7
 
w
h
e
n
 
t
w
o
 
d
i
c
e
 
a
r
e
 
r
o
l
l
e
d
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
/
6
"
,
 
"
1
/
1
2
"
,
 
"
5
/
3
6
"
,
 
"
7
/
3
6
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
0
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
F
a
v
o
r
a
b
l
e
 
o
u
t
c
o
m
e
s
:
 
(
1
,
6
)
,
(
2
,
5
)
,
(
3
,
4
)
,
(
4
,
3
)
,
(
5
,
2
)
,
(
6
,
1
)
 
=
 
6
.
 
T
o
t
a
l
 
=
 
3
6
.
 
P
 
=
 
6
/
3
6
 
=
 
1
/
6
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
n
u
m
-
5
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
n
u
m
e
r
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
s
i
m
p
l
e
-
i
n
t
e
r
e
s
t
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
F
i
n
d
 
S
I
 
o
n
 
R
s
.
 
5
0
0
0
 
a
t
 
8
%
 
p
.
a
.
 
f
o
r
 
2
 
y
e
a
r
s
.
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
6
0
0
"
,
 
"
7
0
0
"
,
 
"
8
0
0
"
,
 
"
9
0
0
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
I
 
=
 
P
R
T
/
1
0
0
 
=
 
(
5
0
0
0
 
×
 
8
 
×
 
2
)
/
1
0
0
 
=
 
8
0
0
.
"
,


 
 
}
,


 
 
/
/
 
T
C
S
 
N
Q
T
 
-
 
V
e
r
b
a
l


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
v
e
r
b
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
v
e
r
b
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
s
y
n
o
n
y
m
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
C
h
o
o
s
e
 
t
h
e
 
s
y
n
o
n
y
m
 
o
f
 
A
B
U
N
D
A
N
T
:
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
S
c
a
r
c
e
"
,
 
"
P
l
e
n
t
i
f
u
l
"
,
 
"
E
m
p
t
y
"
,
 
"
L
i
m
i
t
e
d
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
A
b
u
n
d
a
n
t
 
m
e
a
n
s
 
e
x
i
s
t
i
n
g
 
i
n
 
l
a
r
g
e
 
q
u
a
n
t
i
t
i
e
s
;
 
p
l
e
n
t
i
f
u
l
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
v
e
r
b
-
2
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
v
e
r
b
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
g
r
a
m
m
a
r
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
S
h
e
 
_
_
_
 
t
o
 
t
h
e
 
s
t
o
r
e
 
e
v
e
r
y
 
S
u
n
d
a
y
.
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
g
o
"
,
 
"
g
o
e
s
"
,
 
"
g
o
i
n
g
"
,
 
"
g
o
n
e
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
i
r
d
-
p
e
r
s
o
n
 
s
i
n
g
u
l
a
r
 
p
r
e
s
e
n
t
 
t
e
n
s
e
 
u
s
e
s
 
'
g
o
e
s
'
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
v
e
r
b
-
3
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
v
e
r
b
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
a
n
t
o
n
y
m
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
n
t
o
n
y
m
 
o
f
 
B
E
N
E
V
O
L
E
N
T
:
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
K
i
n
d
"
,
 
"
G
e
n
e
r
o
u
s
"
,
 
"
M
a
l
e
v
o
l
e
n
t
"
,
 
"
F
r
i
e
n
d
l
y
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
e
n
e
v
o
l
e
n
t
 
m
e
a
n
s
 
w
e
l
l
-
m
e
a
n
i
n
g
;
 
o
p
p
o
s
i
t
e
 
i
s
 
m
a
l
e
v
o
l
e
n
t
 
(
h
a
r
m
f
u
l
)
.
"
,


 
 
}
,


 
 
/
/
 
T
C
S
 
N
Q
T
 
-
 
R
e
a
s
o
n
i
n
g


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
r
e
a
s
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
s
e
r
i
e
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
F
i
n
d
 
n
e
x
t
:
 
2
,
 
6
,
 
1
2
,
 
2
0
,
 
3
0
,
 
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
4
0
"
,
 
"
4
2
"
,
 
"
4
4
"
,
 
"
4
6
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
i
f
f
e
r
e
n
c
e
s
:
 
4
,
 
6
,
 
8
,
 
1
0
,
 
1
2
.
 
S
o
 
n
e
x
t
 
i
s
 
3
0
+
1
2
 
=
 
4
2
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
r
e
a
s
-
2
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
c
o
d
i
n
g
-
d
e
c
o
d
i
n
g
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
C
A
T
 
=
 
2
4
 
(
C
=
3
,
 
A
=
1
,
 
T
=
2
0
;
 
s
u
m
×
.
.
.
 
a
c
t
u
a
l
l
y
 
3
+
1
+
2
0
=
2
4
)
,
 
t
h
e
n
 
D
O
G
 
=
 
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
2
4
"
,
 
"
2
6
"
,
 
"
2
7
"
,
 
"
3
0
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
=
4
,
 
O
=
1
5
,
 
G
=
7
.
 
S
u
m
 
=
 
4
+
1
5
+
7
 
=
 
2
6
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
r
e
a
s
-
3
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
b
l
o
o
d
-
r
e
l
a
t
i
o
n
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
i
s
 
B
'
s
 
s
i
s
t
e
r
.
 
C
 
i
s
 
B
'
s
 
m
o
t
h
e
r
.
 
D
 
i
s
 
C
'
s
 
f
a
t
h
e
r
.
 
H
o
w
 
i
s
 
D
 
r
e
l
a
t
e
d
 
t
o
 
A
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
F
a
t
h
e
r
"
,
 
"
G
r
a
n
d
f
a
t
h
e
r
"
,
 
"
U
n
c
l
e
"
,
 
"
B
r
o
t
h
e
r
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
 
i
s
 
C
'
s
 
f
a
t
h
e
r
,
 
C
 
i
s
 
A
'
s
 
m
o
t
h
e
r
,
 
s
o
 
D
 
i
s
 
A
'
s
 
m
a
t
e
r
n
a
l
 
g
r
a
n
d
f
a
t
h
e
r
.
"
,


 
 
}
,


 
 
/
/
 
T
C
S
 
N
Q
T
 
-
 
C
o
d
i
n
g


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
c
o
d
e
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
c
o
d
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
c
o
m
p
l
e
x
i
t
y
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
b
i
n
a
r
y
 
s
e
a
r
c
h
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
n
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
1
)
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
h
a
l
v
e
s
 
t
h
e
 
s
e
a
r
c
h
 
s
p
a
c
e
 
e
a
c
h
 
s
t
e
p
:
 
O
(
l
o
g
 
n
)
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
c
o
d
e
-
2
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
c
o
d
i
n
g
"
,


 
 
 
 
t
o
p
i
c
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


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
s
o
r
t
 
h
a
s
 
w
o
r
s
t
-
c
a
s
e
 
O
(
n
²
)
 
b
u
t
 
i
s
 
i
n
-
p
l
a
c
e
 
a
n
d
 
s
t
a
b
l
e
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
Q
u
i
c
k
 
s
o
r
t
"
,
 
"
M
e
r
g
e
 
s
o
r
t
"
,
 
"
I
n
s
e
r
t
i
o
n
 
s
o
r
t
"
,
 
"
H
e
a
p
 
s
o
r
t
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
I
n
s
e
r
t
i
o
n
 
s
o
r
t
 
i
s
 
i
n
-
p
l
a
c
e
,
 
s
t
a
b
l
e
,
 
O
(
n
²
)
 
w
o
r
s
t
,
 
O
(
n
)
 
b
e
s
t
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
c
s
-
c
o
d
e
-
3
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
t
c
s
-
n
q
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
c
o
d
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
d
a
t
a
-
s
t
r
u
c
t
u
r
e
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
u
s
e
s
 
L
I
F
O
 
o
r
d
e
r
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
Q
u
e
u
e
"
,
 
"
S
t
a
c
k
"
,
 
"
T
r
e
e
"
,
 
"
G
r
a
p
h
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
t
a
c
k
 
f
o
l
l
o
w
s
 
L
a
s
t
-
I
n
-
F
i
r
s
t
-
O
u
t
.
"
,


 
 
}
,


 
 
/
/
 
I
n
f
o
s
y
s
 
s
a
m
p
l
e
s


 
 
{


 
 
 
 
i
d
:
 
"
i
n
f
-
r
e
a
s
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
i
n
f
o
s
y
s
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
r
e
a
s
o
n
i
n
g
"
,


 
 
 
 
t
o
p
i
c
:
 
"
s
y
l
l
o
g
i
s
m
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
l
l
 
r
o
s
e
s
 
a
r
e
 
f
l
o
w
e
r
s
.
 
S
o
m
e
 
f
l
o
w
e
r
s
 
f
a
d
e
 
q
u
i
c
k
l
y
.
 
C
o
n
c
l
u
s
i
o
n
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
A
l
l
 
r
o
s
e
s
 
f
a
d
e
 
q
u
i
c
k
l
y
"
,
 
"
S
o
m
e
 
r
o
s
e
s
 
f
a
d
e
 
q
u
i
c
k
l
y
"
,
 
"
N
o
 
r
o
s
e
s
 
f
a
d
e
"
,
 
"
C
a
n
n
o
t
 
c
o
n
c
l
u
d
e
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
3
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
i
n
c
e
 
o
n
l
y
 
'
s
o
m
e
'
 
f
l
o
w
e
r
s
 
f
a
d
e
,
 
w
e
 
c
a
n
n
o
t
 
c
o
n
c
l
u
d
e
 
a
n
y
t
h
i
n
g
 
s
p
e
c
i
f
i
c
 
a
b
o
u
t
 
r
o
s
e
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
i
n
f
-
m
a
t
h
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
i
n
f
o
s
y
s
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
m
a
t
h
s
"
,


 
 
 
 
t
o
p
i
c
:
 
"
a
l
g
e
b
r
a
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
x
 
+
 
1
/
x
 
=
 
3
,
 
t
h
e
n
 
x
²
 
+
 
1
/
x
²
 
=
 
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
5
"
,
 
"
7
"
,
 
"
9
"
,
 
"
1
1
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
(
x
 
+
 
1
/
x
)
²
 
=
 
x
²
 
+
 
2
 
+
 
1
/
x
²
 
=
 
9
.
 
S
o
 
x
²
 
+
 
1
/
x
²
 
=
 
7
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
i
n
f
-
p
s
e
u
d
o
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
i
n
f
o
s
y
s
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
p
s
e
u
d
o
"
,


 
 
 
 
t
o
p
i
c
:
 
"
l
o
o
p
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
f
o
r
 
i
 
=
 
1
 
t
o
 
5
:
 
p
r
i
n
t
(
i
*
i
)
.
 
W
h
a
t
 
i
s
 
p
r
i
n
t
e
d
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
 
2
 
3
 
4
 
5
"
,
 
"
1
 
4
 
9
 
1
6
 
2
5
"
,
 
"
2
 
4
 
6
 
8
 
1
0
"
,
 
"
1
 
3
 
5
 
7
 
9
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
r
i
n
t
s
 
s
q
u
a
r
e
s
:
 
1
,
 
4
,
 
9
,
 
1
6
,
 
2
5
.
"
,


 
 
}
,


 
 
/
/
 
W
i
p
r
o


 
 
{


 
 
 
 
i
d
:
 
"
w
i
p
-
a
p
t
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
w
i
p
r
o
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
a
p
t
i
t
u
d
e
"
,


 
 
 
 
t
o
p
i
c
:
 
"
a
v
e
r
a
g
e
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
v
e
r
a
g
e
 
o
f
 
f
i
r
s
t
 
1
0
 
n
a
t
u
r
a
l
 
n
u
m
b
e
r
s
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
5
"
,
 
"
5
.
5
"
,
 
"
6
"
,
 
"
6
.
5
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
u
m
 
=
 
5
5
,
 
a
v
e
r
a
g
e
 
=
 
5
5
/
1
0
 
=
 
5
.
5
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
p
-
l
o
g
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
w
i
p
r
o
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
l
o
g
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
s
e
r
i
e
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
1
,
 
1
,
 
2
,
 
3
,
 
5
,
 
8
,
 
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
1
"
,
 
"
1
2
"
,
 
"
1
3
"
,
 
"
1
4
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
F
i
b
o
n
a
c
c
i
:
 
e
a
c
h
 
n
u
m
b
e
r
 
i
s
 
s
u
m
 
o
f
 
p
r
e
v
i
o
u
s
 
t
w
o
.
 
5
+
8
 
=
 
1
3
.
"
,


 
 
}
,


 
 
/
/
 
A
c
c
e
n
t
u
r
e


 
 
{


 
 
 
 
i
d
:
 
"
a
c
c
-
t
e
c
h
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
a
c
c
e
n
t
u
r
e
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
t
e
c
h
n
i
c
a
l
"
,


 
 
 
 
t
o
p
i
c
:
 
"
n
e
t
w
o
r
k
i
n
g
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
d
o
e
s
 
H
T
T
P
 
s
t
a
n
d
 
f
o
r
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
H
y
p
e
r
 
T
e
x
t
 
T
r
a
n
s
f
e
r
 
P
r
o
t
o
c
o
l
"
,
 
"
H
i
g
h
 
T
r
a
n
s
f
e
r
 
T
e
x
t
 
P
r
o
t
o
c
o
l
"
,
 
"
H
y
p
e
r
 
T
r
a
n
s
f
e
r
 
T
e
x
t
 
P
r
o
t
o
c
o
l
"
,
 
"
H
o
s
t
 
T
r
a
n
s
f
e
r
 
T
e
x
t
 
P
r
o
t
o
c
o
l
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
0
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
H
T
T
P
 
=
 
H
y
p
e
r
 
T
e
x
t
 
T
r
a
n
s
f
e
r
 
P
r
o
t
o
c
o
l
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
a
c
c
-
c
o
g
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
a
c
c
e
n
t
u
r
e
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
c
o
g
n
i
t
i
v
e
"
,


 
 
 
 
t
o
p
i
c
:
 
"
r
e
a
s
o
n
i
n
g
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
O
d
d
 
o
n
e
 
o
u
t
:
 
A
p
p
l
e
,
 
O
r
a
n
g
e
,
 
B
a
n
a
n
a
,
 
C
a
r
r
o
t
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
A
p
p
l
e
"
,
 
"
O
r
a
n
g
e
"
,
 
"
B
a
n
a
n
a
"
,
 
"
C
a
r
r
o
t
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
3
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
a
r
r
o
t
 
i
s
 
a
 
v
e
g
e
t
a
b
l
e
;
 
t
h
e
 
o
t
h
e
r
s
 
a
r
e
 
f
r
u
i
t
s
.
"
,


 
 
}
,


 
 
/
/
 
C
a
p
g
e
m
i
n
i


 
 
{


 
 
 
 
i
d
:
 
"
c
a
p
-
p
s
e
u
d
o
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
c
a
p
g
e
m
i
n
i
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
p
s
e
u
d
o
"
,


 
 
 
 
t
o
p
i
c
:
 
"
c
o
n
d
i
t
i
o
n
a
l
s
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
i
f
 
(
5
 
>
 
3
 
A
N
D
 
2
 
<
 
1
)
 
p
r
i
n
t
(
'
y
e
s
'
)
 
e
l
s
e
 
p
r
i
n
t
(
'
n
o
'
)
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
y
e
s
"
,
 
"
n
o
"
,
 
"
e
r
r
o
r
"
,
 
"
n
o
t
h
i
n
g
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
2
 
<
 
1
 
i
s
 
f
a
l
s
e
,
 
s
o
 
t
h
e
 
A
N
D
 
i
s
 
f
a
l
s
e
.
 
O
u
t
p
u
t
:
 
n
o
.
"
,


 
 
}
,


 
 
/
/
 
C
o
g
n
i
z
a
n
t


 
 
{


 
 
 
 
i
d
:
 
"
c
o
g
-
q
u
a
n
t
-
1
"
,


 
 
 
 
e
x
a
m
I
d
:
 
"
c
o
g
n
i
z
a
n
t
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
q
u
a
n
t
"
,


 
 
 
 
t
o
p
i
c
:
 
"
a
r
i
t
h
m
e
t
i
c
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
L
C
M
 
o
f
 
1
2
 
a
n
d
 
1
8
?
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
6
"
,
 
"
2
4
"
,
 
"
3
6
"
,
 
"
7
2
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
1
2
 
=
 
2
²
·
3
,
 
1
8
 
=
 
2
·
3
²
.
 
L
C
M
 
=
 
2
²
·
3
²
 
=
 
3
6
.
"
,


 
 
}
,


]
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
E
x
a
m
(
i
d
:
 
s
t
r
i
n
g
)
 
{


 
 
r
e
t
u
r
n
 
E
X
A
M
S
.
f
i
n
d
(
(
e
)
 
=
>
 
e
.
i
d
 
=
=
=
 
i
d
)
;


}


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
S
e
c
t
i
o
n
(
e
x
a
m
I
d
:
 
s
t
r
i
n
g
,
 
s
e
c
t
i
o
n
I
d
:
 
s
t
r
i
n
g
)
 
{


 
 
r
e
t
u
r
n
 
Q
U
E
S
T
I
O
N
S
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
.
e
x
a
m
I
d
 
=
=
=
 
e
x
a
m
I
d
 
&
&
 
q
.
s
e
c
t
i
o
n
I
d
 
=
=
=
 
s
e
c
t
i
o
n
I
d
)
;


}


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
E
x
a
m
(
e
x
a
m
I
d
:
 
s
t
r
i
n
g
)
 
{


 
 
r
e
t
u
r
n
 
Q
U
E
S
T
I
O
N
S
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
.
e
x
a
m
I
d
 
=
=
=
 
e
x
a
m
I
d
)
;


}


