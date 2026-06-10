
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
M
e
m
o
 
}
 
f
r
o
m
 
"
r
e
a
c
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
A
r
r
o
w
L
e
f
t
,
 
C
h
e
v
r
o
n
D
o
w
n
,
 
S
e
a
r
c
h
,
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
C
o
d
e
2
,


 
 
Z
a
p
,
 
F
l
a
m
e
,
 
S
h
i
e
l
d
,
 
C
l
o
c
k
,
 
L
a
y
e
r
s
,
 
G
i
t
h
u
b
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
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
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




/
/
 
─
─
─
 
T
y
p
e
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


t
y
p
e
 
D
i
f
f
i
c
u
l
t
y
 
=
 
"
B
e
g
i
n
n
e
r
"
 
|
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
 
|
 
"
A
d
v
a
n
c
e
d
"
;




i
n
t
e
r
f
a
c
e
 
P
r
o
j
e
c
t
I
d
e
a
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
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
e
s
c
r
i
p
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
 
D
i
f
f
i
c
u
l
t
y
;


 
 
e
c
o
s
y
s
t
e
m
:
 
s
t
r
i
n
g
;


 
 
t
e
c
h
S
t
a
c
k
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


 
 
f
e
a
t
u
r
e
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


 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
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


 
 
e
s
t
i
m
a
t
e
d
T
i
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


 
 
r
e
s
o
u
r
c
e
s
:
 
{
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;
 
u
r
l
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
t
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


 
 
g
i
t
h
u
b
U
r
l
?
:
 
s
t
r
i
n
g
;


}




/
/
 
─
─
─
 
D
a
t
a
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


c
o
n
s
t
 
D
I
F
F
I
C
U
L
T
Y
_
C
O
N
F
I
G
:
 
R
e
c
o
r
d
<
D
i
f
f
i
c
u
l
t
y
,
 
{
 
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
 
b
g
:
 
s
t
r
i
n
g
;
 
i
c
o
n
:
 
t
y
p
e
o
f
 
Z
a
p
 
}
>
 
=
 
{


 
 
B
e
g
i
n
n
e
r
:
 
{
 
c
o
l
o
r
:
 
"
t
e
x
t
-
e
m
e
r
a
l
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
"
,
 
b
g
:
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
 
d
a
r
k
:
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
3
0
"
,
 
i
c
o
n
:
 
Z
a
p
 
}
,


 
 
I
n
t
e
r
m
e
d
i
a
t
e
:
 
{
 
c
o
l
o
r
:
 
"
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
,
 
b
g
:
 
"
b
g
-
a
m
b
e
r
-
5
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
3
0
"
,
 
i
c
o
n
:
 
F
l
a
m
e
 
}
,


 
 
A
d
v
a
n
c
e
d
:
 
{
 
c
o
l
o
r
:
 
"
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
,
 
b
g
:
 
"
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
"
,
 
i
c
o
n
:
 
S
h
i
e
l
d
 
}
,


}
;




c
o
n
s
t
 
P
R
O
J
E
C
T
S
:
 
P
r
o
j
e
c
t
I
d
e
a
[
]
 
=
 
[


 
 
/
/
 
─
─
 
B
e
g
i
n
n
e
r
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
{


 
 
 
 
i
d
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
E
R
C
-
2
0
 
T
o
k
e
n
 
w
i
t
h
 
F
a
u
c
e
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
C
r
e
a
t
e
 
y
o
u
r
 
o
w
n
 
t
o
k
e
n
 
a
n
d
 
b
u
i
l
d
 
a
 
f
a
u
c
e
t
 
d
A
p
p
 
t
h
a
t
 
d
i
s
t
r
i
b
u
t
e
s
 
f
r
e
e
 
t
o
k
e
n
s
 
t
o
 
u
s
e
r
s
 
o
n
 
a
 
t
e
s
t
n
e
t
.
 
C
o
v
e
r
s
 
t
h
e
 
f
u
l
l
 
t
o
k
e
n
 
l
i
f
e
c
y
c
l
e
 
f
r
o
m
 
c
r
e
a
t
i
o
n
 
t
o
 
d
i
s
t
r
i
b
u
t
i
o
n
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
D
e
p
l
o
y
 
a
n
 
E
R
C
-
2
0
 
t
o
k
e
n
 
u
s
i
n
g
 
O
p
e
n
Z
e
p
p
e
l
i
n
"
,


 
 
 
 
 
 
"
B
u
i
l
d
 
a
 
f
a
u
c
e
t
 
c
o
n
t
r
a
c
t
 
t
h
a
t
 
d
r
i
p
s
 
t
o
k
e
n
s
 
e
v
e
r
y
 
2
4
 
h
o
u
r
s
 
p
e
r
 
a
d
d
r
e
s
s
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
 
w
i
t
h
 
w
a
l
l
e
t
 
c
o
n
n
e
c
t
i
o
n
 
a
n
d
 
c
l
a
i
m
 
b
u
t
t
o
n
"
,


 
 
 
 
 
 
"
D
i
s
p
l
a
y
 
u
s
e
r
'
s
 
t
o
k
e
n
 
b
a
l
a
n
c
e
 
i
n
 
r
e
a
l
-
t
i
m
e
"
,


 
 
 
 
 
 
"
R
a
t
e
-
l
i
m
i
t
i
n
g
 
t
o
 
p
r
e
v
e
n
t
 
a
b
u
s
e
 
(
o
n
e
 
c
l
a
i
m
 
p
e
r
 
d
a
y
 
p
e
r
 
a
d
d
r
e
s
s
)
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
2
0
 
s
t
a
n
d
a
r
d
 
a
n
d
 
t
o
k
e
n
 
m
e
c
h
a
n
i
c
s
"
,


 
 
 
 
 
 
"
M
a
p
p
i
n
g
-
b
a
s
e
d
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
s
 
i
n
 
S
o
l
i
d
i
t
y
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
-
t
o
-
c
o
n
t
r
a
c
t
 
i
n
t
e
r
a
c
t
i
o
n
 
w
i
t
h
 
e
t
h
e
r
s
.
j
s
"
,


 
 
 
 
 
 
"
B
l
o
c
k
 
t
i
m
e
s
t
a
m
p
 
u
s
a
g
e
 
f
o
r
 
t
i
m
e
-
b
a
s
e
d
 
l
o
g
i
c
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
-
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
E
R
C
-
2
0
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
e
n
z
e
p
p
e
l
i
n
.
c
o
m
/
c
o
n
t
r
a
c
t
s
/
e
r
c
2
0
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
H
a
r
d
h
a
t
 
T
u
t
o
r
i
a
l
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
h
a
r
d
h
a
t
.
o
r
g
/
t
u
t
o
r
i
a
l
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
E
R
C
-
2
0
"
,
 
"
T
o
k
e
n
"
,
 
"
F
a
u
c
e
t
"
,
 
"
B
e
g
i
n
n
e
r
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
O
p
e
n
Z
e
p
p
e
l
i
n
/
o
p
e
n
z
e
p
p
e
l
i
n
-
c
o
n
t
r
a
c
t
s
/
t
r
e
e
/
m
a
s
t
e
r
/
c
o
n
t
r
a
c
t
s
/
t
o
k
e
n
/
E
R
C
2
0
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
N
F
T
 
M
i
n
t
i
n
g
 
P
a
g
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
c
o
m
p
l
e
t
e
 
N
F
T
 
c
o
l
l
e
c
t
i
o
n
 
w
i
t
h
 
m
e
t
a
d
a
t
a
 
o
n
 
I
P
F
S
 
a
n
d
 
a
 
m
i
n
t
i
n
g
 
p
a
g
e
.
 
U
s
e
r
s
 
c
o
n
n
e
c
t
 
t
h
e
i
r
 
w
a
l
l
e
t
,
 
p
a
y
 
a
 
m
i
n
t
 
p
r
i
c
e
,
 
a
n
d
 
r
e
c
e
i
v
e
 
a
 
u
n
i
q
u
e
 
N
F
T
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
I
P
F
S
/
P
i
n
a
t
a
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
7
2
1
 
c
o
n
t
r
a
c
t
 
w
i
t
h
 
c
o
n
f
i
g
u
r
a
b
l
e
 
s
u
p
p
l
y
 
c
a
p
 
a
n
d
 
m
i
n
t
 
p
r
i
c
e
"
,


 
 
 
 
 
 
"
U
p
l
o
a
d
 
a
r
t
 
a
n
d
 
m
e
t
a
d
a
t
a
 
t
o
 
I
P
F
S
 
v
i
a
 
P
i
n
a
t
a
"
,


 
 
 
 
 
 
"
M
i
n
t
i
n
g
 
p
a
g
e
 
w
i
t
h
 
w
a
l
l
e
t
 
c
o
n
n
e
c
t
i
o
n
 
a
n
d
 
t
r
a
n
s
a
c
t
i
o
n
 
s
t
a
t
u
s
"
,


 
 
 
 
 
 
"
G
a
l
l
e
r
y
 
v
i
e
w
 
s
h
o
w
i
n
g
 
a
l
l
 
m
i
n
t
e
d
 
N
F
T
s
"
,


 
 
 
 
 
 
"
O
w
n
e
r
-
o
n
l
y
 
w
i
t
h
d
r
a
w
 
f
u
n
c
t
i
o
n
 
f
o
r
 
c
o
l
l
e
c
t
e
d
 
E
T
H
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
7
2
1
 
s
t
a
n
d
a
r
d
 
a
n
d
 
t
o
k
e
n
 
U
R
I
s
"
,


 
 
 
 
 
 
"
I
P
F
S
 
f
o
r
 
d
e
c
e
n
t
r
a
l
i
z
e
d
 
f
i
l
e
 
s
t
o
r
a
g
e
"
,


 
 
 
 
 
 
"
P
a
y
a
b
l
e
 
f
u
n
c
t
i
o
n
s
 
a
n
d
 
E
T
H
 
h
a
n
d
l
i
n
g
 
i
n
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
S
u
p
p
l
y
 
m
a
n
a
g
e
m
e
n
t
 
a
n
d
 
m
i
n
t
i
n
g
 
l
i
m
i
t
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
-
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
E
R
C
-
7
2
1
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
e
n
z
e
p
p
e
l
i
n
.
c
o
m
/
c
o
n
t
r
a
c
t
s
/
e
r
c
7
2
1
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
i
n
a
t
a
 
I
P
F
S
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
p
i
n
a
t
a
.
c
l
o
u
d
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
N
F
T
"
,
 
"
E
R
C
-
7
2
1
"
,
 
"
I
P
F
S
"
,
 
"
M
i
n
t
i
n
g
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
c
a
f
f
o
l
d
-
e
t
h
/
s
c
a
f
f
o
l
d
-
e
t
h
-
2
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
-
C
h
a
i
n
 
V
o
t
i
n
g
 
S
y
s
t
e
m
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
d
e
c
e
n
t
r
a
l
i
z
e
d
 
v
o
t
i
n
g
 
c
o
n
t
r
a
c
t
 
w
h
e
r
e
 
t
h
e
 
c
o
n
t
r
a
c
t
 
c
r
e
a
t
o
r
 
d
e
f
i
n
e
s
 
p
r
o
p
o
s
a
l
s
 
a
n
d
 
a
n
y
 
t
o
k
e
n
 
h
o
l
d
e
r
 
c
a
n
 
c
a
s
t
 
o
n
e
 
v
o
t
e
 
p
e
r
 
p
r
o
p
o
s
a
l
.
 
R
e
s
u
l
t
s
 
a
r
e
 
t
r
a
n
s
p
a
r
e
n
t
 
a
n
d
 
i
m
m
u
t
a
b
l
e
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
p
r
o
p
o
s
a
l
s
 
w
i
t
h
 
t
i
t
l
e
 
a
n
d
 
d
e
s
c
r
i
p
t
i
o
n
"
,


 
 
 
 
 
 
"
O
n
e
 
v
o
t
e
 
p
e
r
 
a
d
d
r
e
s
s
 
p
e
r
 
p
r
o
p
o
s
a
l
 
(
e
n
f
o
r
c
e
d
 
o
n
-
c
h
a
i
n
)
"
,


 
 
 
 
 
 
"
R
e
a
l
-
t
i
m
e
 
v
o
t
e
 
c
o
u
n
t
s
 
d
i
s
p
l
a
y
e
d
 
o
n
 
f
r
o
n
t
e
n
d
"
,


 
 
 
 
 
 
"
V
o
t
i
n
g
 
d
e
a
d
l
i
n
e
 
p
e
r
 
p
r
o
p
o
s
a
l
 
u
s
i
n
g
 
b
l
o
c
k
 
t
i
m
e
s
t
a
m
p
s
"
,


 
 
 
 
 
 
"
E
v
e
n
t
 
e
m
i
s
s
i
o
n
 
f
o
r
 
v
o
t
e
 
t
r
a
c
k
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
M
a
p
p
i
n
g
 
a
n
d
 
s
t
r
u
c
t
 
p
a
t
t
e
r
n
s
 
i
n
 
S
o
l
i
d
i
t
y
"
,


 
 
 
 
 
 
"
A
c
c
e
s
s
 
c
o
n
t
r
o
l
 
w
i
t
h
 
m
s
g
.
s
e
n
d
e
r
"
,


 
 
 
 
 
 
"
E
v
e
n
t
 
e
m
i
s
s
i
o
n
 
a
n
d
 
f
r
o
n
t
e
n
d
 
e
v
e
n
t
 
l
i
s
t
e
n
i
n
g
"
,


 
 
 
 
 
 
"
T
i
m
e
-
b
a
s
e
d
 
c
o
n
t
r
a
c
t
 
l
o
g
i
c
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
 
w
e
e
k
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
V
o
t
i
n
g
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
/
a
p
p
/
s
i
m
p
l
e
-
v
o
t
e
/
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
V
o
t
i
n
g
"
,
 
"
G
o
v
e
r
n
a
n
c
e
"
,
 
"
D
A
O
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
g
i
t
h
u
b
.
i
o
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
T
i
p
 
J
a
r
 
d
A
p
p
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
s
i
m
p
l
e
 
d
A
p
p
 
w
h
e
r
e
 
u
s
e
r
s
 
c
a
n
 
s
e
n
d
 
E
T
H
 
t
i
p
s
 
t
o
 
a
 
c
r
e
a
t
o
r
'
s
 
a
d
d
r
e
s
s
 
w
i
t
h
 
a
 
m
e
s
s
a
g
e
.
 
T
h
e
 
c
r
e
a
t
o
r
 
c
a
n
 
w
i
t
h
d
r
a
w
 
a
c
c
u
m
u
l
a
t
e
d
 
t
i
p
s
 
a
t
 
a
n
y
 
t
i
m
e
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
A
c
c
e
p
t
 
E
T
H
 
t
i
p
s
 
w
i
t
h
 
a
n
 
o
n
-
c
h
a
i
n
 
m
e
s
s
a
g
e
"
,


 
 
 
 
 
 
"
D
i
s
p
l
a
y
 
a
l
l
 
t
i
p
s
 
w
i
t
h
 
s
e
n
d
e
r
 
a
d
d
r
e
s
s
 
a
n
d
 
m
e
s
s
a
g
e
"
,


 
 
 
 
 
 
"
O
w
n
e
r
-
o
n
l
y
 
w
i
t
h
d
r
a
w
a
l
 
f
u
n
c
t
i
o
n
"
,


 
 
 
 
 
 
"
T
o
t
a
l
 
t
i
p
s
 
c
o
u
n
t
e
r
 
o
n
 
t
h
e
 
f
r
o
n
t
e
n
d
"
,


 
 
 
 
 
 
"
R
e
s
p
o
n
s
i
v
e
 
U
I
 
w
i
t
h
 
t
i
p
 
h
i
s
t
o
r
y
 
f
e
e
d
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
P
a
y
a
b
l
e
 
f
u
n
c
t
i
o
n
s
 
a
n
d
 
r
e
c
e
i
v
i
n
g
 
E
T
H
"
,


 
 
 
 
 
 
"
S
t
r
u
c
t
 
a
r
r
a
y
s
 
f
o
r
 
o
n
-
c
h
a
i
n
 
d
a
t
a
 
s
t
o
r
a
g
e
"
,


 
 
 
 
 
 
"
W
i
t
h
d
r
a
w
a
l
 
p
a
t
t
e
r
n
s
 
(
p
u
l
l
 
o
v
e
r
 
p
u
s
h
)
"
,


 
 
 
 
 
 
"
E
v
e
n
t
-
d
r
i
v
e
n
 
f
r
o
n
t
e
n
d
 
u
p
d
a
t
e
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
5
 
d
a
y
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
S
e
n
d
i
n
g
 
E
T
H
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
/
s
e
n
d
i
n
g
-
e
t
h
e
r
/
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
P
a
y
m
e
n
t
s
"
,
 
"
E
T
H
"
,
 
"
S
o
c
i
a
l
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
P
a
t
r
i
c
k
A
l
p
w
o
r
w
o
r
t
h
s
/
h
a
r
d
h
a
t
-
f
u
n
d
-
m
e
-
f
c
c
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
-
C
h
a
i
n
 
T
o
d
o
 
L
i
s
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
S
t
o
r
e
 
a
n
d
 
m
a
n
a
g
e
 
a
 
p
e
r
s
o
n
a
l
 
t
o
d
o
 
l
i
s
t
 
e
n
t
i
r
e
l
y
 
o
n
-
c
h
a
i
n
.
 
E
a
c
h
 
u
s
e
r
 
h
a
s
 
t
h
e
i
r
 
o
w
n
 
l
i
s
t
,
 
a
n
d
 
t
a
s
k
s
 
c
a
n
 
b
e
 
a
d
d
e
d
,
 
t
o
g
g
l
e
d
,
 
a
n
d
 
d
e
l
e
t
e
d
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
v
i
e
m
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
A
d
d
,
 
t
o
g
g
l
e
,
 
a
n
d
 
d
e
l
e
t
e
 
t
a
s
k
s
 
p
e
r
 
u
s
e
r
 
a
d
d
r
e
s
s
"
,


 
 
 
 
 
 
"
T
a
s
k
s
 
s
t
o
r
e
d
 
a
s
 
s
t
r
u
c
t
s
 
w
i
t
h
 
t
i
t
l
e
,
 
c
o
m
p
l
e
t
e
d
 
s
t
a
t
u
s
,
 
a
n
d
 
t
i
m
e
s
t
a
m
p
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
 
C
R
U
D
 
i
n
t
e
r
f
a
c
e
 
s
y
n
c
e
d
 
w
i
t
h
 
c
o
n
t
r
a
c
t
 
s
t
a
t
e
"
,


 
 
 
 
 
 
"
G
a
s
-
e
f
f
i
c
i
e
n
t
 
s
t
o
r
a
g
e
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
F
i
l
t
e
r
 
b
y
 
c
o
m
p
l
e
t
e
d
/
p
e
n
d
i
n
g
 
t
a
s
k
s
 
o
n
 
f
r
o
n
t
e
n
d
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
C
R
U
D
 
o
p
e
r
a
t
i
o
n
s
 
i
n
 
S
o
l
i
d
i
t
y
"
,


 
 
 
 
 
 
"
P
e
r
-
u
s
e
r
 
d
a
t
a
 
i
s
o
l
a
t
i
o
n
 
w
i
t
h
 
m
a
p
p
i
n
g
s
"
,


 
 
 
 
 
 
"
G
a
s
 
o
p
t
i
m
i
z
a
t
i
o
n
 
f
o
r
 
s
t
o
r
a
g
e
 
o
p
e
r
a
t
i
o
n
s
"
,


 
 
 
 
 
 
"
S
t
a
t
e
 
s
y
n
c
h
r
o
n
i
z
a
t
i
o
n
 
b
e
t
w
e
e
n
 
c
o
n
t
r
a
c
t
 
a
n
d
 
U
I
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
5
 
d
a
y
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
F
o
u
n
d
r
y
 
B
o
o
k
 
-
 
G
e
t
t
i
n
g
 
S
t
a
r
t
e
d
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
b
o
o
k
.
g
e
t
f
o
u
n
d
r
y
.
s
h
/
g
e
t
t
i
n
g
-
s
t
a
r
t
e
d
/
i
n
s
t
a
l
l
a
t
i
o
n
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
C
R
U
D
"
,
 
"
S
t
o
r
a
g
e
"
,
 
"
U
t
i
l
i
t
y
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
f
o
u
n
d
r
y
-
r
s
/
f
o
u
n
d
r
y
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
M
u
l
t
i
-
S
i
g
n
a
t
u
r
e
 
W
a
l
l
e
t
 
(
B
a
s
i
c
)
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
w
a
l
l
e
t
 
t
h
a
t
 
r
e
q
u
i
r
e
s
 
m
u
l
t
i
p
l
e
 
o
w
n
e
r
s
 
t
o
 
a
p
p
r
o
v
e
 
a
 
t
r
a
n
s
a
c
t
i
o
n
 
b
e
f
o
r
e
 
i
t
 
e
x
e
c
u
t
e
s
.
 
T
h
e
 
s
i
m
p
l
e
s
t
 
v
e
r
s
i
o
n
 
o
f
 
t
h
e
 
m
u
l
t
i
-
s
i
g
 
p
a
t
t
e
r
n
 
u
s
e
d
 
b
y
 
G
n
o
s
i
s
 
S
a
f
e
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
S
e
t
 
o
w
n
e
r
s
 
a
n
d
 
r
e
q
u
i
r
e
d
 
a
p
p
r
o
v
a
l
 
c
o
u
n
t
 
a
t
 
d
e
p
l
o
y
m
e
n
t
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
t
r
a
n
s
a
c
t
i
o
n
 
p
r
o
p
o
s
a
l
s
 
(
d
e
s
t
i
n
a
t
i
o
n
,
 
v
a
l
u
e
,
 
d
a
t
a
)
"
,


 
 
 
 
 
 
"
O
w
n
e
r
s
 
a
p
p
r
o
v
e
 
o
r
 
r
e
v
o
k
e
 
a
p
p
r
o
v
a
l
"
,


 
 
 
 
 
 
"
E
x
e
c
u
t
e
 
w
h
e
n
 
a
p
p
r
o
v
a
l
 
t
h
r
e
s
h
o
l
d
 
i
s
 
m
e
t
"
,


 
 
 
 
 
 
"
V
i
e
w
 
p
e
n
d
i
n
g
 
a
n
d
 
e
x
e
c
u
t
e
d
 
t
r
a
n
s
a
c
t
i
o
n
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
M
u
l
t
i
-
p
a
r
t
y
 
a
u
t
h
o
r
i
z
a
t
i
o
n
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
A
r
r
a
y
 
a
n
d
 
m
a
p
p
i
n
g
 
c
o
m
b
i
n
a
t
i
o
n
s
 
f
o
r
 
a
c
c
e
s
s
 
c
o
n
t
r
o
l
"
,


 
 
 
 
 
 
"
L
o
w
-
l
e
v
e
l
 
c
a
l
l
 
e
x
e
c
u
t
i
o
n
"
,


 
 
 
 
 
 
"
S
t
a
t
e
 
m
a
c
h
i
n
e
 
p
a
t
t
e
r
n
s
 
i
n
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
-
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
M
u
l
t
i
-
S
i
g
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
/
a
p
p
/
m
u
l
t
i
-
s
i
g
-
w
a
l
l
e
t
/
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
a
f
e
 
(
G
n
o
s
i
s
)
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
s
a
f
e
.
g
l
o
b
a
l
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
M
u
l
t
i
-
s
i
g
"
,
 
"
S
e
c
u
r
i
t
y
"
,
 
"
W
a
l
l
e
t
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
a
f
e
-
g
l
o
b
a
l
/
s
a
f
e
-
s
m
a
r
t
-
a
c
c
o
u
n
t
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
T
o
k
e
n
 
A
i
r
d
r
o
p
 
C
o
n
t
r
a
c
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
c
o
n
t
r
a
c
t
 
t
h
a
t
 
d
i
s
t
r
i
b
u
t
e
s
 
E
R
C
-
2
0
 
t
o
k
e
n
s
 
t
o
 
a
 
l
i
s
t
 
o
f
 
a
d
d
r
e
s
s
e
s
 
i
n
 
a
 
s
i
n
g
l
e
 
t
r
a
n
s
a
c
t
i
o
n
 
u
s
i
n
g
 
a
 
M
e
r
k
l
e
 
t
r
e
e
 
f
o
r
 
g
a
s
-
e
f
f
i
c
i
e
n
t
 
p
r
o
o
f
 
v
e
r
i
f
i
c
a
t
i
o
n
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
m
e
r
k
l
e
t
r
e
e
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
G
e
n
e
r
a
t
e
 
M
e
r
k
l
e
 
t
r
e
e
 
f
r
o
m
 
l
i
s
t
 
o
f
 
e
l
i
g
i
b
l
e
 
a
d
d
r
e
s
s
e
s
 
a
n
d
 
a
m
o
u
n
t
s
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
M
e
r
k
l
e
 
p
r
o
o
f
 
v
e
r
i
f
i
c
a
t
i
o
n
 
f
o
r
 
c
l
a
i
m
s
"
,


 
 
 
 
 
 
"
P
r
e
v
e
n
t
 
d
o
u
b
l
e
-
c
l
a
i
m
i
n
g
 
w
i
t
h
 
a
 
b
i
t
m
a
p
 
o
r
 
m
a
p
p
i
n
g
"
,


 
 
 
 
 
 
"
C
l
a
i
m
 
p
a
g
e
 
w
h
e
r
e
 
u
s
e
r
s
 
c
o
n
n
e
c
t
 
w
a
l
l
e
t
 
a
n
d
 
c
l
a
i
m
 
t
h
e
i
r
 
a
l
l
o
c
a
t
i
o
n
"
,


 
 
 
 
 
 
"
A
d
m
i
n
 
f
u
n
c
t
i
o
n
 
t
o
 
s
e
t
 
t
h
e
 
M
e
r
k
l
e
 
r
o
o
t
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
M
e
r
k
l
e
 
t
r
e
e
 
c
o
n
s
t
r
u
c
t
i
o
n
 
a
n
d
 
v
e
r
i
f
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
"
G
a
s
-
e
f
f
i
c
i
e
n
t
 
a
i
r
d
r
o
p
 
d
i
s
t
r
i
b
u
t
i
o
n
"
,


 
 
 
 
 
 
"
C
r
y
p
t
o
g
r
a
p
h
i
c
 
p
r
o
o
f
s
 
i
n
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
O
f
f
-
c
h
a
i
n
 
d
a
t
a
 
w
i
t
h
 
o
n
-
c
h
a
i
n
 
v
e
r
i
f
i
c
a
t
i
o
n
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
-
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
M
e
r
k
l
e
P
r
o
o
f
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
e
n
z
e
p
p
e
l
i
n
.
c
o
m
/
c
o
n
t
r
a
c
t
s
/
u
t
i
l
i
t
i
e
s
#
M
e
r
k
l
e
P
r
o
o
f
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
A
i
r
d
r
o
p
"
,
 
"
M
e
r
k
l
e
"
,
 
"
D
i
s
t
r
i
b
u
t
i
o
n
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
U
n
i
s
w
a
p
/
m
e
r
k
l
e
-
d
i
s
t
r
i
b
u
t
o
r
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
E
R
C
-
4
6
2
6
 
T
o
k
e
n
i
z
e
d
 
V
a
u
l
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
s
t
a
n
d
a
r
d
 
y
i
e
l
d
-
b
e
a
r
i
n
g
 
v
a
u
l
t
 
t
h
a
t
 
a
c
c
e
p
t
s
 
d
e
p
o
s
i
t
s
,
 
i
n
v
e
s
t
s
 
i
n
 
a
 
s
t
r
a
t
e
g
y
,
 
a
n
d
 
i
s
s
u
e
s
 
s
h
a
r
e
s
 
p
r
o
p
o
r
t
i
o
n
a
l
 
t
o
 
t
h
e
 
d
e
p
o
s
i
t
o
r
'
s
 
c
o
n
t
r
i
b
u
t
i
o
n
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
I
m
p
l
e
m
e
n
t
 
t
h
e
 
f
u
l
l
 
E
R
C
-
4
6
2
6
 
i
n
t
e
r
f
a
c
e
 
f
o
r
 
d
e
p
o
s
i
t
/
w
i
t
h
d
r
a
w
/
m
i
n
t
/
r
e
d
e
e
m
"
,


 
 
 
 
 
 
"
S
h
a
r
e
 
p
r
i
c
e
 
c
a
l
c
u
l
a
t
i
o
n
 
b
a
s
e
d
 
o
n
 
t
o
t
a
l
 
a
s
s
e
t
s
 
a
n
d
 
t
o
t
a
l
 
s
u
p
p
l
y
"
,


 
 
 
 
 
 
"
S
i
m
p
l
e
 
m
o
c
k
 
y
i
e
l
d
 
s
t
r
a
t
e
g
y
 
(
e
.
g
.
,
 
f
i
x
e
d
 
5
%
 
A
P
Y
 
p
e
r
 
b
l
o
c
k
)
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
 
s
h
o
w
i
n
g
 
v
a
u
l
t
 
T
V
L
,
 
s
h
a
r
e
 
p
r
i
c
e
,
 
a
n
d
 
u
s
e
r
 
b
a
l
a
n
c
e
"
,


 
 
 
 
 
 
"
P
r
e
v
i
e
w
 
f
u
n
c
t
i
o
n
s
 
f
o
r
 
e
s
t
i
m
a
t
i
n
g
 
d
e
p
o
s
i
t
/
w
i
t
h
d
r
a
w
a
l
 
a
m
o
u
n
t
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
4
6
2
6
 
t
o
k
e
n
i
z
e
d
 
v
a
u
l
t
 
s
t
a
n
d
a
r
d
"
,


 
 
 
 
 
 
"
S
h
a
r
e
-
b
a
s
e
d
 
a
c
c
o
u
n
t
i
n
g
 
f
o
r
 
D
e
F
i
"
,


 
 
 
 
 
 
"
R
o
u
n
d
i
n
g
 
a
n
d
 
p
r
e
c
i
s
i
o
n
 
i
n
 
f
i
n
a
n
c
i
a
l
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
C
o
m
p
o
s
a
b
l
e
 
D
e
F
i
 
b
u
i
l
d
i
n
g
 
b
l
o
c
k
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
 
w
e
e
k
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
I
P
-
4
6
2
6
 
S
p
e
c
i
f
i
c
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
i
p
s
.
e
t
h
e
r
e
u
m
.
o
r
g
/
E
I
P
S
/
e
i
p
-
4
6
2
6
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
m
a
t
e
 
E
R
C
-
4
6
2
6
 
I
m
p
l
e
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
t
r
a
n
s
m
i
s
s
i
o
n
s
1
1
/
s
o
l
m
a
t
e
/
b
l
o
b
/
m
a
i
n
/
s
r
c
/
t
o
k
e
n
s
/
E
R
C
4
6
2
6
.
s
o
l
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
E
R
C
-
4
6
2
6
"
,
 
"
V
a
u
l
t
"
,
 
"
Y
i
e
l
d
"
,
 
"
D
e
F
i
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
t
r
a
n
s
m
i
s
s
i
o
n
s
1
1
/
s
o
l
m
a
t
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
9
,


 
 
 
 
t
i
t
l
e
:
 
"
E
s
c
r
o
w
 
C
o
n
t
r
a
c
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
t
r
u
s
t
l
e
s
s
 
e
s
c
r
o
w
 
t
h
a
t
 
h
o
l
d
s
 
f
u
n
d
s
 
u
n
t
i
l
 
b
o
t
h
 
b
u
y
e
r
 
a
n
d
 
s
e
l
l
e
r
 
c
o
n
f
i
r
m
,
 
w
i
t
h
 
d
i
s
p
u
t
e
 
r
e
s
o
l
u
t
i
o
n
 
t
h
r
o
u
g
h
 
a
 
n
e
u
t
r
a
l
 
a
r
b
i
t
e
r
 
a
n
d
 
a
u
t
o
m
a
t
i
c
 
t
i
m
e
o
u
t
 
r
e
f
u
n
d
s
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
B
u
y
e
r
 
d
e
p
o
s
i
t
s
 
E
T
H
 
o
r
 
E
R
C
-
2
0
 
t
o
k
e
n
s
 
i
n
t
o
 
e
s
c
r
o
w
"
,


 
 
 
 
 
 
"
S
e
l
l
e
r
 
c
o
n
f
i
r
m
s
 
d
e
l
i
v
e
r
y
,
 
t
r
i
g
g
e
r
i
n
g
 
r
e
l
e
a
s
e
 
o
f
 
f
u
n
d
s
"
,


 
 
 
 
 
 
"
D
i
s
p
u
t
e
 
m
e
c
h
a
n
i
s
m
 
w
i
t
h
 
a
r
b
i
t
e
r
 
v
o
t
i
n
g
"
,


 
 
 
 
 
 
"
A
u
t
o
-
r
e
f
u
n
d
 
i
f
 
s
e
l
l
e
r
 
d
o
e
s
n
'
t
 
c
o
n
f
i
r
m
 
w
i
t
h
i
n
 
d
e
a
d
l
i
n
e
"
,


 
 
 
 
 
 
"
E
s
c
r
o
w
 
s
t
a
t
u
s
 
t
r
a
c
k
i
n
g
 
(
C
r
e
a
t
e
d
,
 
F
u
n
d
e
d
,
 
D
e
l
i
v
e
r
e
d
,
 
D
i
s
p
u
t
e
d
,
 
R
e
s
o
l
v
e
d
)
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
S
t
a
t
e
 
m
a
c
h
i
n
e
 
d
e
s
i
g
n
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
T
h
r
e
e
-
p
a
r
t
y
 
i
n
t
e
r
a
c
t
i
o
n
 
m
o
d
e
l
s
"
,


 
 
 
 
 
 
"
T
i
m
e
o
u
t
-
b
a
s
e
d
 
r
e
f
u
n
d
 
m
e
c
h
a
n
i
s
m
s
"
,


 
 
 
 
 
 
"
R
o
l
e
-
b
a
s
e
d
 
a
c
c
e
s
s
 
c
o
n
t
r
o
l
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
 
w
e
e
k
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
E
s
c
r
o
w
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
E
s
c
r
o
w
"
,
 
"
P
a
y
m
e
n
t
s
"
,
 
"
T
r
u
s
t
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
O
p
e
n
Z
e
p
p
e
l
i
n
/
o
p
e
n
z
e
p
p
e
l
i
n
-
c
o
n
t
r
a
c
t
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
0
,


 
 
 
 
t
i
t
l
e
:
 
"
S
o
u
l
b
o
u
n
d
 
T
o
k
e
n
 
(
S
B
T
)
 
B
a
d
g
e
 
S
y
s
t
e
m
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
I
s
s
u
e
 
n
o
n
-
t
r
a
n
s
f
e
r
a
b
l
e
 
t
o
k
e
n
s
 
a
s
 
a
c
h
i
e
v
e
m
e
n
t
 
b
a
d
g
e
s
 
o
r
 
c
r
e
d
e
n
t
i
a
l
s
.
 
O
r
g
a
n
i
z
a
t
i
o
n
s
 
a
t
t
e
s
t
 
a
n
d
 
u
s
e
r
s
 
d
i
s
p
l
a
y
 
t
h
e
m
 
a
s
 
o
n
-
c
h
a
i
n
 
r
e
p
u
t
a
t
i
o
n
.
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
B
e
g
i
n
n
e
r
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
5
1
9
2
 
s
o
u
l
b
o
u
n
d
 
t
o
k
e
n
 
t
h
a
t
 
r
e
v
e
r
t
s
 
o
n
 
t
r
a
n
s
f
e
r
"
,


 
 
 
 
 
 
"
I
s
s
u
e
r
 
c
o
n
t
r
a
c
t
 
w
h
e
r
e
 
a
u
t
h
o
r
i
z
e
d
 
a
d
d
r
e
s
s
e
s
 
m
i
n
t
 
b
a
d
g
e
s
"
,


 
 
 
 
 
 
"
M
u
l
t
i
p
l
e
 
b
a
d
g
e
 
t
y
p
e
s
 
w
i
t
h
 
m
e
t
a
d
a
t
a
 
a
n
d
 
i
m
a
g
e
s
 
o
n
 
I
P
F
S
"
,


 
 
 
 
 
 
"
P
r
o
f
i
l
e
 
p
a
g
e
 
s
h
o
w
i
n
g
 
a
l
l
 
S
B
T
s
 
h
e
l
d
 
b
y
 
a
n
 
a
d
d
r
e
s
s
"
,


 
 
 
 
 
 
"
R
e
v
o
c
a
t
i
o
n
 
m
e
c
h
a
n
i
s
m
 
f
o
r
 
i
s
s
u
e
r
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
N
o
n
-
t
r
a
n
s
f
e
r
a
b
l
e
 
t
o
k
e
n
 
d
e
s
i
g
n
 
(
E
R
C
-
5
1
9
2
)
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
i
d
e
n
t
i
t
y
 
a
n
d
 
r
e
p
u
t
a
t
i
o
n
"
,


 
 
 
 
 
 
"
I
s
s
u
e
r
-
a
u
t
h
o
r
i
t
y
 
m
o
d
e
l
"
,


 
 
 
 
 
 
"
M
e
t
a
d
a
t
a
 
s
t
a
n
d
a
r
d
s
 
f
o
r
 
b
a
d
g
e
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
1
 
w
e
e
k
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
I
P
-
5
1
9
2
 
M
i
n
i
m
a
l
 
S
o
u
l
b
o
u
n
d
 
N
F
T
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
i
p
s
.
e
t
h
e
r
e
u
m
.
o
r
g
/
E
I
P
S
/
e
i
p
-
5
1
9
2
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
V
i
t
a
l
i
k
'
s
 
S
o
u
l
b
o
u
n
d
 
P
a
p
e
r
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
p
a
p
e
r
s
.
s
s
r
n
.
c
o
m
/
s
o
l
3
/
p
a
p
e
r
s
.
c
f
m
?
a
b
s
t
r
a
c
t
_
i
d
=
4
1
0
5
7
6
3
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
S
B
T
"
,
 
"
I
d
e
n
t
i
t
y
"
,
 
"
R
e
p
u
t
a
t
i
o
n
"
,
 
"
C
r
e
d
e
n
t
i
a
l
s
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
e
t
h
e
r
e
u
m
/
E
I
P
s
/
b
l
o
b
/
m
a
s
t
e
r
/
E
I
P
S
/
e
i
p
-
5
1
9
2
.
m
d
"
,


 
 
}
,




 
 
/
/
 
─
─
 
I
n
t
e
r
m
e
d
i
a
t
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
{


 
 
 
 
i
d
:
 
1
1
,


 
 
 
 
t
i
t
l
e
:
 
"
D
E
X
 
/
 
A
u
t
o
m
a
t
e
d
 
M
a
r
k
e
t
 
M
a
k
e
r
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
s
i
m
p
l
i
f
i
e
d
 
U
n
i
s
w
a
p
 
V
2
-
s
t
y
l
e
 
A
M
M
 
w
i
t
h
 
t
o
k
e
n
 
p
a
i
r
 
p
o
o
l
s
,
 
l
i
q
u
i
d
i
t
y
 
p
r
o
v
i
s
i
o
n
,
 
a
n
d
 
t
o
k
e
n
 
s
w
a
p
s
 
u
s
i
n
g
 
t
h
e
 
c
o
n
s
t
a
n
t
 
p
r
o
d
u
c
t
 
f
o
r
m
u
l
a
 
(
x
 
*
 
y
 
=
 
k
)
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
v
i
e
m
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
F
a
c
t
o
r
y
 
c
o
n
t
r
a
c
t
 
t
h
a
t
 
c
r
e
a
t
e
s
 
p
a
i
r
 
p
o
o
l
s
 
f
o
r
 
a
n
y
 
t
w
o
 
E
R
C
-
2
0
 
t
o
k
e
n
s
"
,


 
 
 
 
 
 
"
A
d
d
 
a
n
d
 
r
e
m
o
v
e
 
l
i
q
u
i
d
i
t
y
 
(
m
i
n
t
/
b
u
r
n
 
L
P
 
t
o
k
e
n
s
)
"
,


 
 
 
 
 
 
"
T
o
k
e
n
-
t
o
-
t
o
k
e
n
 
s
w
a
p
s
 
w
i
t
h
 
c
o
n
s
t
a
n
t
 
p
r
o
d
u
c
t
 
f
o
r
m
u
l
a
"
,


 
 
 
 
 
 
"
0
.
3
%
 
s
w
a
p
 
f
e
e
 
d
i
s
t
r
i
b
u
t
e
d
 
t
o
 
l
i
q
u
i
d
i
t
y
 
p
r
o
v
i
d
e
r
s
"
,


 
 
 
 
 
 
"
P
r
i
c
e
 
i
m
p
a
c
t
 
c
a
l
c
u
l
a
t
i
o
n
 
a
n
d
 
s
l
i
p
p
a
g
e
 
p
r
o
t
e
c
t
i
o
n
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
 
w
i
t
h
 
s
w
a
p
 
i
n
t
e
r
f
a
c
e
,
 
p
o
o
l
 
c
r
e
a
t
i
o
n
,
 
a
n
d
 
l
i
q
u
i
d
i
t
y
 
m
a
n
a
g
e
m
e
n
t
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
C
o
n
s
t
a
n
t
 
p
r
o
d
u
c
t
 
A
M
M
 
m
a
t
h
e
m
a
t
i
c
s
"
,


 
 
 
 
 
 
"
F
a
c
t
o
r
y
-
c
l
o
n
e
 
d
e
p
l
o
y
m
e
n
t
 
p
a
t
t
e
r
n
"
,


 
 
 
 
 
 
"
L
P
 
t
o
k
e
n
 
m
i
n
t
i
n
g
 
a
n
d
 
b
u
r
n
i
n
g
"
,


 
 
 
 
 
 
"
P
r
i
c
e
 
c
a
l
c
u
l
a
t
i
o
n
 
a
n
d
 
s
l
i
p
p
a
g
e
 
m
e
c
h
a
n
i
c
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
5
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
n
i
s
w
a
p
 
V
2
 
W
h
i
t
e
p
a
p
e
r
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
u
n
i
s
w
a
p
.
o
r
g
/
w
h
i
t
e
p
a
p
e
r
.
p
d
f
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
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
 
D
e
F
i
:
 
U
n
i
s
w
a
p
 
V
2
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
j
e
i
w
a
n
.
n
e
t
/
p
o
s
t
s
/
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
-
d
e
f
i
-
u
n
i
s
w
a
p
v
2
-
1
/
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
D
E
X
"
,
 
"
A
M
M
"
,
 
"
D
e
F
i
"
,
 
"
L
i
q
u
i
d
i
t
y
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
U
n
i
s
w
a
p
/
v
2
-
c
o
r
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
2
,


 
 
 
 
t
i
t
l
e
:
 
"
N
F
T
 
M
a
r
k
e
t
p
l
a
c
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
p
e
e
r
-
t
o
-
p
e
e
r
 
m
a
r
k
e
t
p
l
a
c
e
 
w
h
e
r
e
 
u
s
e
r
s
 
l
i
s
t
 
N
F
T
s
 
f
o
r
 
s
a
l
e
,
 
o
t
h
e
r
 
u
s
e
r
s
 
b
u
y
 
t
h
e
m
,
 
a
n
d
 
t
h
e
 
p
l
a
t
f
o
r
m
 
t
a
k
e
s
 
a
 
s
m
a
l
l
 
f
e
e
.
 
S
u
p
p
o
r
t
s
 
E
R
C
-
7
2
1
 
t
o
k
e
n
s
 
f
r
o
m
 
a
n
y
 
c
o
l
l
e
c
t
i
o
n
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
T
h
e
 
G
r
a
p
h
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
L
i
s
t
 
a
n
y
 
E
R
C
-
7
2
1
 
N
F
T
 
f
o
r
 
a
 
f
i
x
e
d
 
p
r
i
c
e
"
,


 
 
 
 
 
 
"
B
u
y
 
l
i
s
t
e
d
 
N
F
T
s
 
w
i
t
h
 
a
u
t
o
m
a
t
i
c
 
r
o
y
a
l
t
y
 
d
i
s
t
r
i
b
u
t
i
o
n
"
,


 
 
 
 
 
 
"
C
a
n
c
e
l
 
l
i
s
t
i
n
g
s
 
a
n
d
 
u
p
d
a
t
e
 
p
r
i
c
e
s
"
,


 
 
 
 
 
 
"
P
l
a
t
f
o
r
m
 
f
e
e
 
(
2
-
5
%
)
 
o
n
 
e
a
c
h
 
s
a
l
e
"
,


 
 
 
 
 
 
"
C
o
l
l
e
c
t
i
o
n
 
p
a
g
e
s
 
s
h
o
w
i
n
g
 
a
l
l
 
N
F
T
s
 
f
r
o
m
 
a
 
c
o
n
t
r
a
c
t
"
,


 
 
 
 
 
 
"
A
c
t
i
v
i
t
y
 
f
e
e
d
 
o
f
 
r
e
c
e
n
t
 
s
a
l
e
s
 
a
n
d
 
l
i
s
t
i
n
g
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
s
c
r
o
w
 
a
n
d
 
m
a
r
k
e
t
p
l
a
c
e
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
E
R
C
-
7
2
1
 
a
p
p
r
o
v
a
l
 
a
n
d
 
t
r
a
n
s
f
e
r
 
f
l
o
w
s
"
,


 
 
 
 
 
 
"
F
e
e
 
d
i
s
t
r
i
b
u
t
i
o
n
 
i
n
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
I
n
d
e
x
i
n
g
 
o
n
-
c
h
a
i
n
 
e
v
e
n
t
s
 
w
i
t
h
 
T
h
e
 
G
r
a
p
h
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
4
-
6
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
G
r
a
p
h
 
-
 
S
u
b
g
r
a
p
h
 
D
e
v
e
l
o
p
m
e
n
t
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
t
h
e
g
r
a
p
h
.
c
o
m
/
d
o
c
s
/
e
n
/
d
e
v
e
l
o
p
i
n
g
/
c
r
e
a
t
i
n
g
-
a
-
s
u
b
g
r
a
p
h
/
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
E
R
C
-
7
2
1
 
U
t
i
l
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
e
n
z
e
p
p
e
l
i
n
.
c
o
m
/
c
o
n
t
r
a
c
t
s
/
e
r
c
7
2
1
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
N
F
T
"
,
 
"
M
a
r
k
e
t
p
l
a
c
e
"
,
 
"
E
R
C
-
7
2
1
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
P
r
o
j
e
c
t
O
p
e
n
S
e
a
/
s
e
a
p
o
r
t
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
3
,


 
 
 
 
t
i
t
l
e
:
 
"
D
A
O
 
G
o
v
e
r
n
a
n
c
e
 
D
a
s
h
b
o
a
r
d
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
g
o
v
e
r
n
a
n
c
e
 
p
l
a
t
f
o
r
m
 
w
h
e
r
e
 
t
o
k
e
n
 
h
o
l
d
e
r
s
 
c
r
e
a
t
e
 
p
r
o
p
o
s
a
l
s
,
 
v
o
t
e
,
 
a
n
d
 
e
x
e
c
u
t
e
 
o
n
-
c
h
a
i
n
 
a
c
t
i
o
n
s
.
 
U
s
e
s
 
O
p
e
n
Z
e
p
p
e
l
i
n
 
G
o
v
e
r
n
o
r
 
a
s
 
t
h
e
 
f
o
u
n
d
a
t
i
o
n
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
G
o
v
e
r
n
a
n
c
e
 
t
o
k
e
n
 
(
E
R
C
-
2
0
V
o
t
e
s
)
 
w
i
t
h
 
d
e
l
e
g
a
t
i
o
n
"
,


 
 
 
 
 
 
"
G
o
v
e
r
n
o
r
 
c
o
n
t
r
a
c
t
 
w
i
t
h
 
c
o
n
f
i
g
u
r
a
b
l
e
 
v
o
t
i
n
g
 
p
e
r
i
o
d
 
a
n
d
 
q
u
o
r
u
m
"
,


 
 
 
 
 
 
"
T
i
m
e
l
o
c
k
 
c
o
n
t
r
o
l
l
e
r
 
f
o
r
 
d
e
l
a
y
e
d
 
e
x
e
c
u
t
i
o
n
"
,


 
 
 
 
 
 
"
P
r
o
p
o
s
a
l
 
c
r
e
a
t
i
o
n
,
 
v
o
t
i
n
g
,
 
a
n
d
 
e
x
e
c
u
t
i
o
n
 
U
I
"
,


 
 
 
 
 
 
"
D
e
l
e
g
a
t
e
 
v
o
t
i
n
g
 
p
o
w
e
r
 
t
o
 
a
n
o
t
h
e
r
 
a
d
d
r
e
s
s
"
,


 
 
 
 
 
 
"
P
r
o
p
o
s
a
l
 
h
i
s
t
o
r
y
 
w
i
t
h
 
s
t
a
t
u
s
 
t
r
a
c
k
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
G
o
v
e
r
n
o
r
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
T
o
k
e
n
-
b
a
s
e
d
 
v
o
t
i
n
g
 
a
n
d
 
d
e
l
e
g
a
t
i
o
n
"
,


 
 
 
 
 
 
"
T
i
m
e
l
o
c
k
 
p
a
t
t
e
r
n
s
 
f
o
r
 
s
e
c
u
r
e
 
e
x
e
c
u
t
i
o
n
"
,


 
 
 
 
 
 
"
G
o
v
e
r
n
a
n
c
e
 
p
r
o
p
o
s
a
l
 
l
i
f
e
c
y
c
l
e
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
5
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
 
G
o
v
e
r
n
o
r
 
G
u
i
d
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
e
n
z
e
p
p
e
l
i
n
.
c
o
m
/
c
o
n
t
r
a
c
t
s
/
g
o
v
e
r
n
a
n
c
e
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
a
l
l
y
 
-
 
G
o
v
e
r
n
a
n
c
e
 
E
x
p
l
o
r
e
r
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
t
a
l
l
y
.
x
y
z
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
D
A
O
"
,
 
"
G
o
v
e
r
n
a
n
c
e
"
,
 
"
V
o
t
i
n
g
"
,
 
"
O
p
e
n
Z
e
p
p
e
l
i
n
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
O
p
e
n
Z
e
p
p
e
l
i
n
/
o
p
e
n
z
e
p
p
e
l
i
n
-
c
o
n
t
r
a
c
t
s
/
t
r
e
e
/
m
a
s
t
e
r
/
c
o
n
t
r
a
c
t
s
/
g
o
v
e
r
n
a
n
c
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
4
,


 
 
 
 
t
i
t
l
e
:
 
"
S
t
a
k
i
n
g
 
P
l
a
t
f
o
r
m
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
U
s
e
r
s
 
d
e
p
o
s
i
t
 
E
R
C
-
2
0
 
t
o
k
e
n
s
 
i
n
t
o
 
a
 
s
t
a
k
i
n
g
 
c
o
n
t
r
a
c
t
 
a
n
d
 
e
a
r
n
 
r
e
w
a
r
d
s
 
o
v
e
r
 
t
i
m
e
.
 
S
u
p
p
o
r
t
s
 
f
l
e
x
i
b
l
e
 
a
n
d
 
l
o
c
k
e
d
 
s
t
a
k
i
n
g
 
p
e
r
i
o
d
s
 
w
i
t
h
 
d
i
f
f
e
r
e
n
t
 
A
P
Y
 
t
i
e
r
s
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
S
t
a
k
e
 
t
o
k
e
n
s
 
w
i
t
h
 
f
l
e
x
i
b
l
e
 
o
r
 
l
o
c
k
e
d
 
(
3
0
/
6
0
/
9
0
 
d
a
y
)
 
p
e
r
i
o
d
s
"
,


 
 
 
 
 
 
"
R
e
w
a
r
d
 
c
a
l
c
u
l
a
t
i
o
n
 
b
a
s
e
d
 
o
n
 
s
t
a
k
i
n
g
 
d
u
r
a
t
i
o
n
 
a
n
d
 
a
m
o
u
n
t
"
,


 
 
 
 
 
 
"
C
l
a
i
m
 
r
e
w
a
r
d
s
 
w
i
t
h
o
u
t
 
u
n
s
t
a
k
i
n
g
"
,


 
 
 
 
 
 
"
E
a
r
l
y
 
w
i
t
h
d
r
a
w
a
l
 
p
e
n
a
l
t
y
 
f
o
r
 
l
o
c
k
e
d
 
s
t
a
k
e
s
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
A
P
Y
,
 
t
o
t
a
l
 
s
t
a
k
e
d
,
 
a
n
d
 
e
a
r
n
e
d
 
r
e
w
a
r
d
s
"
,


 
 
 
 
 
 
"
A
d
m
i
n
 
f
u
n
c
t
i
o
n
s
 
t
o
 
a
d
d
 
r
e
w
a
r
d
s
 
t
o
 
t
h
e
 
p
o
o
l
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
R
e
w
a
r
d
 
d
i
s
t
r
i
b
u
t
i
o
n
 
m
a
t
h
e
m
a
t
i
c
s
"
,


 
 
 
 
 
 
"
T
i
m
e
-
l
o
c
k
e
d
 
f
i
n
a
n
c
i
a
l
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
P
r
e
c
i
s
i
o
n
 
m
a
t
h
 
w
i
t
h
 
f
i
x
e
d
-
p
o
i
n
t
 
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
S
t
a
k
i
n
g
 
a
n
d
 
r
e
w
a
r
d
 
c
l
a
i
m
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
2
-
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
y
n
t
h
e
t
i
x
 
S
t
a
k
i
n
g
R
e
w
a
r
d
s
 
(
r
e
f
e
r
e
n
c
e
)
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
S
y
n
t
h
e
t
i
x
i
o
/
s
y
n
t
h
e
t
i
x
/
b
l
o
b
/
d
e
v
e
l
o
p
/
c
o
n
t
r
a
c
t
s
/
S
t
a
k
i
n
g
R
e
w
a
r
d
s
.
s
o
l
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
S
t
a
k
i
n
g
"
,
 
"
D
e
F
i
"
,
 
"
R
e
w
a
r
d
s
"
,
 
"
Y
i
e
l
d
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
S
y
n
t
h
e
t
i
x
i
o
/
s
y
n
t
h
e
t
i
x
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
5
,


 
 
 
 
t
i
t
l
e
:
 
"
T
o
k
e
n
-
G
a
t
e
d
 
C
o
n
t
e
n
t
 
P
l
a
t
f
o
r
m
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
c
o
n
t
e
n
t
 
p
l
a
t
f
o
r
m
 
w
h
e
r
e
 
s
p
e
c
i
f
i
c
 
c
o
n
t
e
n
t
 
i
s
 
o
n
l
y
 
a
c
c
e
s
s
i
b
l
e
 
t
o
 
h
o
l
d
e
r
s
 
o
f
 
c
e
r
t
a
i
n
 
N
F
T
s
 
o
r
 
t
o
k
e
n
s
.
 
C
o
m
b
i
n
e
s
 
o
n
-
c
h
a
i
n
 
v
e
r
i
f
i
c
a
t
i
o
n
 
w
i
t
h
 
o
f
f
-
c
h
a
i
n
 
c
o
n
t
e
n
t
 
d
e
l
i
v
e
r
y
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
I
P
F
S
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
T
o
k
e
n
-
g
a
t
e
d
 
a
c
c
e
s
s
 
v
e
r
i
f
i
c
a
t
i
o
n
 
(
c
h
e
c
k
 
N
F
T
 
o
r
 
E
R
C
-
2
0
 
b
a
l
a
n
c
e
)
"
,


 
 
 
 
 
 
"
C
o
n
t
e
n
t
 
c
r
e
a
t
o
r
s
 
s
e
t
 
w
h
i
c
h
 
t
o
k
e
n
s
 
g
r
a
n
t
 
a
c
c
e
s
s
"
,


 
 
 
 
 
 
"
S
i
g
n
-
I
n
 
w
i
t
h
 
E
t
h
e
r
e
u
m
 
(
S
I
W
E
)
 
f
o
r
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
"
E
n
c
r
y
p
t
e
d
 
c
o
n
t
e
n
t
 
s
t
o
r
e
d
 
o
n
 
I
P
F
S
,
 
d
e
c
r
y
p
t
e
d
 
c
l
i
e
n
t
-
s
i
d
e
"
,


 
 
 
 
 
 
"
C
r
e
a
t
o
r
 
d
a
s
h
b
o
a
r
d
 
f
o
r
 
m
a
n
a
g
i
n
g
 
g
a
t
e
d
 
c
o
n
t
e
n
t
"
,


 
 
 
 
 
 
"
T
i
e
r
e
d
 
a
c
c
e
s
s
 
b
a
s
e
d
 
o
n
 
t
o
k
e
n
 
q
u
a
n
t
i
t
y
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
T
o
k
e
n
-
g
a
t
i
n
g
 
p
a
t
t
e
r
n
s
 
a
n
d
 
b
a
l
a
n
c
e
 
v
e
r
i
f
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
"
S
i
g
n
-
I
n
 
w
i
t
h
 
E
t
h
e
r
e
u
m
 
(
E
I
P
-
4
3
6
1
)
"
,


 
 
 
 
 
 
"
C
l
i
e
n
t
-
s
i
d
e
 
e
n
c
r
y
p
t
i
o
n
 
a
n
d
 
d
e
c
r
y
p
t
i
o
n
"
,


 
 
 
 
 
 
"
C
o
m
b
i
n
i
n
g
 
o
n
-
c
h
a
i
n
 
a
n
d
 
o
f
f
-
c
h
a
i
n
 
d
a
t
a
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
i
g
n
-
I
n
 
w
i
t
h
 
E
t
h
e
r
e
u
m
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
l
o
g
i
n
.
x
y
z
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
i
t
 
P
r
o
t
o
c
o
l
 
-
 
T
o
k
e
n
 
G
a
t
i
n
g
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
e
v
e
l
o
p
e
r
.
l
i
t
p
r
o
t
o
c
o
l
.
c
o
m
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
T
o
k
e
n
-
G
a
t
i
n
g
"
,
 
"
C
o
n
t
e
n
t
"
,
 
"
A
c
c
e
s
s
 
C
o
n
t
r
o
l
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
p
r
u
c
e
i
d
/
s
i
w
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
6
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
-
C
h
a
i
n
 
S
u
b
s
c
r
i
p
t
i
o
n
 
S
e
r
v
i
c
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
r
e
c
u
r
r
i
n
g
 
p
a
y
m
e
n
t
 
c
o
n
t
r
a
c
t
 
w
h
e
r
e
 
u
s
e
r
s
 
s
u
b
s
c
r
i
b
e
 
b
y
 
a
p
p
r
o
v
i
n
g
 
t
o
k
e
n
 
s
p
e
n
d
i
n
g
,
 
a
n
d
 
t
h
e
 
s
e
r
v
i
c
e
 
p
r
o
v
i
d
e
r
 
c
a
n
 
p
u
l
l
 
p
a
y
m
e
n
t
s
 
a
t
 
r
e
g
u
l
a
r
 
i
n
t
e
r
v
a
l
s
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
v
i
e
m
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
S
u
b
s
c
r
i
b
e
 
w
i
t
h
 
E
R
C
-
2
0
 
t
o
k
e
n
 
a
p
p
r
o
v
a
l
"
,


 
 
 
 
 
 
"
C
o
n
f
i
g
u
r
a
b
l
e
 
b
i
l
l
i
n
g
 
p
e
r
i
o
d
s
 
(
w
e
e
k
l
y
,
 
m
o
n
t
h
l
y
,
 
a
n
n
u
a
l
)
"
,


 
 
 
 
 
 
"
A
u
t
o
m
a
t
i
c
 
p
a
y
m
e
n
t
 
c
o
l
l
e
c
t
i
o
n
 
b
y
 
s
e
r
v
i
c
e
 
p
r
o
v
i
d
e
r
"
,


 
 
 
 
 
 
"
G
r
a
c
e
 
p
e
r
i
o
d
 
b
e
f
o
r
e
 
c
a
n
c
e
l
l
a
t
i
o
n
 
f
o
r
 
f
a
i
l
e
d
 
p
a
y
m
e
n
t
s
"
,


 
 
 
 
 
 
"
S
u
b
s
c
r
i
b
e
r
 
d
a
s
h
b
o
a
r
d
 
w
i
t
h
 
p
a
y
m
e
n
t
 
h
i
s
t
o
r
y
"
,


 
 
 
 
 
 
"
M
u
l
t
i
p
l
e
 
s
u
b
s
c
r
i
p
t
i
o
n
 
t
i
e
r
s
 
w
i
t
h
 
d
i
f
f
e
r
e
n
t
 
p
r
i
c
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
2
0
 
a
p
p
r
o
v
e
/
t
r
a
n
s
f
e
r
F
r
o
m
 
p
a
t
t
e
r
n
"
,


 
 
 
 
 
 
"
R
e
c
u
r
r
i
n
g
 
p
a
y
m
e
n
t
 
l
o
g
i
c
 
i
n
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
s
"
,


 
 
 
 
 
 
"
T
i
m
e
-
b
a
s
e
d
 
s
t
a
t
e
 
t
r
a
n
s
i
t
i
o
n
s
"
,


 
 
 
 
 
 
"
P
u
l
l
 
p
a
y
m
e
n
t
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
2
-
3
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
I
P
-
1
3
3
7
:
 
S
u
b
s
c
r
i
p
t
i
o
n
s
 
o
n
 
E
t
h
e
r
e
u
m
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
i
p
s
.
e
t
h
e
r
e
u
m
.
o
r
g
/
E
I
P
S
/
e
i
p
-
1
3
3
7
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
S
u
b
s
c
r
i
p
t
i
o
n
"
,
 
"
P
a
y
m
e
n
t
s
"
,
 
"
S
a
a
S
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
e
t
h
e
r
e
u
m
/
E
I
P
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
7
,


 
 
 
 
t
i
t
l
e
:
 
"
C
r
o
s
s
-
C
h
a
i
n
 
T
o
k
e
n
 
B
r
i
d
g
e
 
U
I
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
f
r
o
n
t
e
n
d
 
f
o
r
 
b
r
i
d
g
i
n
g
 
t
o
k
e
n
s
 
b
e
t
w
e
e
n
 
L
1
 
a
n
d
 
L
2
 
(
e
.
g
.
,
 
E
t
h
e
r
e
u
m
 
t
o
 
A
r
b
i
t
r
u
m
)
.
 
U
s
e
s
 
e
x
i
s
t
i
n
g
 
b
r
i
d
g
e
 
c
o
n
t
r
a
c
t
s
 
-
 
y
o
u
 
b
u
i
l
d
 
t
h
e
 
U
I
 
a
n
d
 
t
r
a
c
k
i
n
g
 
l
a
y
e
r
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
M
u
l
t
i
-
c
h
a
i
n
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
v
i
e
m
"
,
 
"
T
y
p
e
S
c
r
i
p
t
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
N
e
t
w
o
r
k
 
s
e
l
e
c
t
o
r
 
(
s
o
u
r
c
e
 
a
n
d
 
d
e
s
t
i
n
a
t
i
o
n
 
c
h
a
i
n
)
"
,


 
 
 
 
 
 
"
T
o
k
e
n
 
s
e
l
e
c
t
i
o
n
 
w
i
t
h
 
b
a
l
a
n
c
e
 
d
i
s
p
l
a
y
 
o
n
 
b
o
t
h
 
c
h
a
i
n
s
"
,


 
 
 
 
 
 
"
B
r
i
d
g
e
 
t
r
a
n
s
a
c
t
i
o
n
 
e
x
e
c
u
t
i
o
n
 
w
i
t
h
 
s
t
e
p
-
b
y
-
s
t
e
p
 
s
t
a
t
u
s
"
,


 
 
 
 
 
 
"
T
r
a
n
s
a
c
t
i
o
n
 
h
i
s
t
o
r
y
 
t
r
a
c
k
i
n
g
 
(
p
e
n
d
i
n
g
,
 
c
o
n
f
i
r
m
e
d
,
 
f
i
n
a
l
i
z
e
d
)
"
,


 
 
 
 
 
 
"
E
s
t
i
m
a
t
e
d
 
t
i
m
e
 
a
n
d
 
f
e
e
s
 
d
i
s
p
l
a
y
"
,


 
 
 
 
 
 
"
C
h
a
i
n
 
s
w
i
t
c
h
i
n
g
 
p
r
o
m
p
t
s
 
w
h
e
n
 
u
s
e
r
 
i
s
 
o
n
 
w
r
o
n
g
 
n
e
t
w
o
r
k
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
M
u
l
t
i
-
c
h
a
i
n
 
f
r
o
n
t
e
n
d
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
C
h
a
i
n
 
s
w
i
t
c
h
i
n
g
 
a
n
d
 
n
e
t
w
o
r
k
 
m
a
n
a
g
e
m
e
n
t
 
w
i
t
h
 
w
a
g
m
i
"
,


 
 
 
 
 
 
"
B
r
i
d
g
e
 
A
P
I
 
i
n
t
e
g
r
a
t
i
o
n
 
(
A
c
r
o
s
s
,
 
S
o
c
k
e
t
,
 
L
I
.
F
I
)
"
,


 
 
 
 
 
 
"
T
r
a
n
s
a
c
t
i
o
n
 
l
i
f
e
c
y
c
l
e
 
t
r
a
c
k
i
n
g
 
a
c
r
o
s
s
 
c
h
a
i
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
I
.
F
I
 
S
D
K
 
-
 
C
r
o
s
s
-
C
h
a
i
n
 
B
r
i
d
g
i
n
g
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
l
i
.
f
i
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
w
a
g
m
i
 
M
u
l
t
i
-
C
h
a
i
n
 
C
o
n
f
i
g
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
w
a
g
m
i
.
s
h
/
r
e
a
c
t
/
g
u
i
d
e
s
/
c
h
a
i
n
-
p
r
o
p
e
r
t
i
e
s
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
B
r
i
d
g
e
"
,
 
"
C
r
o
s
s
-
C
h
a
i
n
"
,
 
"
L
2
"
,
 
"
M
u
l
t
i
-
c
h
a
i
n
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
l
i
f
i
n
a
n
c
e
/
s
d
k
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
8
,


 
 
 
 
t
i
t
l
e
:
 
"
Y
i
e
l
d
 
A
g
g
r
e
g
a
t
o
r
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
u
t
o
m
a
t
i
c
a
l
l
y
 
r
o
u
t
e
s
 
u
s
e
r
 
d
e
p
o
s
i
t
s
 
t
o
 
t
h
e
 
h
i
g
h
e
s
t
-
y
i
e
l
d
i
n
g
 
l
e
n
d
i
n
g
 
p
r
o
t
o
c
o
l
.
 
P
e
r
i
o
d
i
c
a
l
l
y
 
r
e
b
a
l
a
n
c
e
s
 
a
c
r
o
s
s
 
A
a
v
e
,
 
C
o
m
p
o
u
n
d
,
 
a
n
d
 
o
t
h
e
r
 
E
R
C
-
4
6
2
6
 
v
a
u
l
t
s
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
C
h
a
i
n
l
i
n
k
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
4
6
2
6
 
v
a
u
l
t
 
w
r
a
p
p
i
n
g
 
m
u
l
t
i
p
l
e
 
y
i
e
l
d
 
s
o
u
r
c
e
s
"
,


 
 
 
 
 
 
"
S
t
r
a
t
e
g
y
 
c
o
m
p
a
r
i
s
o
n
:
 
q
u
e
r
y
 
A
P
Y
 
f
r
o
m
 
A
a
v
e
,
 
C
o
m
p
o
u
n
d
,
 
e
t
c
.
"
,


 
 
 
 
 
 
"
A
u
t
o
-
r
e
b
a
l
a
n
c
e
 
w
h
e
n
 
y
i
e
l
d
 
d
i
f
f
e
r
e
n
t
i
a
l
 
e
x
c
e
e
d
s
 
t
h
r
e
s
h
o
l
d
"
,


 
 
 
 
 
 
"
H
a
r
v
e
s
t
 
f
u
n
c
t
i
o
n
 
t
h
a
t
 
c
o
m
p
o
u
n
d
s
 
e
a
r
n
e
d
 
r
e
w
a
r
d
s
"
,


 
 
 
 
 
 
"
P
e
r
f
o
r
m
a
n
c
e
 
f
e
e
 
(
1
0
-
2
0
%
)
 
o
n
 
p
r
o
f
i
t
s
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
c
u
r
r
e
n
t
 
a
l
l
o
c
a
t
i
o
n
,
 
A
P
Y
,
 
a
n
d
 
h
i
s
t
o
r
i
c
a
l
 
r
e
t
u
r
n
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
Y
i
e
l
d
 
f
a
r
m
i
n
g
 
s
t
r
a
t
e
g
y
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
M
u
l
t
i
-
p
r
o
t
o
c
o
l
 
i
n
t
e
g
r
a
t
i
o
n
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
E
R
C
-
4
6
2
6
 
c
o
m
p
o
s
a
b
i
l
i
t
y
 
i
n
 
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
"
G
a
s
-
a
w
a
r
e
 
r
e
b
a
l
a
n
c
i
n
g
 
l
o
g
i
c
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
4
-
6
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
Y
e
a
r
n
 
V
3
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
y
e
a
r
n
.
f
i
/
d
e
v
e
l
o
p
e
r
s
/
v
3
/
o
v
e
r
v
i
e
w
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
R
C
-
4
6
2
6
 
A
l
l
i
a
n
c
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
r
c
4
6
2
6
.
i
n
f
o
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
Y
i
e
l
d
"
,
 
"
A
g
g
r
e
g
a
t
o
r
"
,
 
"
D
e
F
i
"
,
 
"
V
a
u
l
t
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
y
e
a
r
n
/
y
e
a
r
n
-
v
a
u
l
t
s
-
v
3
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
9
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
-
C
h
a
i
n
 
A
u
c
t
i
o
n
 
H
o
u
s
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
d
e
c
e
n
t
r
a
l
i
z
e
d
 
a
u
c
t
i
o
n
 
p
l
a
t
f
o
r
m
 
s
u
p
p
o
r
t
i
n
g
 
E
n
g
l
i
s
h
 
(
a
s
c
e
n
d
i
n
g
)
 
a
n
d
 
D
u
t
c
h
 
(
d
e
s
c
e
n
d
i
n
g
)
 
a
u
c
t
i
o
n
 
t
y
p
e
s
 
f
o
r
 
N
F
T
s
 
a
n
d
 
t
o
k
e
n
 
b
u
n
d
l
e
s
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
T
h
e
 
G
r
a
p
h
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
n
g
l
i
s
h
 
a
u
c
t
i
o
n
:
 
b
i
d
s
 
i
n
c
r
e
a
s
e
,
 
h
i
g
h
e
s
t
 
b
i
d
d
e
r
 
w
i
n
s
 
a
t
 
d
e
a
d
l
i
n
e
"
,


 
 
 
 
 
 
"
D
u
t
c
h
 
a
u
c
t
i
o
n
:
 
p
r
i
c
e
 
d
e
c
r
e
a
s
e
s
 
o
v
e
r
 
t
i
m
e
,
 
f
i
r
s
t
 
b
u
y
e
r
 
w
i
n
s
"
,


 
 
 
 
 
 
"
R
e
s
e
r
v
e
 
p
r
i
c
e
 
a
n
d
 
m
i
n
i
m
u
m
 
b
i
d
 
i
n
c
r
e
m
e
n
t
 
e
n
f
o
r
c
e
m
e
n
t
"
,


 
 
 
 
 
 
"
A
u
t
o
m
a
t
i
c
 
r
e
f
u
n
d
 
o
f
 
o
u
t
b
i
d
 
d
e
p
o
s
i
t
s
"
,


 
 
 
 
 
 
"
A
u
c
t
i
o
n
 
e
x
t
e
n
s
i
o
n
 
i
f
 
b
i
d
 
p
l
a
c
e
d
 
i
n
 
f
i
n
a
l
 
m
i
n
u
t
e
s
"
,


 
 
 
 
 
 
"
A
u
c
t
i
o
n
 
h
i
s
t
o
r
y
 
a
n
d
 
a
n
a
l
y
t
i
c
s
 
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
A
u
c
t
i
o
n
 
m
e
c
h
a
n
i
s
m
 
d
e
s
i
g
n
"
,


 
 
 
 
 
 
"
T
i
m
e
-
d
e
p
e
n
d
e
n
t
 
p
r
i
c
i
n
g
 
l
o
g
i
c
"
,


 
 
 
 
 
 
"
R
e
e
n
t
r
a
n
c
y
 
p
r
o
t
e
c
t
i
o
n
 
f
o
r
 
r
e
f
u
n
d
s
"
,


 
 
 
 
 
 
"
P
u
l
l
 
v
s
 
p
u
s
h
 
p
a
y
m
e
n
t
 
p
a
t
t
e
r
n
s
 
i
n
 
a
u
c
t
i
o
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
2
-
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
E
n
g
l
i
s
h
 
A
u
c
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
/
a
p
p
/
e
n
g
l
i
s
h
-
a
u
c
t
i
o
n
/
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
o
l
i
d
i
t
y
 
b
y
 
E
x
a
m
p
l
e
 
-
 
D
u
t
c
h
 
A
u
c
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
l
i
d
i
t
y
-
b
y
-
e
x
a
m
p
l
e
.
o
r
g
/
a
p
p
/
d
u
t
c
h
-
a
u
c
t
i
o
n
/
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
A
u
c
t
i
o
n
"
,
 
"
N
F
T
"
,
 
"
M
a
r
k
e
t
p
l
a
c
e
"
,
 
"
M
e
c
h
a
n
i
s
m
 
D
e
s
i
g
n
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
Z
o
r
a
-
C
o
m
m
u
n
i
t
y
/
z
o
r
a
-
p
r
o
t
o
c
o
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
0
,


 
 
 
 
t
i
t
l
e
:
 
"
D
e
c
e
n
t
r
a
l
i
z
e
d
 
I
d
e
n
t
i
t
y
 
(
D
I
D
)
 
R
e
s
o
l
v
e
r
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
D
I
D
 
r
e
g
i
s
t
r
y
 
w
h
e
r
e
 
u
s
e
r
s
 
a
n
c
h
o
r
 
i
d
e
n
t
i
t
y
 
d
o
c
u
m
e
n
t
s
 
o
n
-
c
h
a
i
n
 
a
n
d
 
r
e
s
o
l
v
e
r
s
 
l
o
o
k
 
u
p
 
p
u
b
l
i
c
 
k
e
y
s
,
 
s
e
r
v
i
c
e
 
e
n
d
p
o
i
n
t
s
,
 
a
n
d
 
c
r
e
d
e
n
t
i
a
l
s
 
f
o
r
 
a
n
y
 
D
I
D
.
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
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
H
a
r
d
h
a
t
"
,
 
"
R
e
a
c
t
"
,
 
"
d
i
d
-
j
w
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
1
0
5
6
-
c
o
m
p
a
t
i
b
l
e
 
D
I
D
 
r
e
g
i
s
t
r
y
 
c
o
n
t
r
a
c
t
"
,


 
 
 
 
 
 
"
A
t
t
r
i
b
u
t
e
 
m
a
n
a
g
e
m
e
n
t
 
(
s
e
t
,
 
r
e
v
o
k
e
 
p
u
b
l
i
c
 
k
e
y
s
 
a
n
d
 
s
e
r
v
i
c
e
 
e
n
d
p
o
i
n
t
s
)
"
,


 
 
 
 
 
 
"
D
I
D
 
d
o
c
u
m
e
n
t
 
r
e
s
o
l
u
t
i
o
n
 
f
r
o
m
 
o
n
-
c
h
a
i
n
 
e
v
e
n
t
s
"
,


 
 
 
 
 
 
"
J
W
T
 
i
s
s
u
a
n
c
e
 
a
n
d
 
v
e
r
i
f
i
c
a
t
i
o
n
 
u
s
i
n
g
 
D
I
D
 
k
e
y
s
"
,


 
 
 
 
 
 
"
P
r
o
f
i
l
e
 
l
o
o
k
u
p
 
p
a
g
e
:
 
e
n
t
e
r
 
D
I
D
,
 
s
e
e
 
r
e
s
o
l
v
e
d
 
d
o
c
u
m
e
n
t
"
,


 
 
 
 
 
 
"
C
r
e
d
e
n
t
i
a
l
 
i
s
s
u
a
n
c
e
 
U
I
 
f
o
r
 
v
e
r
i
f
i
e
d
 
c
l
a
i
m
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
W
3
C
 
D
I
D
 
s
p
e
c
i
f
i
c
a
t
i
o
n
 
a
n
d
 
r
e
s
o
l
u
t
i
o
n
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
i
d
e
n
t
i
t
y
 
r
e
g
i
s
t
r
y
 
d
e
s
i
g
n
"
,


 
 
 
 
 
 
"
J
W
T
 
s
i
g
n
i
n
g
 
w
i
t
h
 
E
t
h
e
r
e
u
m
 
k
e
y
s
"
,


 
 
 
 
 
 
"
V
e
r
i
f
i
a
b
l
e
 
c
r
e
d
e
n
t
i
a
l
s
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
3
-
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
R
C
-
1
0
5
6
 
E
t
h
e
r
e
u
m
 
D
I
D
 
R
e
g
i
s
t
r
y
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
u
p
o
r
t
-
p
r
o
j
e
c
t
/
e
t
h
r
-
d
i
d
-
r
e
g
i
s
t
r
y
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
3
C
 
D
I
D
 
C
o
r
e
 
S
p
e
c
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
w
3
.
o
r
g
/
T
R
/
d
i
d
-
c
o
r
e
/
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
D
I
D
"
,
 
"
I
d
e
n
t
i
t
y
"
,
 
"
C
r
e
d
e
n
t
i
a
l
s
"
,
 
"
W
3
C
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
u
p
o
r
t
-
p
r
o
j
e
c
t
/
e
t
h
r
-
d
i
d
-
r
e
g
i
s
t
r
y
"
,


 
 
}
,




 
 
/
/
 
─
─
 
A
d
v
a
n
c
e
d
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
{


 
 
 
 
i
d
:
 
2
1
,


 
 
 
 
t
i
t
l
e
:
 
"
L
e
n
d
i
n
g
 
a
n
d
 
B
o
r
r
o
w
i
n
g
 
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


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
A
 
s
i
m
p
l
i
f
i
e
d
 
A
a
v
e
-
s
t
y
l
e
 
l
e
n
d
i
n
g
 
p
r
o
t
o
c
o
l
 
w
h
e
r
e
 
u
s
e
r
s
 
d
e
p
o
s
i
t
 
c
o
l
l
a
t
e
r
a
l
,
 
b
o
r
r
o
w
 
o
t
h
e
r
 
t
o
k
e
n
s
,
 
a
n
d
 
f
a
c
e
 
l
i
q
u
i
d
a
t
i
o
n
 
i
f
 
t
h
e
i
r
 
h
e
a
l
t
h
 
f
a
c
t
o
r
 
d
r
o
p
s
 
b
e
l
o
w
 
1
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
C
h
a
i
n
l
i
n
k
"
,
 
"
T
h
e
 
G
r
a
p
h
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
M
u
l
t
i
-
a
s
s
e
t
 
l
e
n
d
i
n
g
 
p
o
o
l
s
 
w
i
t
h
 
s
u
p
p
l
y
 
a
n
d
 
b
o
r
r
o
w
"
,


 
 
 
 
 
 
"
V
a
r
i
a
b
l
e
 
i
n
t
e
r
e
s
t
 
r
a
t
e
s
 
b
a
s
e
d
 
o
n
 
u
t
i
l
i
z
a
t
i
o
n
"
,


 
 
 
 
 
 
"
C
o
l
l
a
t
e
r
a
l
 
f
a
c
t
o
r
 
a
n
d
 
h
e
a
l
t
h
 
f
a
c
t
o
r
 
c
a
l
c
u
l
a
t
i
o
n
"
,


 
 
 
 
 
 
"
L
i
q
u
i
d
a
t
i
o
n
 
m
e
c
h
a
n
i
s
m
 
w
i
t
h
 
l
i
q
u
i
d
a
t
o
r
 
i
n
c
e
n
t
i
v
e
s
"
,


 
 
 
 
 
 
"
C
h
a
i
n
l
i
n
k
 
p
r
i
c
e
 
f
e
e
d
s
 
f
o
r
 
a
s
s
e
t
 
v
a
l
u
a
t
i
o
n
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
p
o
s
i
t
i
o
n
s
,
 
r
a
t
e
s
,
 
a
n
d
 
l
i
q
u
i
d
a
t
i
o
n
 
r
i
s
k
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
L
e
n
d
i
n
g
 
p
r
o
t
o
c
o
l
 
a
r
c
h
i
t
e
c
t
u
r
e
 
a
n
d
 
m
a
t
h
"
,


 
 
 
 
 
 
"
I
n
t
e
r
e
s
t
 
r
a
t
e
 
m
o
d
e
l
s
 
(
u
t
i
l
i
z
a
t
i
o
n
 
c
u
r
v
e
)
"
,


 
 
 
 
 
 
"
O
r
a
c
l
e
 
i
n
t
e
g
r
a
t
i
o
n
 
f
o
r
 
p
r
i
c
e
 
f
e
e
d
s
"
,


 
 
 
 
 
 
"
L
i
q
u
i
d
a
t
i
o
n
 
m
e
c
h
a
n
i
c
s
 
a
n
d
 
M
E
V
 
c
o
n
s
i
d
e
r
a
t
i
o
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
1
0
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
A
a
v
e
 
V
3
 
T
e
c
h
n
i
c
a
l
 
P
a
p
e
r
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
a
a
v
e
/
a
a
v
e
-
v
3
-
c
o
r
e
/
b
l
o
b
/
m
a
s
t
e
r
/
t
e
c
h
p
a
p
e
r
/
A
a
v
e
_
V
3
_
T
e
c
h
n
i
c
a
l
_
P
a
p
e
r
.
p
d
f
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
h
a
i
n
l
i
n
k
 
P
r
i
c
e
 
F
e
e
d
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
c
h
a
i
n
.
l
i
n
k
/
d
a
t
a
-
f
e
e
d
s
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
L
e
n
d
i
n
g
"
,
 
"
D
e
F
i
"
,
 
"
L
i
q
u
i
d
a
t
i
o
n
"
,
 
"
O
r
a
c
l
e
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
a
a
v
e
/
a
a
v
e
-
v
3
-
c
o
r
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
2
,


 
 
 
 
t
i
t
l
e
:
 
"
Z
K
-
P
r
o
o
f
 
V
e
r
i
f
i
e
r
 
d
A
p
p
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
c
i
r
c
u
i
t
 
i
n
 
C
i
r
c
o
m
 
t
h
a
t
 
p
r
o
v
e
s
 
k
n
o
w
l
e
d
g
e
 
o
f
 
a
 
s
e
c
r
e
t
 
w
i
t
h
o
u
t
 
r
e
v
e
a
l
i
n
g
 
i
t
,
 
g
e
n
e
r
a
t
e
 
p
r
o
o
f
s
 
c
l
i
e
n
t
-
s
i
d
e
,
 
a
n
d
 
v
e
r
i
f
y
 
t
h
e
m
 
o
n
-
c
h
a
i
n
 
w
i
t
h
 
a
 
S
o
l
i
d
i
t
y
 
v
e
r
i
f
i
e
r
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
C
i
r
c
o
m
"
,
 
"
S
n
a
r
k
J
S
"
,
 
"
S
o
l
i
d
i
t
y
"
,
 
"
R
e
a
c
t
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
C
i
r
c
o
m
 
c
i
r
c
u
i
t
 
(
e
.
g
.
,
 
p
r
o
v
e
 
y
o
u
 
k
n
o
w
 
p
r
e
i
m
a
g
e
 
o
f
 
a
 
h
a
s
h
)
"
,


 
 
 
 
 
 
"
T
r
u
s
t
e
d
 
s
e
t
u
p
 
c
e
r
e
m
o
n
y
 
f
o
r
 
g
e
n
e
r
a
t
i
n
g
 
p
r
o
v
i
n
g
/
v
e
r
i
f
i
c
a
t
i
o
n
 
k
e
y
s
"
,


 
 
 
 
 
 
"
C
l
i
e
n
t
-
s
i
d
e
 
p
r
o
o
f
 
g
e
n
e
r
a
t
i
o
n
 
w
i
t
h
 
S
n
a
r
k
J
S
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
G
r
o
t
h
1
6
 
v
e
r
i
f
i
e
r
 
c
o
n
t
r
a
c
t
"
,


 
 
 
 
 
 
"
F
r
o
n
t
e
n
d
 
t
h
a
t
 
g
e
n
e
r
a
t
e
s
 
p
r
o
o
f
s
 
a
n
d
 
s
u
b
m
i
t
s
 
t
o
 
t
h
e
 
v
e
r
i
f
i
e
r
"
,


 
 
 
 
 
 
"
U
s
e
 
c
a
s
e
:
 
p
r
i
v
a
t
e
 
v
o
t
i
n
g
,
 
i
d
e
n
t
i
t
y
 
v
e
r
i
f
i
c
a
t
i
o
n
,
 
o
r
 
a
g
e
 
p
r
o
o
f
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
Z
e
r
o
-
k
n
o
w
l
e
d
g
e
 
p
r
o
o
f
 
f
u
n
d
a
m
e
n
t
a
l
s
"
,


 
 
 
 
 
 
"
C
i
r
c
o
m
 
c
i
r
c
u
i
t
 
d
e
s
i
g
n
 
a
n
d
 
c
o
n
s
t
r
a
i
n
t
s
"
,


 
 
 
 
 
 
"
T
r
u
s
t
e
d
 
s
e
t
u
p
 
a
n
d
 
k
e
y
 
g
e
n
e
r
a
t
i
o
n
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
p
r
o
o
f
 
v
e
r
i
f
i
c
a
t
i
o
n
 
c
o
s
t
s
 
a
n
d
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
4
-
6
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
i
r
c
o
m
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
c
i
r
c
o
m
.
i
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
n
a
r
k
J
S
 
-
 
Z
K
 
P
r
o
o
f
 
L
i
b
r
a
r
y
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
i
d
e
n
3
/
s
n
a
r
k
j
s
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
Z
K
 
L
e
a
r
n
i
n
g
 
R
e
s
o
u
r
c
e
s
 
(
0
x
P
A
R
C
)
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
l
e
a
r
n
.
0
x
p
a
r
c
.
o
r
g
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
Z
K
"
,
 
"
P
r
i
v
a
c
y
"
,
 
"
C
i
r
c
o
m
"
,
 
"
C
r
y
p
t
o
g
r
a
p
h
y
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
i
d
e
n
3
/
c
i
r
c
o
m
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
3
,


 
 
 
 
t
i
t
l
e
:
 
"
M
E
V
 
P
r
o
t
e
c
t
i
o
n
 
T
o
o
l
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
t
o
o
l
 
t
h
a
t
 
d
e
t
e
c
t
s
 
p
o
t
e
n
t
i
a
l
 
s
a
n
d
w
i
c
h
 
a
t
t
a
c
k
s
 
o
n
 
p
e
n
d
i
n
g
 
t
r
a
n
s
a
c
t
i
o
n
s
 
a
n
d
 
s
u
b
m
i
t
s
 
t
h
e
m
 
t
h
r
o
u
g
h
 
F
l
a
s
h
b
o
t
s
 
P
r
o
t
e
c
t
 
t
o
 
b
y
p
a
s
s
 
t
h
e
 
p
u
b
l
i
c
 
m
e
m
p
o
o
l
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
T
y
p
e
S
c
r
i
p
t
"
,
 
"
e
t
h
e
r
s
.
j
s
"
,
 
"
F
l
a
s
h
b
o
t
s
"
,
 
"
R
e
a
c
t
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
M
o
n
i
t
o
r
 
p
e
n
d
i
n
g
 
m
e
m
p
o
o
l
 
t
r
a
n
s
a
c
t
i
o
n
s
 
f
o
r
 
D
E
X
 
s
w
a
p
s
"
,


 
 
 
 
 
 
"
S
i
m
u
l
a
t
e
 
t
r
a
n
s
a
c
t
i
o
n
s
 
t
o
 
d
e
t
e
c
t
 
s
a
n
d
w
i
c
h
 
a
t
t
a
c
k
 
p
r
o
f
i
t
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
S
u
b
m
i
t
 
t
r
a
n
s
a
c
t
i
o
n
s
 
v
i
a
 
F
l
a
s
h
b
o
t
s
 
P
r
o
t
e
c
t
 
R
P
C
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
p
r
o
t
e
c
t
e
d
 
v
s
 
u
n
p
r
o
t
e
c
t
e
d
 
t
r
a
n
s
a
c
t
i
o
n
 
s
t
a
t
s
"
,


 
 
 
 
 
 
"
A
l
e
r
t
 
s
y
s
t
e
m
 
f
o
r
 
h
i
g
h
-
v
a
l
u
e
 
t
r
a
n
s
a
c
t
i
o
n
s
 
a
t
 
r
i
s
k
"
,


 
 
 
 
 
 
"
G
a
s
 
p
r
i
c
e
 
a
n
a
l
y
s
i
s
 
a
n
d
 
o
p
t
i
m
a
l
 
s
u
b
m
i
s
s
i
o
n
 
t
i
m
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
M
e
m
p
o
o
l
 
m
o
n
i
t
o
r
i
n
g
 
a
n
d
 
t
r
a
n
s
a
c
t
i
o
n
 
a
n
a
l
y
s
i
s
"
,


 
 
 
 
 
 
"
M
E
V
 
(
M
a
x
i
m
a
l
 
E
x
t
r
a
c
t
a
b
l
e
 
V
a
l
u
e
)
 
m
e
c
h
a
n
i
c
s
"
,


 
 
 
 
 
 
"
F
l
a
s
h
b
o
t
s
 
b
u
n
d
l
e
 
s
u
b
m
i
s
s
i
o
n
"
,


 
 
 
 
 
 
"
T
r
a
n
s
a
c
t
i
o
n
 
s
i
m
u
l
a
t
i
o
n
 
w
i
t
h
 
s
t
a
t
e
 
o
v
e
r
r
i
d
e
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
4
-
6
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
F
l
a
s
h
b
o
t
s
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
f
l
a
s
h
b
o
t
s
.
n
e
t
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
E
V
 
E
x
p
l
o
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
x
p
l
o
r
e
.
f
l
a
s
h
b
o
t
s
.
n
e
t
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
M
E
V
"
,
 
"
F
l
a
s
h
b
o
t
s
"
,
 
"
S
e
c
u
r
i
t
y
"
,
 
"
M
e
m
p
o
o
l
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
f
l
a
s
h
b
o
t
s
/
m
e
v
-
s
h
a
r
e
-
c
l
i
e
n
t
-
t
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
4
,


 
 
 
 
t
i
t
l
e
:
 
"
C
r
o
s
s
-
C
h
a
i
n
 
M
e
s
s
a
g
i
n
g
 
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


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
p
r
o
t
o
c
o
l
 
t
h
a
t
 
s
e
n
d
s
 
a
r
b
i
t
r
a
r
y
 
m
e
s
s
a
g
e
s
 
b
e
t
w
e
e
n
 
t
w
o
 
E
V
M
 
c
h
a
i
n
s
.
 
M
e
s
s
a
g
e
s
 
a
r
e
 
v
e
r
i
f
i
e
d
 
u
s
i
n
g
 
a
 
r
e
l
a
y
 
n
e
t
w
o
r
k
 
a
n
d
 
c
a
n
 
t
r
i
g
g
e
r
 
c
o
n
t
r
a
c
t
 
e
x
e
c
u
t
i
o
n
 
o
n
 
t
h
e
 
d
e
s
t
i
n
a
t
i
o
n
 
c
h
a
i
n
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
M
u
l
t
i
-
c
h
a
i
n
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
T
y
p
e
S
c
r
i
p
t
"
,
 
"
C
h
a
i
n
l
i
n
k
 
C
C
I
P
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
S
e
n
d
e
r
 
c
o
n
t
r
a
c
t
 
o
n
 
s
o
u
r
c
e
 
c
h
a
i
n
 
t
h
a
t
 
e
m
i
t
s
 
m
e
s
s
a
g
e
 
e
v
e
n
t
s
"
,


 
 
 
 
 
 
"
R
e
l
a
y
e
r
 
s
e
r
v
i
c
e
 
t
h
a
t
 
w
a
t
c
h
e
s
 
f
o
r
 
e
v
e
n
t
s
 
a
n
d
 
s
u
b
m
i
t
s
 
p
r
o
o
f
s
"
,


 
 
 
 
 
 
"
R
e
c
e
i
v
e
r
 
c
o
n
t
r
a
c
t
 
o
n
 
d
e
s
t
i
n
a
t
i
o
n
 
c
h
a
i
n
 
t
h
a
t
 
v
e
r
i
f
i
e
s
 
a
n
d
 
e
x
e
c
u
t
e
s
"
,


 
 
 
 
 
 
"
M
e
s
s
a
g
e
 
q
u
e
u
e
 
w
i
t
h
 
r
e
t
r
y
 
l
o
g
i
c
 
f
o
r
 
f
a
i
l
e
d
 
d
e
l
i
v
e
r
i
e
s
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
m
e
s
s
a
g
e
 
s
t
a
t
u
s
 
a
c
r
o
s
s
 
c
h
a
i
n
s
"
,


 
 
 
 
 
 
"
F
e
e
 
e
s
t
i
m
a
t
i
o
n
 
f
o
r
 
c
r
o
s
s
-
c
h
a
i
n
 
m
e
s
s
a
g
e
 
d
e
l
i
v
e
r
y
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
C
r
o
s
s
-
c
h
a
i
n
 
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
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
E
v
e
n
t
 
m
o
n
i
t
o
r
i
n
g
 
a
n
d
 
r
e
l
a
y
 
d
e
s
i
g
n
"
,


 
 
 
 
 
 
"
M
e
s
s
a
g
e
 
v
e
r
i
f
i
c
a
t
i
o
n
 
a
n
d
 
r
e
p
l
a
y
 
p
r
o
t
e
c
t
i
o
n
"
,


 
 
 
 
 
 
"
M
u
l
t
i
-
c
h
a
i
n
 
d
e
p
l
o
y
m
e
n
t
 
a
n
d
 
t
e
s
t
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
8
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
h
a
i
n
l
i
n
k
 
C
C
I
P
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
c
h
a
i
n
.
l
i
n
k
/
c
c
i
p
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
a
y
e
r
Z
e
r
o
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
l
a
y
e
r
z
e
r
o
.
n
e
t
w
o
r
k
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
C
r
o
s
s
-
C
h
a
i
n
"
,
 
"
M
e
s
s
a
g
i
n
g
"
,
 
"
I
n
t
e
r
o
p
e
r
a
b
i
l
i
t
y
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
L
a
y
e
r
Z
e
r
o
-
L
a
b
s
/
L
a
y
e
r
Z
e
r
o
-
v
2
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
5
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
n
c
e
n
t
r
a
t
e
d
 
L
i
q
u
i
d
i
t
y
 
A
M
M
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
U
n
i
s
w
a
p
 
V
3
-
s
t
y
l
e
 
A
M
M
 
w
h
e
r
e
 
l
i
q
u
i
d
i
t
y
 
p
r
o
v
i
d
e
r
s
 
c
h
o
o
s
e
 
a
 
s
p
e
c
i
f
i
c
 
p
r
i
c
e
 
r
a
n
g
e
 
f
o
r
 
t
h
e
i
r
 
l
i
q
u
i
d
i
t
y
,
 
d
r
a
m
a
t
i
c
a
l
l
y
 
i
m
p
r
o
v
i
n
g
 
c
a
p
i
t
a
l
 
e
f
f
i
c
i
e
n
c
y
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
D
3
.
j
s
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
T
i
c
k
-
b
a
s
e
d
 
p
r
i
c
e
 
r
a
n
g
e
s
 
f
o
r
 
c
o
n
c
e
n
t
r
a
t
e
d
 
p
o
s
i
t
i
o
n
s
"
,


 
 
 
 
 
 
"
P
o
s
i
t
i
o
n
 
N
F
T
s
 
r
e
p
r
e
s
e
n
t
i
n
g
 
l
i
q
u
i
d
i
t
y
 
r
a
n
g
e
s
"
,


 
 
 
 
 
 
"
D
y
n
a
m
i
c
 
f
e
e
 
a
c
c
u
m
u
l
a
t
i
o
n
 
b
a
s
e
d
 
o
n
 
p
o
s
i
t
i
o
n
 
b
o
u
n
d
s
"
,


 
 
 
 
 
 
"
S
w
a
p
 
r
o
u
t
i
n
g
 
t
h
r
o
u
g
h
 
a
c
t
i
v
e
 
t
i
c
k
 
r
a
n
g
e
s
"
,


 
 
 
 
 
 
"
L
i
q
u
i
d
i
t
y
 
d
e
p
t
h
 
v
i
s
u
a
l
i
z
a
t
i
o
n
 
w
i
t
h
 
D
3
.
j
s
 
c
h
a
r
t
s
"
,


 
 
 
 
 
 
"
P
o
s
i
t
i
o
n
 
m
a
n
a
g
e
m
e
n
t
:
 
a
d
d
,
 
r
e
m
o
v
e
,
 
a
n
d
 
c
o
l
l
e
c
t
 
f
e
e
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
C
o
n
c
e
n
t
r
a
t
e
d
 
l
i
q
u
i
d
i
t
y
 
m
a
t
h
e
m
a
t
i
c
s
"
,


 
 
 
 
 
 
"
T
i
c
k
 
a
n
d
 
p
r
i
c
e
 
r
a
n
g
e
 
m
e
c
h
a
n
i
c
s
"
,


 
 
 
 
 
 
"
F
i
x
e
d
-
p
o
i
n
t
 
m
a
t
h
 
a
t
 
Q
9
6
 
p
r
e
c
i
s
i
o
n
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
x
 
D
e
F
i
 
p
r
o
t
o
c
o
l
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
n
i
s
w
a
p
 
V
3
 
W
h
i
t
e
p
a
p
e
r
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
u
n
i
s
w
a
p
.
o
r
g
/
w
h
i
t
e
p
a
p
e
r
-
v
3
.
p
d
f
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
n
i
s
w
a
p
 
V
3
 
D
e
v
e
l
o
p
m
e
n
t
 
B
o
o
k
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
u
n
i
s
w
a
p
v
3
b
o
o
k
.
c
o
m
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
A
M
M
"
,
 
"
D
e
F
i
"
,
 
"
C
o
n
c
e
n
t
r
a
t
e
d
 
L
i
q
u
i
d
i
t
y
"
,
 
"
U
n
i
s
w
a
p
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
U
n
i
s
w
a
p
/
v
3
-
c
o
r
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
6
,


 
 
 
 
t
i
t
l
e
:
 
"
D
e
c
e
n
t
r
a
l
i
z
e
d
 
O
r
a
c
l
e
 
N
e
t
w
o
r
k
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
s
i
m
p
l
i
f
i
e
d
 
o
r
a
c
l
e
 
t
h
a
t
 
a
g
g
r
e
g
a
t
e
s
 
p
r
i
c
e
 
d
a
t
a
 
f
r
o
m
 
m
u
l
t
i
p
l
e
 
o
f
f
-
c
h
a
i
n
 
s
o
u
r
c
e
s
,
 
r
e
a
c
h
e
s
 
c
o
n
s
e
n
s
u
s
,
 
a
n
d
 
p
o
s
t
s
 
t
h
e
 
r
e
s
u
l
t
 
o
n
-
c
h
a
i
n
 
f
o
r
 
o
t
h
e
r
 
c
o
n
t
r
a
c
t
s
 
t
o
 
c
o
n
s
u
m
e
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
N
o
d
e
.
j
s
"
,
 
"
T
y
p
e
S
c
r
i
p
t
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
O
r
a
c
l
e
 
n
o
d
e
s
 
f
e
t
c
h
 
p
r
i
c
e
s
 
f
r
o
m
 
m
u
l
t
i
p
l
e
 
A
P
I
s
 
(
C
o
i
n
G
e
c
k
o
,
 
C
o
i
n
M
a
r
k
e
t
C
a
p
)
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
a
g
g
r
e
g
a
t
i
o
n
 
c
o
n
t
r
a
c
t
 
t
h
a
t
 
a
c
c
e
p
t
s
 
r
e
p
o
r
t
s
 
f
r
o
m
 
w
h
i
t
e
l
i
s
t
e
d
 
n
o
d
e
s
"
,


 
 
 
 
 
 
"
M
e
d
i
a
n
 
c
a
l
c
u
l
a
t
i
o
n
 
f
o
r
 
p
r
i
c
e
 
c
o
n
s
e
n
s
u
s
"
,


 
 
 
 
 
 
"
H
e
a
r
t
b
e
a
t
 
u
p
d
a
t
e
s
 
a
t
 
r
e
g
u
l
a
r
 
i
n
t
e
r
v
a
l
s
"
,


 
 
 
 
 
 
"
D
e
v
i
a
t
i
o
n
-
t
r
i
g
g
e
r
e
d
 
u
p
d
a
t
e
s
 
f
o
r
 
v
o
l
a
t
i
l
e
 
p
r
i
c
e
 
m
o
v
e
m
e
n
t
s
"
,


 
 
 
 
 
 
"
C
o
n
s
u
m
e
r
 
c
o
n
t
r
a
c
t
 
i
n
t
e
r
f
a
c
e
 
f
o
r
 
r
e
a
d
i
n
g
 
a
g
g
r
e
g
a
t
e
d
 
p
r
i
c
e
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
O
r
a
c
l
e
 
p
r
o
b
l
e
m
 
a
n
d
 
t
r
u
s
t
 
a
s
s
u
m
p
t
i
o
n
s
"
,


 
 
 
 
 
 
"
O
f
f
-
c
h
a
i
n
 
d
a
t
a
 
a
g
g
r
e
g
a
t
i
o
n
 
s
t
r
a
t
e
g
i
e
s
"
,


 
 
 
 
 
 
"
O
n
-
c
h
a
i
n
 
c
o
n
s
e
n
s
u
s
 
m
e
c
h
a
n
i
s
m
s
"
,


 
 
 
 
 
 
"
E
c
o
n
o
m
i
c
 
i
n
c
e
n
t
i
v
e
s
 
f
o
r
 
h
o
n
e
s
t
 
r
e
p
o
r
t
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
5
-
8
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
h
a
i
n
l
i
n
k
 
A
r
c
h
i
t
e
c
t
u
r
e
 
O
v
e
r
v
i
e
w
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
c
h
a
i
n
.
l
i
n
k
/
a
r
c
h
i
t
e
c
t
u
r
e
-
o
v
e
r
v
i
e
w
/
a
r
c
h
i
t
e
c
t
u
r
e
-
o
v
e
r
v
i
e
w
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
M
A
 
O
r
a
c
l
e
 
D
e
s
i
g
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
u
m
a
.
x
y
z
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
O
r
a
c
l
e
"
,
 
"
D
a
t
a
 
F
e
e
d
s
"
,
 
"
I
n
f
r
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
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
m
a
r
t
c
o
n
t
r
a
c
t
k
i
t
/
c
h
a
i
n
l
i
n
k
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
7
,


 
 
 
 
t
i
t
l
e
:
 
"
L
a
y
e
r
-
2
 
R
o
l
l
u
p
 
E
x
p
l
o
r
e
r
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
b
l
o
c
k
 
e
x
p
l
o
r
e
r
 
s
p
e
c
i
f
i
c
a
l
l
y
 
f
o
r
 
L
2
 
r
o
l
l
u
p
s
 
t
h
a
t
 
s
h
o
w
s
 
b
a
t
c
h
 
s
u
b
m
i
s
s
i
o
n
s
,
 
s
t
a
t
e
 
r
o
o
t
s
,
 
c
h
a
l
l
e
n
g
e
 
p
e
r
i
o
d
s
,
 
a
n
d
 
c
r
o
s
s
-
l
a
y
e
r
 
m
e
s
s
a
g
e
 
s
t
a
t
u
s
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
M
u
l
t
i
-
c
h
a
i
n
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
R
e
a
c
t
"
,
 
"
T
y
p
e
S
c
r
i
p
t
"
,
 
"
N
o
d
e
.
j
s
"
,
 
"
P
o
s
t
g
r
e
S
Q
L
"
,
 
"
v
i
e
m
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
I
n
d
e
x
 
L
2
 
b
l
o
c
k
s
,
 
t
r
a
n
s
a
c
t
i
o
n
s
,
 
a
n
d
 
s
t
a
t
e
 
r
o
o
t
s
"
,


 
 
 
 
 
 
"
D
i
s
p
l
a
y
 
b
a
t
c
h
 
s
u
b
m
i
s
s
i
o
n
s
 
t
o
 
L
1
 
w
i
t
h
 
p
r
o
o
f
 
s
t
a
t
u
s
"
,


 
 
 
 
 
 
"
T
r
a
c
k
 
o
p
t
i
m
i
s
t
i
c
 
r
o
l
l
u
p
 
c
h
a
l
l
e
n
g
e
 
p
e
r
i
o
d
s
"
,


 
 
 
 
 
 
"
C
r
o
s
s
-
l
a
y
e
r
 
d
e
p
o
s
i
t
 
a
n
d
 
w
i
t
h
d
r
a
w
a
l
 
s
t
a
t
u
s
"
,


 
 
 
 
 
 
"
C
o
n
t
r
a
c
t
 
i
n
t
e
r
a
c
t
i
o
n
 
p
a
g
e
 
w
i
t
h
 
A
B
I
 
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


 
 
 
 
 
 
"
A
d
d
r
e
s
s
 
p
o
r
t
f
o
l
i
o
 
s
h
o
w
i
n
g
 
L
2
 
t
o
k
e
n
 
b
a
l
a
n
c
e
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
R
o
l
l
u
p
 
a
r
c
h
i
t
e
c
t
u
r
e
 
(
o
p
t
i
m
i
s
t
i
c
 
v
s
 
Z
K
)
"
,


 
 
 
 
 
 
"
S
t
a
t
e
 
r
o
o
t
 
v
e
r
i
f
i
c
a
t
i
o
n
 
a
n
d
 
b
a
t
c
h
 
s
u
b
m
i
s
s
i
o
n
"
,


 
 
 
 
 
 
"
C
h
a
i
n
 
i
n
d
e
x
i
n
g
 
a
n
d
 
d
a
t
a
 
p
i
p
e
l
i
n
e
 
d
e
s
i
g
n
"
,


 
 
 
 
 
 
"
L
1
-
L
2
 
m
e
s
s
a
g
e
 
b
r
i
d
g
e
 
m
e
c
h
a
n
i
c
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
1
0
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
t
i
m
i
s
m
 
D
o
c
s
 
-
 
H
o
w
 
O
p
t
i
m
i
s
m
 
W
o
r
k
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
t
i
m
i
s
m
.
i
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
A
r
b
i
t
r
u
m
 
D
o
c
s
 
-
 
I
n
s
i
d
e
 
A
r
b
i
t
r
u
m
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
a
r
b
i
t
r
u
m
.
i
o
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
L
2
"
,
 
"
E
x
p
l
o
r
e
r
"
,
 
"
R
o
l
l
u
p
"
,
 
"
I
n
f
r
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
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
e
t
h
e
r
e
u
m
-
o
p
t
i
m
i
s
m
/
o
p
t
i
m
i
s
m
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
8
,


 
 
 
 
t
i
t
l
e
:
 
"
P
e
r
p
e
t
u
a
l
 
F
u
t
u
r
e
s
 
D
E
X
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
s
i
m
p
l
i
f
i
e
d
 
p
e
r
p
e
t
u
a
l
 
f
u
t
u
r
e
s
 
e
x
c
h
a
n
g
e
 
w
i
t
h
 
l
e
v
e
r
a
g
e
,
 
f
u
n
d
i
n
g
 
r
a
t
e
s
,
 
a
n
d
 
l
i
q
u
i
d
a
t
i
o
n
.
 
T
r
a
d
e
r
s
 
g
o
 
l
o
n
g
 
o
r
 
s
h
o
r
t
 
o
n
 
a
s
s
e
t
s
 
w
i
t
h
 
u
p
 
t
o
 
1
0
x
 
l
e
v
e
r
a
g
e
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
C
h
a
i
n
l
i
n
k
"
,
 
"
D
3
.
j
s
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
O
p
e
n
 
l
o
n
g
/
s
h
o
r
t
 
p
o
s
i
t
i
o
n
s
 
w
i
t
h
 
c
o
n
f
i
g
u
r
a
b
l
e
 
l
e
v
e
r
a
g
e
 
(
1
-
1
0
x
)
"
,


 
 
 
 
 
 
"
M
a
r
k
 
p
r
i
c
e
 
f
r
o
m
 
C
h
a
i
n
l
i
n
k
 
o
r
a
c
l
e
 
v
s
 
i
n
d
e
x
 
p
r
i
c
e
 
f
o
r
 
P
&
L
"
,


 
 
 
 
 
 
"
F
u
n
d
i
n
g
 
r
a
t
e
 
c
a
l
c
u
l
a
t
i
o
n
 
(
l
o
n
g
s
 
p
a
y
 
s
h
o
r
t
s
 
o
r
 
v
i
c
e
 
v
e
r
s
a
)
"
,


 
 
 
 
 
 
"
A
u
t
o
m
a
t
i
c
 
l
i
q
u
i
d
a
t
i
o
n
 
w
h
e
n
 
m
a
r
g
i
n
 
r
a
t
i
o
 
d
r
o
p
s
 
b
e
l
o
w
 
t
h
r
e
s
h
o
l
d
"
,


 
 
 
 
 
 
"
I
n
s
u
r
a
n
c
e
 
f
u
n
d
 
t
o
 
c
o
v
e
r
 
s
o
c
i
a
l
i
z
e
d
 
l
o
s
s
e
s
"
,


 
 
 
 
 
 
"
T
r
a
d
i
n
g
 
i
n
t
e
r
f
a
c
e
 
w
i
t
h
 
c
a
n
d
l
e
s
t
i
c
k
 
c
h
a
r
t
 
a
n
d
 
o
r
d
e
r
 
b
o
o
k
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
P
e
r
p
e
t
u
a
l
 
f
u
t
u
r
e
s
 
m
e
c
h
a
n
i
c
s
 
a
n
d
 
f
u
n
d
i
n
g
 
r
a
t
e
s
"
,


 
 
 
 
 
 
"
M
a
r
g
i
n
 
a
n
d
 
l
e
v
e
r
a
g
e
 
a
c
c
o
u
n
t
i
n
g
"
,


 
 
 
 
 
 
"
L
i
q
u
i
d
a
t
i
o
n
 
e
n
g
i
n
e
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
R
e
a
l
-
t
i
m
e
 
f
i
n
a
n
c
i
a
l
 
d
a
t
a
 
v
i
s
u
a
l
i
z
a
t
i
o
n
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
G
M
X
 
V
2
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
g
m
x
.
i
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
e
r
p
e
t
u
a
l
 
P
r
o
t
o
c
o
l
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
p
e
r
p
.
c
o
m
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
P
e
r
p
e
t
u
a
l
s
"
,
 
"
D
e
F
i
"
,
 
"
L
e
v
e
r
a
g
e
"
,
 
"
T
r
a
d
i
n
g
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
g
m
x
-
i
o
/
g
m
x
-
s
y
n
t
h
e
t
i
c
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
9
,


 
 
 
 
t
i
t
l
e
:
 
"
A
c
c
o
u
n
t
 
A
b
s
t
r
a
c
t
i
o
n
 
W
a
l
l
e
t
 
(
E
R
C
-
4
3
3
7
)
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
 
w
a
l
l
e
t
 
w
i
t
h
 
s
o
c
i
a
l
 
r
e
c
o
v
e
r
y
,
 
g
a
s
 
s
p
o
n
s
o
r
s
h
i
p
,
 
a
n
d
 
b
a
t
c
h
e
d
 
t
r
a
n
s
a
c
t
i
o
n
s
 
u
s
i
n
g
 
t
h
e
 
E
R
C
-
4
3
3
7
 
s
t
a
n
d
a
r
d
.
 
N
o
 
E
O
A
 
n
e
e
d
e
d
 
t
o
 
g
e
t
 
s
t
a
r
t
e
d
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
P
i
m
l
i
c
o
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
S
m
a
r
t
 
a
c
c
o
u
n
t
 
c
o
n
t
r
a
c
t
 
i
m
p
l
e
m
e
n
t
i
n
g
 
I
A
c
c
o
u
n
t
 
i
n
t
e
r
f
a
c
e
"
,


 
 
 
 
 
 
"
U
s
e
r
O
p
e
r
a
t
i
o
n
 
b
u
n
d
l
i
n
g
 
a
n
d
 
s
u
b
m
i
s
s
i
o
n
 
t
o
 
E
n
t
r
y
P
o
i
n
t
"
,


 
 
 
 
 
 
"
P
a
y
m
a
s
t
e
r
 
f
o
r
 
g
a
s
l
e
s
s
 
t
r
a
n
s
a
c
t
i
o
n
s
 
(
s
p
o
n
s
o
r
 
u
s
e
r
 
g
a
s
 
f
e
e
s
)
"
,


 
 
 
 
 
 
"
S
o
c
i
a
l
 
r
e
c
o
v
e
r
y
:
 
g
u
a
r
d
i
a
n
s
 
c
a
n
 
r
o
t
a
t
e
 
s
i
g
n
i
n
g
 
k
e
y
s
"
,


 
 
 
 
 
 
"
B
a
t
c
h
 
m
u
l
t
i
p
l
e
 
c
o
n
t
r
a
c
t
 
c
a
l
l
s
 
i
n
 
a
 
s
i
n
g
l
e
 
U
s
e
r
O
p
"
,


 
 
 
 
 
 
"
S
e
s
s
i
o
n
 
k
e
y
s
 
f
o
r
 
d
A
p
p
 
p
e
r
m
i
s
s
i
o
n
s
 
w
i
t
h
o
u
t
 
w
a
l
l
e
t
 
p
o
p
u
p
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
E
R
C
-
4
3
3
7
 
a
c
c
o
u
n
t
 
a
b
s
t
r
a
c
t
i
o
n
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
U
s
e
r
O
p
e
r
a
t
i
o
n
 
l
i
f
e
c
y
c
l
e
 
a
n
d
 
v
a
l
i
d
a
t
i
o
n
"
,


 
 
 
 
 
 
"
P
a
y
m
a
s
t
e
r
 
a
n
d
 
g
a
s
 
s
p
o
n
s
o
r
s
h
i
p
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
S
m
a
r
t
 
a
c
c
o
u
n
t
 
s
e
c
u
r
i
t
y
 
a
n
d
 
r
e
c
o
v
e
r
y
 
m
o
d
e
l
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
1
0
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
R
C
-
4
3
3
7
 
S
p
e
c
i
f
i
c
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
e
i
p
s
.
e
t
h
e
r
e
u
m
.
o
r
g
/
E
I
P
S
/
e
i
p
-
4
3
3
7
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
i
m
l
i
c
o
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
p
i
m
l
i
c
o
.
i
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
A
l
c
h
e
m
y
 
A
c
c
o
u
n
t
 
K
i
t
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
a
c
c
o
u
n
t
k
i
t
.
a
l
c
h
e
m
y
.
c
o
m
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
A
c
c
o
u
n
t
 
A
b
s
t
r
a
c
t
i
o
n
"
,
 
"
E
R
C
-
4
3
3
7
"
,
 
"
W
a
l
l
e
t
"
,
 
"
G
a
s
l
e
s
s
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
e
t
h
-
i
n
f
i
n
i
t
i
s
m
/
a
c
c
o
u
n
t
-
a
b
s
t
r
a
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
0
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
-
C
h
a
i
n
 
O
p
t
i
o
n
s
 
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


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
E
u
r
o
p
e
a
n
-
s
t
y
l
e
 
o
p
t
i
o
n
s
 
p
r
o
t
o
c
o
l
 
w
h
e
r
e
 
u
s
e
r
s
 
c
a
n
 
w
r
i
t
e
 
c
o
v
e
r
e
d
 
c
a
l
l
s
 
a
n
d
 
c
a
s
h
-
s
e
c
u
r
e
d
 
p
u
t
s
,
 
w
i
t
h
 
a
u
t
o
m
a
t
e
d
 
s
e
t
t
l
e
m
e
n
t
 
a
t
 
e
x
p
i
r
y
 
u
s
i
n
g
 
o
r
a
c
l
e
 
p
r
i
c
e
s
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
C
h
a
i
n
l
i
n
k
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
W
r
i
t
e
 
c
o
v
e
r
e
d
 
c
a
l
l
 
o
p
t
i
o
n
s
 
(
l
o
c
k
 
c
o
l
l
a
t
e
r
a
l
,
 
m
i
n
t
 
o
p
t
i
o
n
 
t
o
k
e
n
s
)
"
,


 
 
 
 
 
 
"
W
r
i
t
e
 
c
a
s
h
-
s
e
c
u
r
e
d
 
p
u
t
 
o
p
t
i
o
n
s
 
(
l
o
c
k
 
s
t
a
b
l
e
c
o
i
n
s
)
"
,


 
 
 
 
 
 
"
O
p
t
i
o
n
 
t
o
k
e
n
 
t
r
a
d
i
n
g
 
o
n
 
a
 
s
i
m
p
l
e
 
o
r
d
e
r
 
b
o
o
k
"
,


 
 
 
 
 
 
"
A
u
t
o
m
a
t
e
d
 
s
e
t
t
l
e
m
e
n
t
 
a
t
 
e
x
p
i
r
y
 
u
s
i
n
g
 
C
h
a
i
n
l
i
n
k
 
p
r
i
c
e
 
a
t
 
e
x
p
i
r
y
"
,


 
 
 
 
 
 
"
E
x
e
r
c
i
s
e
 
I
T
M
 
o
p
t
i
o
n
s
 
a
n
d
 
c
l
a
i
m
 
p
r
o
f
i
t
"
,


 
 
 
 
 
 
"
G
r
e
e
k
s
 
d
i
s
p
l
a
y
 
(
d
e
l
t
a
,
 
i
m
p
l
i
e
d
 
v
o
l
a
t
i
l
i
t
y
)
 
o
n
 
f
r
o
n
t
e
n
d
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
O
p
t
i
o
n
s
 
p
r
i
c
i
n
g
 
a
n
d
 
p
a
y
o
f
f
 
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


 
 
 
 
 
 
"
C
o
l
l
a
t
e
r
a
l
 
l
o
c
k
i
n
g
 
a
n
d
 
s
e
t
t
l
e
m
e
n
t
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
T
i
m
e
-
d
e
p
e
n
d
e
n
t
 
f
i
n
a
n
c
i
a
l
 
i
n
s
t
r
u
m
e
n
t
s
 
o
n
-
c
h
a
i
n
"
,


 
 
 
 
 
 
"
O
r
a
c
l
e
-
b
a
s
e
d
 
a
u
t
o
m
a
t
e
d
 
s
e
t
t
l
e
m
e
n
t
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
O
p
y
n
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
o
p
y
n
.
c
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
l
a
c
k
-
S
c
h
o
l
e
s
 
o
n
 
E
t
h
e
r
e
u
m
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
v
y
p
e
r
-
p
r
o
t
o
c
o
l
/
v
y
p
e
r
-
o
t
c
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
O
p
t
i
o
n
s
"
,
 
"
D
e
F
i
"
,
 
"
D
e
r
i
v
a
t
i
v
e
s
"
,
 
"
S
e
t
t
l
e
m
e
n
t
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
o
p
y
n
f
i
n
a
n
c
e
/
s
q
u
e
e
t
h
-
m
o
n
o
r
e
p
o
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
1
,


 
 
 
 
t
i
t
l
e
:
 
"
D
e
c
e
n
t
r
a
l
i
z
e
d
 
I
n
s
u
r
a
n
c
e
 
P
o
o
l
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
m
u
t
u
a
l
 
i
n
s
u
r
a
n
c
e
 
p
r
o
t
o
c
o
l
 
w
h
e
r
e
 
u
s
e
r
s
 
s
t
a
k
e
 
i
n
t
o
 
r
i
s
k
 
p
o
o
l
s
 
t
o
 
c
o
v
e
r
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
 
e
x
p
l
o
i
t
s
.
 
C
l
a
i
m
 
a
s
s
e
s
s
o
r
s
 
v
o
t
e
 
o
n
 
p
a
y
o
u
t
s
 
a
n
d
 
s
t
a
k
e
r
s
 
e
a
r
n
 
p
r
e
m
i
u
m
s
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
T
h
e
 
G
r
a
p
h
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
i
n
s
u
r
a
n
c
e
 
p
o
o
l
s
 
f
o
r
 
s
p
e
c
i
f
i
c
 
p
r
o
t
o
c
o
l
s
 
o
r
 
r
i
s
k
 
c
a
t
e
g
o
r
i
e
s
"
,


 
 
 
 
 
 
"
U
s
e
r
s
 
p
u
r
c
h
a
s
e
 
c
o
v
e
r
 
b
y
 
p
a
y
i
n
g
 
p
r
e
m
i
u
m
s
 
i
n
 
E
T
H
 
o
r
 
s
t
a
b
l
e
c
o
i
n
s
"
,


 
 
 
 
 
 
"
S
t
a
k
e
r
s
 
p
r
o
v
i
d
e
 
c
a
p
i
t
a
l
 
a
n
d
 
e
a
r
n
 
p
r
e
m
i
u
m
 
y
i
e
l
d
"
,


 
 
 
 
 
 
"
C
l
a
i
m
 
s
u
b
m
i
s
s
i
o
n
 
w
i
t
h
 
e
v
i
d
e
n
c
e
 
a
n
d
 
o
n
-
c
h
a
i
n
 
v
o
t
i
n
g
 
b
y
 
a
s
s
e
s
s
o
r
s
"
,


 
 
 
 
 
 
"
P
a
y
o
u
t
 
e
x
e
c
u
t
i
o
n
 
a
f
t
e
r
 
s
u
c
c
e
s
s
f
u
l
 
c
l
a
i
m
 
v
o
t
e
"
,


 
 
 
 
 
 
"
C
a
p
i
t
a
l
 
e
f
f
i
c
i
e
n
c
y
:
 
u
n
d
e
r
w
r
i
t
e
 
m
u
l
t
i
p
l
e
 
r
i
s
k
s
 
w
i
t
h
 
s
i
n
g
l
e
 
s
t
a
k
e
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
I
n
s
u
r
a
n
c
e
 
p
r
o
t
o
c
o
l
 
a
r
c
h
i
t
e
c
t
u
r
e
"
,


 
 
 
 
 
 
"
C
a
p
i
t
a
l
 
p
o
o
l
i
n
g
 
a
n
d
 
r
i
s
k
 
m
a
n
a
g
e
m
e
n
t
"
,


 
 
 
 
 
 
"
V
o
t
i
n
g
-
b
a
s
e
d
 
c
l
a
i
m
 
a
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


 
 
 
 
 
 
"
P
r
e
m
i
u
m
 
p
r
i
c
i
n
g
 
a
n
d
 
a
c
t
u
a
r
i
a
l
 
b
a
s
i
c
s
 
o
n
-
c
h
a
i
n
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
N
e
x
u
s
 
M
u
t
u
a
l
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
n
e
x
u
s
m
u
t
u
a
l
.
i
o
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
I
n
s
u
r
A
c
e
 
P
r
o
t
o
c
o
l
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
i
n
s
u
r
a
c
e
.
i
o
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
I
n
s
u
r
a
n
c
e
"
,
 
"
D
e
F
i
"
,
 
"
R
i
s
k
"
,
 
"
S
t
a
k
i
n
g
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
N
e
x
u
s
M
u
t
u
a
l
/
s
m
a
r
t
-
c
o
n
t
r
a
c
t
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
2
,


 
 
 
 
t
i
t
l
e
:
 
"
P
r
e
d
i
c
t
i
o
n
 
M
a
r
k
e
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
d
e
c
e
n
t
r
a
l
i
z
e
d
 
p
r
e
d
i
c
t
i
o
n
 
m
a
r
k
e
t
 
w
h
e
r
e
 
u
s
e
r
s
 
b
e
t
 
o
n
 
r
e
a
l
-
w
o
r
l
d
 
o
u
t
c
o
m
e
s
.
 
M
a
r
k
e
t
s
 
r
e
s
o
l
v
e
 
v
i
a
 
o
r
a
c
l
e
 
f
e
e
d
s
 
o
r
 
d
e
c
e
n
t
r
a
l
i
z
e
d
 
r
e
s
o
l
u
t
i
o
n
 
m
e
c
h
a
n
i
s
m
s
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
U
M
A
"
,
 
"
T
h
e
 
G
r
a
p
h
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
b
i
n
a
r
y
 
m
a
r
k
e
t
s
 
(
Y
e
s
/
N
o
)
 
o
n
 
a
n
y
 
e
v
e
n
t
"
,


 
 
 
 
 
 
"
A
u
t
o
m
a
t
e
d
 
m
a
r
k
e
t
 
m
a
k
e
r
 
f
o
r
 
c
o
n
t
i
n
u
o
u
s
 
p
r
i
c
i
n
g
 
o
f
 
o
u
t
c
o
m
e
s
"
,


 
 
 
 
 
 
"
O
r
a
c
l
e
-
b
a
s
e
d
 
r
e
s
o
l
u
t
i
o
n
 
u
s
i
n
g
 
U
M
A
 
o
p
t
i
m
i
s
t
i
c
 
o
r
a
c
l
e
"
,


 
 
 
 
 
 
"
L
i
q
u
i
d
i
t
y
 
p
r
o
v
i
s
i
o
n
 
f
o
r
 
m
a
r
k
e
t
 
m
a
k
i
n
g
"
,


 
 
 
 
 
 
"
M
a
r
k
e
t
 
p
o
r
t
f
o
l
i
o
 
p
a
g
e
 
s
h
o
w
i
n
g
 
o
p
e
n
 
p
o
s
i
t
i
o
n
s
 
a
n
d
 
P
&
L
"
,


 
 
 
 
 
 
"
M
a
r
k
e
t
 
c
r
e
a
t
i
o
n
 
U
I
 
w
i
t
h
 
r
e
s
o
l
u
t
i
o
n
 
c
r
i
t
e
r
i
a
 
a
n
d
 
d
e
a
d
l
i
n
e
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
P
r
e
d
i
c
t
i
o
n
 
m
a
r
k
e
t
 
m
a
t
h
e
m
a
t
i
c
s
 
(
L
M
S
R
/
C
P
M
M
)
"
,


 
 
 
 
 
 
"
O
p
t
i
m
i
s
t
i
c
 
o
r
a
c
l
e
 
r
e
s
o
l
u
t
i
o
n
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
M
a
r
k
e
t
 
m
a
k
i
n
g
 
a
n
d
 
l
i
q
u
i
d
i
t
y
 
d
y
n
a
m
i
c
s
"
,


 
 
 
 
 
 
"
I
n
f
o
r
m
a
t
i
o
n
 
m
a
r
k
e
t
s
 
a
n
d
 
p
r
i
c
e
 
d
i
s
c
o
v
e
r
y
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
1
0
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
o
l
y
m
a
r
k
e
t
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
p
o
l
y
m
a
r
k
e
t
.
c
o
m
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
M
A
 
O
p
t
i
m
i
s
t
i
c
 
O
r
a
c
l
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
u
m
a
.
x
y
z
/
p
r
o
t
o
c
o
l
-
o
v
e
r
v
i
e
w
/
h
o
w
-
d
o
e
s
-
u
m
a
s
-
o
r
a
c
l
e
-
w
o
r
k
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
P
r
e
d
i
c
t
i
o
n
"
,
 
"
O
r
a
c
l
e
"
,
 
"
D
e
F
i
"
,
 
"
M
a
r
k
e
t
s
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
U
M
A
p
r
o
t
o
c
o
l
/
p
r
o
t
o
c
o
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
3
,


 
 
 
 
t
i
t
l
e
:
 
"
P
r
i
v
a
c
y
 
M
i
x
e
r
 
(
T
o
r
n
a
d
o
-
s
t
y
l
e
)
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
p
r
i
v
a
c
y
 
t
o
o
l
 
t
h
a
t
 
b
r
e
a
k
s
 
t
h
e
 
o
n
-
c
h
a
i
n
 
l
i
n
k
 
b
e
t
w
e
e
n
 
s
e
n
d
e
r
 
a
n
d
 
r
e
c
e
i
v
e
r
 
u
s
i
n
g
 
z
e
r
o
-
k
n
o
w
l
e
d
g
e
 
p
r
o
o
f
s
.
 
U
s
e
r
s
 
d
e
p
o
s
i
t
 
a
 
f
i
x
e
d
 
a
m
o
u
n
t
 
a
n
d
 
w
i
t
h
d
r
a
w
 
t
o
 
a
 
n
e
w
 
a
d
d
r
e
s
s
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
C
i
r
c
o
m
"
,
 
"
S
n
a
r
k
J
S
"
,
 
"
R
e
a
c
t
"
,
 
"
M
e
r
k
l
e
T
r
e
e
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
F
i
x
e
d
-
d
e
n
o
m
i
n
a
t
i
o
n
 
d
e
p
o
s
i
t
s
 
(
0
.
1
,
 
1
,
 
1
0
 
E
T
H
 
p
o
o
l
s
)
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
-
n
u
l
l
i
f
i
e
r
 
s
c
h
e
m
e
 
f
o
r
 
p
r
i
v
a
c
y
"
,


 
 
 
 
 
 
"
M
e
r
k
l
e
 
t
r
e
e
 
o
f
 
c
o
m
m
i
t
m
e
n
t
s
 
s
t
o
r
e
d
 
o
n
-
c
h
a
i
n
"
,


 
 
 
 
 
 
"
Z
K
 
p
r
o
o
f
 
o
f
 
m
e
m
b
e
r
s
h
i
p
 
w
i
t
h
o
u
t
 
r
e
v
e
a
l
i
n
g
 
w
h
i
c
h
 
d
e
p
o
s
i
t
 
i
s
 
y
o
u
r
s
"
,


 
 
 
 
 
 
"
W
i
t
h
d
r
a
w
a
l
 
t
o
 
a
n
y
 
a
d
d
r
e
s
s
 
w
i
t
h
 
o
n
-
c
h
a
i
n
 
p
r
o
o
f
 
v
e
r
i
f
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
"
R
e
l
a
y
e
r
 
s
u
p
p
o
r
t
 
s
o
 
w
i
t
h
d
r
a
w
e
r
 
d
o
e
s
n
'
t
 
n
e
e
d
 
g
a
s
 
o
n
 
n
e
w
 
a
d
d
r
e
s
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
P
r
i
v
a
c
y
 
p
r
o
t
o
c
o
l
 
a
r
c
h
i
t
e
c
t
u
r
e
 
f
r
o
m
 
f
i
r
s
t
 
p
r
i
n
c
i
p
l
e
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
-
n
u
l
l
i
f
i
e
r
 
c
r
y
p
t
o
g
r
a
p
h
i
c
 
s
c
h
e
m
e
"
,


 
 
 
 
 
 
"
I
n
c
r
e
m
e
n
t
a
l
 
M
e
r
k
l
e
 
t
r
e
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
"
,


 
 
 
 
 
 
"
Z
K
 
c
i
r
c
u
i
t
 
d
e
s
i
g
n
 
f
o
r
 
s
e
t
 
m
e
m
b
e
r
s
h
i
p
 
p
r
o
o
f
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
2
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
o
r
n
a
d
o
 
C
a
s
h
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
t
o
r
n
a
d
o
.
w
s
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
e
m
a
p
h
o
r
e
 
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
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
s
e
m
a
p
h
o
r
e
.
p
s
e
.
d
e
v
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
P
r
i
v
a
c
y
"
,
 
"
Z
K
"
,
 
"
M
i
x
e
r
"
,
 
"
C
r
y
p
t
o
g
r
a
p
h
y
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
s
e
m
a
p
h
o
r
e
-
p
r
o
t
o
c
o
l
/
s
e
m
a
p
h
o
r
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
4
,


 
 
 
 
t
i
t
l
e
:
 
"
L
i
q
u
i
d
 
S
t
a
k
i
n
g
 
D
e
r
i
v
a
t
i
v
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
n
 
E
T
H
 
l
i
q
u
i
d
 
s
t
a
k
i
n
g
 
p
r
o
t
o
c
o
l
 
t
h
a
t
 
m
i
n
t
s
 
a
 
r
e
c
e
i
p
t
 
t
o
k
e
n
 
(
s
t
E
T
H
-
l
i
k
e
)
 
r
e
p
r
e
s
e
n
t
i
n
g
 
s
t
a
k
e
d
 
E
T
H
,
 
a
l
l
o
w
i
n
g
 
u
s
e
r
s
 
t
o
 
e
a
r
n
 
s
t
a
k
i
n
g
 
y
i
e
l
d
 
w
h
i
l
e
 
k
e
e
p
i
n
g
 
l
i
q
u
i
d
i
t
y
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
,
 
"
B
e
a
c
o
n
 
C
h
a
i
n
 
A
P
I
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
A
c
c
e
p
t
 
E
T
H
 
d
e
p
o
s
i
t
s
 
a
n
d
 
m
i
n
t
 
p
r
o
p
o
r
t
i
o
n
a
l
 
r
e
c
e
i
p
t
 
t
o
k
e
n
s
 
(
l
s
t
E
T
H
)
"
,


 
 
 
 
 
 
"
R
e
b
a
s
i
n
g
 
o
r
 
e
x
c
h
a
n
g
e
-
r
a
t
e
 
m
o
d
e
l
 
f
o
r
 
y
i
e
l
d
 
a
c
c
r
u
a
l
"
,


 
 
 
 
 
 
"
V
a
l
i
d
a
t
o
r
 
r
e
g
i
s
t
r
a
t
i
o
n
 
v
i
a
 
d
e
p
o
s
i
t
 
c
o
n
t
r
a
c
t
 
(
t
e
s
t
n
e
t
)
"
,


 
 
 
 
 
 
"
W
i
t
h
d
r
a
w
a
l
 
q
u
e
u
e
 
w
i
t
h
 
c
l
a
i
m
 
m
e
c
h
a
n
i
s
m
"
,


 
 
 
 
 
 
"
O
r
a
c
l
e
 
r
e
p
o
r
t
i
n
g
 
o
f
 
b
e
a
c
o
n
 
c
h
a
i
n
 
b
a
l
a
n
c
e
s
"
,


 
 
 
 
 
 
"
D
a
s
h
b
o
a
r
d
 
s
h
o
w
i
n
g
 
T
V
L
,
 
A
P
R
,
 
a
n
d
 
u
s
e
r
 
p
o
s
i
t
i
o
n
s
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
L
i
q
u
i
d
 
s
t
a
k
i
n
g
 
a
r
c
h
i
t
e
c
t
u
r
e
 
a
n
d
 
e
c
o
n
o
m
i
c
s
"
,


 
 
 
 
 
 
"
R
e
b
a
s
i
n
g
 
v
s
 
e
x
c
h
a
n
g
e
-
r
a
t
e
 
t
o
k
e
n
 
m
o
d
e
l
s
"
,


 
 
 
 
 
 
"
B
e
a
c
o
n
 
c
h
a
i
n
 
i
n
t
e
r
a
c
t
i
o
n
 
a
n
d
 
v
a
l
i
d
a
t
o
r
 
m
a
n
a
g
e
m
e
n
t
"
,


 
 
 
 
 
 
"
W
i
t
h
d
r
a
w
a
l
 
q
u
e
u
e
 
d
e
s
i
g
n
 
f
o
r
 
l
a
r
g
e
-
s
c
a
l
e
 
p
r
o
t
o
c
o
l
s
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
8
-
1
4
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
i
d
o
 
A
r
c
h
i
t
e
c
t
u
r
e
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
l
i
d
o
.
f
i
/
g
u
i
d
e
s
/
s
t
e
t
h
-
i
n
t
e
g
r
a
t
i
o
n
-
g
u
i
d
e
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
o
c
k
e
t
 
P
o
o
l
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
r
o
c
k
e
t
p
o
o
l
.
n
e
t
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
L
i
q
u
i
d
 
S
t
a
k
i
n
g
"
,
 
"
D
e
F
i
"
,
 
"
E
T
H
"
,
 
"
Y
i
e
l
d
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
l
i
d
o
f
i
n
a
n
c
e
/
l
i
d
o
-
d
a
o
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
5
,


 
 
 
 
t
i
t
l
e
:
 
"
A
u
t
o
n
o
m
o
u
s
 
T
r
a
d
i
n
g
 
A
g
e
n
t
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
n
 
o
n
-
c
h
a
i
n
 
t
r
a
d
i
n
g
 
b
o
t
 
t
h
a
t
 
e
x
e
c
u
t
e
s
 
D
C
A
 
(
d
o
l
l
a
r
-
c
o
s
t
 
a
v
e
r
a
g
i
n
g
)
 
a
n
d
 
l
i
m
i
t
 
o
r
d
e
r
 
s
t
r
a
t
e
g
i
e
s
 
v
i
a
 
G
e
l
a
t
o
 
o
r
 
C
h
a
i
n
l
i
n
k
 
A
u
t
o
m
a
t
i
o
n
,
 
f
u
l
l
y
 
n
o
n
-
c
u
s
t
o
d
i
a
l
.
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
e
c
o
s
y
s
t
e
m
:
 
"
E
t
h
e
r
e
u
m
"
,


 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
F
o
u
n
d
r
y
"
,
 
"
G
e
l
a
t
o
"
,
 
"
R
e
a
c
t
"
,
 
"
w
a
g
m
i
"
]
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
D
C
A
 
s
t
r
a
t
e
g
y
:
 
a
u
t
o
-
b
u
y
 
a
 
t
o
k
e
n
 
a
t
 
r
e
g
u
l
a
r
 
i
n
t
e
r
v
a
l
s
"
,


 
 
 
 
 
 
"
L
i
m
i
t
 
o
r
d
e
r
s
:
 
e
x
e
c
u
t
e
 
s
w
a
p
 
w
h
e
n
 
p
r
i
c
e
 
h
i
t
s
 
t
a
r
g
e
t
"
,


 
 
 
 
 
 
"
S
t
o
p
-
l
o
s
s
:
 
a
u
t
o
-
s
e
l
l
 
i
f
 
p
r
i
c
e
 
d
r
o
p
s
 
b
e
l
o
w
 
t
h
r
e
s
h
o
l
d
"
,


 
 
 
 
 
 
"
G
e
l
a
t
o
/
C
h
a
i
n
l
i
n
k
 
A
u
t
o
m
a
t
i
o
n
 
f
o
r
 
k
e
e
p
e
r
-
b
a
s
e
d
 
e
x
e
c
u
t
i
o
n
"
,


 
 
 
 
 
 
"
S
t
r
a
t
e
g
y
 
v
a
u
l
t
:
 
u
s
e
r
s
 
d
e
p
o
s
i
t
 
a
n
d
 
c
o
n
f
i
g
u
r
e
 
p
a
r
a
m
e
t
e
r
s
"
,


 
 
 
 
 
 
"
E
x
e
c
u
t
i
o
n
 
h
i
s
t
o
r
y
 
a
n
d
 
P
&
L
 
t
r
a
c
k
i
n
g
 
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
]
,


 
 
 
 
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
:
 
[


 
 
 
 
 
 
"
A
u
t
o
m
a
t
e
d
 
c
o
n
t
r
a
c
t
 
e
x
e
c
u
t
i
o
n
 
p
a
t
t
e
r
n
s
"
,


 
 
 
 
 
 
"
K
e
e
p
e
r
 
n
e
t
w
o
r
k
 
i
n
t
e
g
r
a
t
i
o
n
 
(
G
e
l
a
t
o
,
 
C
h
a
i
n
l
i
n
k
 
K
e
e
p
e
r
s
)
"
,


 
 
 
 
 
 
"
D
C
A
 
a
n
d
 
l
i
m
i
t
 
o
r
d
e
r
 
m
e
c
h
a
n
i
c
s
 
o
n
-
c
h
a
i
n
"
,


 
 
 
 
 
 
"
N
o
n
-
c
u
s
t
o
d
i
a
l
 
s
t
r
a
t
e
g
y
 
v
a
u
l
t
 
d
e
s
i
g
n
"
,


 
 
 
 
]
,


 
 
 
 
e
s
t
i
m
a
t
e
d
T
i
m
e
:
 
"
6
-
8
 
w
e
e
k
s
"
,


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
[


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
G
e
l
a
t
o
 
A
u
t
o
m
a
t
e
 
D
o
c
s
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
g
e
l
a
t
o
.
n
e
t
w
o
r
k
/
w
e
b
3
-
s
e
r
v
i
c
e
s
/
w
e
b
3
-
f
u
n
c
t
i
o
n
s
"
 
}
,


 
 
 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
h
a
i
n
l
i
n
k
 
A
u
t
o
m
a
t
i
o
n
"
,
 
u
r
l
:
 
"
h
t
t
p
s
:
/
/
d
o
c
s
.
c
h
a
i
n
.
l
i
n
k
/
c
h
a
i
n
l
i
n
k
-
a
u
t
o
m
a
t
i
o
n
"
 
}
,


 
 
 
 
]
,


 
 
 
 
t
a
g
s
:
 
[
"
A
u
t
o
m
a
t
i
o
n
"
,
 
"
T
r
a
d
i
n
g
"
,
 
"
D
e
F
i
"
,
 
"
K
e
e
p
e
r
s
"
]
,


 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
g
e
l
a
t
o
d
i
g
i
t
a
l
/
a
u
t
o
m
a
t
e
"
,


 
 
}
,


]
;




c
o
n
s
t
 
E
C
O
S
Y
S
T
E
M
S
 
=
 
A
r
r
a
y
.
f
r
o
m
(
n
e
w
 
S
e
t
(
P
R
O
J
E
C
T
S
.
m
a
p
(
(
p
)
 
=
>
 
p
.
e
c
o
s
y
s
t
e
m
)
)
)
.
s
o
r
t
(
)
;




/
/
 
─
─
─
 
P
r
o
j
e
c
t
 
C
a
r
d
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


f
u
n
c
t
i
o
n
 
P
r
o
j
e
c
t
C
a
r
d
(
{
 
p
r
o
j
e
c
t
,
 
i
n
d
e
x
 
}
:
 
{
 
p
r
o
j
e
c
t
:
 
P
r
o
j
e
c
t
I
d
e
a
;
 
i
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
 
}
)
 
{


 
 
c
o
n
s
t
 
[
e
x
p
a
n
d
e
d
,
 
s
e
t
E
x
p
a
n
d
e
d
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
c
f
g
 
=
 
D
I
F
F
I
C
U
L
T
Y
_
C
O
N
F
I
G
[
p
r
o
j
e
c
t
.
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
]
;


 
 
c
o
n
s
t
 
D
i
f
f
I
c
o
n
 
=
 
c
f
g
.
i
c
o
n
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
3
,
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
l
g
 
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
a
y
-
1
0
0
/
5
0
 
d
a
r
k
:
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
a
y
-
9
0
0
/
5
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
"


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
4
 
p
x
-
5
 
p
y
-
4
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
E
x
p
a
n
d
e
d
(
!
e
x
p
a
n
d
e
d
)
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
9
 
h
-
9
 
r
o
u
n
d
e
d
-
x
l
 
$
{
c
f
g
.
b
g
}
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
`
}
>


 
 
 
 
 
 
 
 
 
 
<
D
i
f
f
I
c
o
n
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
4
 
h
-
4
 
$
{
c
f
g
.
c
o
l
o
r
}
`
}
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
1
"
>
{
p
r
o
j
e
c
t
.
t
i
t
l
e
}
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
l
i
n
e
-
c
l
a
m
p
-
2
"
>
{
p
r
o
j
e
c
t
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
$
{
c
f
g
.
b
g
}
 
$
{
c
f
g
.
c
o
l
o
r
}
`
}
>
{
p
r
o
j
e
c
t
.
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
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
"
>
{
p
r
o
j
e
c
t
.
e
c
o
s
y
s
t
e
m
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
e
s
t
i
m
a
t
e
d
T
i
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
n
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
1
 
t
r
a
n
s
i
t
i
o
n
-
t
r
a
n
s
f
o
r
m
 
d
u
r
a
t
i
o
n
-
2
0
0
 
$
{
e
x
p
a
n
d
e
d
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"
}
`
}
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
E
x
p
a
n
d
e
d
 
c
o
n
t
e
n
t
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
b
-
5
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
p
t
-
4
"
 
/
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
e
c
h
 
S
t
a
c
k
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
m
b
-
2
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
e
r
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
e
c
h
 
S
t
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
t
e
c
h
S
t
a
c
k
.
m
a
p
(
(
t
e
c
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
t
e
c
h
}
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
s
 
t
o
 
B
u
i
l
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
m
b
-
2
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
e
a
t
u
r
e
s
 
t
o
 
B
u
i
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
f
e
a
t
u
r
e
s
.
m
a
p
(
(
f
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
.
5
 
h
-
1
.
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
6
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
e
a
r
n
i
n
g
 
O
u
t
c
o
m
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
m
b
-
2
"
>
W
h
a
t
 
Y
o
u
'
l
l
 
L
e
a
r
n
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
l
e
a
r
n
i
n
g
O
u
t
c
o
m
e
s
.
m
a
p
(
(
l
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
Z
a
p
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
r
c
h
i
t
e
c
t
u
r
e
 
&
 
S
o
u
r
c
e
 
C
o
d
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
g
i
t
h
u
b
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
m
b
-
2
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
r
c
h
i
t
e
c
t
u
r
e
 
R
e
f
e
r
e
n
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
p
r
o
j
e
c
t
.
g
i
t
h
u
b
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
r
u
n
c
a
t
e
"
>
{
p
r
o
j
e
c
t
.
g
i
t
h
u
b
U
r
l
.
r
e
p
l
a
c
e
(
"
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
"
,
 
"
"
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
 
s
h
r
i
n
k
-
0
 
m
l
-
a
u
t
o
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
o
u
r
c
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
r
e
s
o
u
r
c
e
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
m
b
-
2
"
>
R
e
s
o
u
r
c
e
s
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
r
e
s
o
u
r
c
e
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
a
g
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
p
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
.
t
a
g
s
.
m
a
p
(
(
t
a
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
t
a
g
}
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




/
/
 
─
─
─
 
P
a
g
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
P
r
o
j
e
c
t
I
d
e
a
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
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
F
i
l
t
e
r
,
 
s
e
t
D
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
]
 
=
 
u
s
e
S
t
a
t
e
<
D
i
f
f
i
c
u
l
t
y
 
|
 
"
A
L
L
"
>
(
"
A
L
L
"
)
;


 
 
c
o
n
s
t
 
[
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
,
 
s
e
t
E
c
o
s
y
s
t
e
m
F
i
l
t
e
r
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
>
(
"
A
L
L
"
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
P
R
O
J
E
C
T
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
p
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
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
F
i
l
t
e
r
 
!
=
=
 
"
A
L
L
"
 
&
&
 
p
.
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
 
!
=
=
 
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
F
i
l
t
e
r
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
 
!
=
=
 
"
A
L
L
"
 
&
&
 
p
.
e
c
o
s
y
s
t
e
m
 
!
=
=
 
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
s
e
a
r
c
h
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
p
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
p
.
d
e
s
c
r
i
p
t
i
o
n
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
p
.
t
e
c
h
S
t
a
c
k
.
s
o
m
e
(
(
t
)
 
=
>
 
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
)
 
|
|


 
 
 
 
 
 
 
 
 
 
p
.
t
a
g
s
.
s
o
m
e
(
(
t
)
 
=
>
 
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
)


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
 
t
r
u
e
;


 
 
 
 
}
)
;


 
 
}
,
 
[
s
e
a
r
c
h
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
F
i
l
t
e
r
,
 
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
]
)
;




 
 
c
o
n
s
t
 
c
o
u
n
t
s
 
=
 
{


 
 
 
 
B
e
g
i
n
n
e
r
:
 
P
R
O
J
E
C
T
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
p
)
 
=
>
 
p
.
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
 
=
=
=
 
"
B
e
g
i
n
n
e
r
"
)
.
l
e
n
g
t
h
,


 
 
 
 
I
n
t
e
r
m
e
d
i
a
t
e
:
 
P
R
O
J
E
C
T
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
p
)
 
=
>
 
p
.
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
 
=
=
=
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
)
.
l
e
n
g
t
h
,


 
 
 
 
A
d
v
a
n
c
e
d
:
 
P
R
O
J
E
C
T
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
p
)
 
=
>
 
p
.
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
 
=
=
=
 
"
A
d
v
a
n
c
e
d
"
)
.
l
e
n
g
t
h
,


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
B
l
o
c
k
c
h
a
i
n
 
P
r
o
j
e
c
t
 
I
d
e
a
s
 
f
o
r
 
S
t
u
d
e
n
t
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
E
x
p
l
o
r
e
 
i
n
n
o
v
a
t
i
v
e
 
b
l
o
c
k
c
h
a
i
n
 
a
n
d
 
w
e
b
3
 
p
r
o
j
e
c
t
 
i
d
e
a
s
 
f
o
r
 
s
t
u
d
e
n
t
s
.
 
D
e
F
i
,
 
N
F
T
,
 
D
A
O
,
 
a
n
d
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
 
p
r
o
j
e
c
t
 
i
n
s
p
i
r
a
t
i
o
n
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
b
l
o
c
k
c
h
a
i
n
 
p
r
o
j
e
c
t
s
,
 
w
e
b
3
 
p
r
o
j
e
c
t
 
i
d
e
a
s
,
 
D
e
F
i
 
p
r
o
j
e
c
t
s
,
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
 
p
r
o
j
e
c
t
s
,
 
s
t
u
d
e
n
t
 
p
r
o
j
e
c
t
s
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
s
t
u
d
e
n
t
/
g
r
a
n
t
s
/
p
r
o
j
e
c
t
s
"
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
1
0
 
m
t
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
l
e
a
r
n
"
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
m
b
-
4
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
L
e
a
r
n
i
n
g
 
H
u
b


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>




 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
B
l
o
c
k
c
h
a
i
n
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
d
i
e
n
t
-
a
c
c
e
n
t
"
>
P
r
o
j
e
c
t
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
a
x
-
w
-
l
g
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
{
P
R
O
J
E
C
T
S
.
l
e
n
g
t
h
}
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
 
p
r
o
j
e
c
t
s
 
f
r
o
m
 
b
e
g
i
n
n
e
r
 
t
o
 
a
d
v
a
n
c
e
d
 
-
 
p
i
c
k
 
o
n
e
 
a
n
d
 
s
t
a
r
t
 
b
u
i
l
d
i
n
g


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
4
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
(
[
"
B
e
g
i
n
n
e
r
"
,
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
,
 
"
A
d
v
a
n
c
e
d
"
]
 
a
s
 
D
i
f
f
i
c
u
l
t
y
[
]
)
.
m
a
p
(
(
d
i
f
f
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
f
g
 
=
 
D
I
F
F
I
C
U
L
T
Y
_
C
O
N
F
I
G
[
d
i
f
f
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
D
i
f
f
I
c
o
n
 
=
 
c
f
g
.
i
c
o
n
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
d
i
f
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
p
-
5
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
i
f
f
I
c
o
n
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
6
 
h
-
6
 
$
{
c
f
g
.
c
o
l
o
r
}
 
m
x
-
a
u
t
o
 
m
b
-
3
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
c
o
u
n
t
s
[
d
i
f
f
]
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
f
o
n
t
-
m
e
d
i
u
m
 
m
t
-
0
.
5
"
>
{
d
i
f
f
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
+
 
F
i
l
t
e
r
s
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
,
 
d
e
l
a
y
:
 
0
.
1
5
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
4
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
p
r
o
j
e
c
t
s
 
-
 
D
E
X
,
 
N
F
T
,
 
s
t
a
k
i
n
g
,
 
o
r
a
c
l
e
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
a
r
c
h
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
l
-
1
1
 
p
r
-
5
 
p
y
-
3
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
a
m
b
e
r
-
5
0
0
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
a
m
b
e
r
-
3
0
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
 
c
h
i
p
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
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
F
i
l
t
e
r
 
=
=
=
 
"
A
L
L
"
 
?
 
"
m
o
n
o
"
 
:
 
"
o
u
t
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
D
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
(
"
A
L
L
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
A
l
l
 
L
e
v
e
l
s


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
{
(
[
"
B
e
g
i
n
n
e
r
"
,
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
,
 
"
A
d
v
a
n
c
e
d
"
]
 
a
s
 
D
i
f
f
i
c
u
l
t
y
[
]
)
.
m
a
p
(
(
d
i
f
f
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
d
i
f
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
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
F
i
l
t
e
r
 
=
=
=
 
d
i
f
f
 
?
 
"
m
o
n
o
"
 
:
 
"
o
u
t
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
D
i
f
f
i
c
u
l
t
y
F
i
l
t
e
r
(
d
i
f
f
 
=
=
=
 
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
F
i
l
t
e
r
 
?
 
"
A
L
L
"
 
:
 
d
i
f
f
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
i
f
f
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
E
c
o
s
y
s
t
e
m
F
i
l
t
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
a
m
b
e
r
-
5
0
0
/
2
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
L
L
"
>
A
l
l
 
E
c
o
s
y
s
t
e
m
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
E
C
O
S
Y
S
T
E
M
S
.
m
a
p
(
(
e
c
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
e
c
o
}
 
v
a
l
u
e
=
{
e
c
o
}
>
{
e
c
o
}
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
}
<
/
s
p
a
n
>
 
p
r
o
j
e
c
t
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
C
a
r
d
s
 
*
/
}


 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
2
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
m
x
-
a
u
t
o
 
m
b
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
N
o
 
p
r
o
j
e
c
t
s
 
f
o
u
n
d
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
>
T
r
y
 
a
d
j
u
s
t
i
n
g
 
y
o
u
r
 
s
e
a
r
c
h
 
o
r
 
f
i
l
t
e
r
s
.
<
/
p
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
m
a
p
(
(
p
r
o
j
e
c
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
P
r
o
j
e
c
t
C
a
r
d
 
k
e
y
=
{
p
r
o
j
e
c
t
.
i
d
}
 
p
r
o
j
e
c
t
=
{
p
r
o
j
e
c
t
}
 
i
n
d
e
x
=
{
i
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


