
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
a
t
t
e
r
n
 
p
a
l
e
t
t
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
P
a
t
t
e
r
n
 
=


 
 
|
 
"
s
l
i
d
i
n
g
-
w
i
n
d
o
w
"
 
|
 
"
t
w
o
-
p
o
i
n
t
e
r
s
"
 
|
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
"
 
|
 
"
b
f
s
"
 
|
 
"
d
f
s
"


 
 
|
 
"
d
p
"
 
|
 
"
g
r
e
e
d
y
"
 
|
 
"
s
t
a
c
k
-
q
u
e
u
e
"
 
|
 
"
h
a
s
h
i
n
g
"
 
|
 
"
d
i
v
i
d
e
-
c
o
n
q
u
e
r
"
;




c
o
n
s
t
 
P
A
T
T
E
R
N
S
:
 
{
 
i
d
:
 
P
a
t
t
e
r
n
;
 
l
a
b
e
l
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
 
h
i
n
t
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
 
=
 
[


 
 
{
 
i
d
:
 
"
s
l
i
d
i
n
g
-
w
i
n
d
o
w
"
,
 
l
a
b
e
l
:
 
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
"
,
 
 
 
 
c
o
l
o
r
:
 
"
#
8
b
5
c
f
6
"
,
 
h
i
n
t
:
 
"
c
o
n
t
i
g
u
o
u
s
 
s
u
b
a
r
r
a
y
/
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
a
 
m
o
v
i
n
g
 
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
"
 
}
,


 
 
{
 
i
d
:
 
"
t
w
o
-
p
o
i
n
t
e
r
s
"
,
 
 
 
l
a
b
e
l
:
 
"
T
w
o
 
P
o
i
n
t
e
r
s
"
,
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
0
6
b
6
d
4
"
,
 
h
i
n
t
:
 
"
s
o
r
t
e
d
 
a
r
r
a
y
,
 
p
a
i
r
/
t
r
i
p
l
e
 
w
i
t
h
 
a
 
t
a
r
g
e
t
,
 
i
n
-
p
l
a
c
e
 
r
e
a
r
r
a
n
g
e
"
 
}
,


 
 
{
 
i
d
:
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
"
,
 
 
l
a
b
e
l
:
 
"
B
i
n
a
r
y
 
S
e
a
r
c
h
"
,
 
 
 
 
 
c
o
l
o
r
:
 
"
#
3
b
8
2
f
6
"
,
 
h
i
n
t
:
 
"
s
o
r
t
e
d
 
d
a
t
a
 
O
R
 
m
o
n
o
t
o
n
i
c
 
f
e
a
s
i
b
i
l
i
t
y
 
o
v
e
r
 
a
n
 
a
n
s
w
e
r
 
r
a
n
g
e
"
 
}
,


 
 
{
 
i
d
:
 
"
b
f
s
"
,
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
B
F
S
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
1
0
b
9
8
1
"
,
 
h
i
n
t
:
 
"
s
h
o
r
t
e
s
t
 
p
a
t
h
 
(
u
n
i
t
 
w
e
i
g
h
t
s
)
,
 
l
e
v
e
l
-
o
r
d
e
r
,
 
m
i
n
i
m
u
m
 
s
t
e
p
s
"
 
}
,


 
 
{
 
i
d
:
 
"
d
f
s
"
,
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
D
F
S
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
0
5
9
6
6
9
"
,
 
h
i
n
t
:
 
"
e
x
h
a
u
s
t
i
v
e
 
e
x
p
l
o
r
e
,
 
c
o
n
n
e
c
t
e
d
 
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
,
 
c
y
c
l
e
s
,
 
b
a
c
k
t
r
a
c
k
i
n
g
"
 
}
,


 
 
{
 
i
d
:
 
"
d
p
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
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
.
"
,
 
 
 
 
 
c
o
l
o
r
:
 
"
#
f
5
9
e
0
b
"
,
 
h
i
n
t
:
 
"
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
s
t
r
u
c
t
u
r
e
 
+
 
o
v
e
r
l
a
p
p
i
n
g
 
s
u
b
p
r
o
b
l
e
m
s
 
(
c
o
u
n
t
,
 
m
i
n
,
 
m
a
x
)
"
 
}
,


 
 
{
 
i
d
:
 
"
g
r
e
e
d
y
"
,
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
G
r
e
e
d
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
#
f
b
b
f
2
4
"
,
 
h
i
n
t
:
 
"
l
o
c
a
l
 
o
p
t
i
m
a
l
 
c
h
o
i
c
e
 
p
r
o
v
e
n
 
t
o
 
r
e
a
c
h
 
g
l
o
b
a
l
 
o
p
t
i
m
u
m
"
 
}
,


 
 
{
 
i
d
:
 
"
s
t
a
c
k
-
q
u
e
u
e
"
,
 
 
 
 
l
a
b
e
l
:
 
"
S
t
a
c
k
 
/
 
Q
u
e
u
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
#
e
f
4
4
4
4
"
,
 
h
i
n
t
:
 
"
L
I
F
O
 
b
r
a
c
k
e
t
s
 
/
 
m
o
n
o
t
o
n
i
c
 
n
e
x
t
-
g
r
e
a
t
e
r
 
/
 
B
F
S
 
f
r
o
n
t
i
e
r
"
 
}
,


 
 
{
 
i
d
:
 
"
h
a
s
h
i
n
g
"
,
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
H
a
s
h
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
#
e
c
4
8
9
9
"
,
 
h
i
n
t
:
 
"
O
(
1
)
 
l
o
o
k
u
p
,
 
c
o
u
n
t
i
n
g
,
 
d
e
-
d
u
p
l
i
c
a
t
i
o
n
,
 
'
s
e
e
n
'
 
s
e
t
s
"
 
}
,


 
 
{
 
i
d
:
 
"
d
i
v
i
d
e
-
c
o
n
q
u
e
r
"
,
 
l
a
b
e
l
:
 
"
D
i
v
i
d
e
 
&
 
C
o
n
q
u
e
r
"
,
 
 
c
o
l
o
r
:
 
"
#
6
4
7
4
8
b
"
,
 
h
i
n
t
:
 
"
s
p
l
i
t
 
i
n
 
h
a
l
v
e
s
,
 
s
o
l
v
e
,
 
c
o
m
b
i
n
e
 
(
m
e
r
g
e
 
s
o
r
t
,
 
m
a
j
o
r
i
t
y
 
e
l
e
m
e
n
t
)
"
 
}
,


]
;




c
o
n
s
t
 
P
A
L
E
T
T
E
_
I
D
S
 
=
 
n
e
w
 
S
e
t
<
P
a
t
t
e
r
n
>
(
P
A
T
T
E
R
N
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
i
d
)
)
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
r
o
b
l
e
m
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
A
p
p
r
o
a
c
h
 
{


 
 
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
:
 
s
t
r
i
n
g
;


 
 
s
k
e
t
c
h
:
 
s
t
r
i
n
g
;


 
 
b
e
s
t
?
:
 
b
o
o
l
e
a
n
;


}




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
b
l
e
m
 
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


 
 
s
t
a
t
e
m
e
n
t
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
r
r
e
c
t
P
a
t
t
e
r
n
s
:
 
P
a
t
t
e
r
n
[
]
;


 
 
a
p
p
r
o
a
c
h
e
s
:
 
A
p
p
r
o
a
c
h
[
]
;


 
 
e
d
g
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


}




c
o
n
s
t
 
P
R
O
B
L
E
M
S
:
 
P
r
o
b
l
e
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
w
o
-
s
u
m
"
,


 
 
 
 
t
i
t
l
e
:
 
"
T
w
o
 
S
u
m
"
,


 
 
 
 
s
t
a
t
e
m
e
n
t
:
 
"
G
i
v
e
n
 
a
n
 
a
r
r
a
y
 
o
f
 
i
n
t
e
g
e
r
s
 
n
u
m
s
 
a
n
d
 
a
n
 
i
n
t
e
g
e
r
 
t
a
r
g
e
t
,
 
r
e
t
u
r
n
 
i
n
d
i
c
e
s
 
o
f
 
t
h
e
 
t
w
o
 
n
u
m
b
e
r
s
 
t
h
a
t
 
a
d
d
 
u
p
 
t
o
 
t
a
r
g
e
t
.
 
E
x
a
c
t
l
y
 
o
n
e
 
s
o
l
u
t
i
o
n
;
 
y
o
u
 
m
a
y
 
n
o
t
 
r
e
u
s
e
 
t
h
e
 
s
a
m
e
 
e
l
e
m
e
n
t
 
t
w
i
c
e
.
"
,


 
 
 
 
c
o
r
r
e
c
t
P
a
t
t
e
r
n
s
:
 
[
"
h
a
s
h
i
n
g
"
]
,


 
 
 
 
a
p
p
r
o
a
c
h
e
s
:
 
[


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
B
r
u
t
e
 
f
o
r
c
e
"
,
 
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
:
 
"
O
(
n
²
)
 
t
i
m
e
,
 
O
(
1
)
 
s
p
a
c
e
"
,
 
s
k
e
t
c
h
:
 
"
T
r
y
 
e
v
e
r
y
 
p
a
i
r
 
(
i
,
 
j
)
.
"
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
S
o
r
t
 
+
 
t
w
o
 
p
o
i
n
t
e
r
s
"
,
 
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
:
 
"
O
(
n
 
l
o
g
 
n
)
 
t
i
m
e
,
 
O
(
n
)
 
s
p
a
c
e
"
,
 
s
k
e
t
c
h
:
 
"
S
o
r
t
 
(
i
n
d
e
x
,
 
v
a
l
u
e
)
.
 
P
o
i
n
t
e
r
s
 
f
r
o
m
 
b
o
t
h
 
e
n
d
s
 
c
o
n
v
e
r
g
e
 
t
o
w
a
r
d
 
t
a
r
g
e
t
.
"
 
}
,


 
 
 
 
 
 
{
 
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
 
m
a
p
"
,
 
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
:
 
"
O
(
n
)
 
t
i
m
e
,
 
O
(
n
)
 
s
p
a
c
e
"
,
 
s
k
e
t
c
h
:
 
"
F
o
r
 
e
a
c
h
 
i
,
 
c
h
e
c
k
 
i
f
 
t
a
r
g
e
t
 
-
 
n
u
m
s
[
i
]
 
h
a
s
 
b
e
e
n
 
s
e
e
n
;
 
e
l
s
e
 
r
e
c
o
r
d
 
n
u
m
s
[
i
]
 
-
>
 
i
.
"
,
 
b
e
s
t
:
 
t
r
u
e
 
}
,


 
 
 
 
]
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
"
D
u
p
l
i
c
a
t
e
 
v
a
l
u
e
s
 
i
n
 
t
h
e
 
a
r
r
a
y
 
(
e
.
g
.
 
t
a
r
g
e
t
 
=
 
2
*
x
)
"
,


 
 
 
 
 
 
"
N
e
g
a
t
i
v
e
 
n
u
m
b
e
r
s
"
,


 
 
 
 
 
 
"
E
m
p
t
y
 
a
r
r
a
y
 
o
r
 
f
e
w
e
r
 
t
h
a
n
 
2
 
e
l
e
m
e
n
t
s
"
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
s
h
o
r
t
e
s
t
-
b
r
i
d
g
e
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
h
o
r
t
e
s
t
 
B
r
i
d
g
e
 
B
e
t
w
e
e
n
 
T
w
o
 
I
s
l
a
n
d
s
"
,


 
 
 
 
s
t
a
t
e
m
e
n
t
:
 
"
B
i
n
a
r
y
 
g
r
i
d
 
w
i
t
h
 
e
x
a
c
t
l
y
 
t
w
o
 
i
s
l
a
n
d
s
 
(
c
o
n
n
e
c
t
e
d
 
4
-
d
i
r
e
c
t
i
o
n
a
l
 
g
r
o
u
p
s
 
o
f
 
1
s
)
.
 
R
e
t
u
r
n
 
t
h
e
 
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
0
-
c
e
l
l
s
 
t
o
 
f
l
i
p
 
s
o
 
t
h
e
 
t
w
o
 
i
s
l
a
n
d
s
 
a
r
e
 
c
o
n
n
e
c
t
e
d
.
"
,


 
 
 
 
c
o
r
r
e
c
t
P
a
t
t
e
r
n
s
:
 
[
"
d
f
s
"
,
 
"
b
f
s
"
]
,


 
 
 
 
a
p
p
r
o
a
c
h
e
s
:
 
[


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
B
r
u
t
e
 
f
o
r
c
e
"
,
 
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
:
 
"
O
(
(
R
C
)
²
)
"
,
 
s
k
e
t
c
h
:
 
"
F
o
r
 
e
v
e
r
y
 
p
a
i
r
 
o
f
 
i
s
l
a
n
d
 
c
e
l
l
s
,
 
B
F
S
 
t
h
e
 
g
r
i
d
,
 
t
o
o
 
s
l
o
w
.
"
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
D
F
S
 
m
a
r
k
 
o
n
e
 
i
s
l
a
n
d
 
+
 
m
u
l
t
i
-
s
o
u
r
c
e
 
B
F
S
"
,
 
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
:
 
"
O
(
R
*
C
)
"
,
 
s
k
e
t
c
h
:
 
"
D
F
S
 
f
l
o
o
d
-
f
i
l
l
 
i
s
l
a
n
d
 
A
 
i
n
t
o
 
a
 
q
u
e
u
e
.
 
T
h
e
n
 
m
u
l
t
i
-
s
o
u
r
c
e
 
B
F
S
 
f
r
o
m
 
t
h
a
t
 
q
u
e
u
e
;
 
f
i
r
s
t
 
t
i
m
e
 
y
o
u
 
t
o
u
c
h
 
a
 
c
e
l
l
 
o
f
 
i
s
l
a
n
d
 
B
 
i
s
 
t
h
e
 
a
n
s
w
e
r
.
"
,
 
b
e
s
t
:
 
t
r
u
e
 
}
,


 
 
 
 
]
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
"
I
s
l
a
n
d
s
 
t
h
a
t
 
t
o
u
c
h
 
d
i
a
g
o
n
a
l
l
y
 
(
d
o
 
t
h
e
y
 
c
o
u
n
t
 
a
s
 
c
o
n
n
e
c
t
e
d
?
 
c
l
a
r
i
f
y
)
"
,


 
 
 
 
 
 
"
O
n
e
 
i
s
l
a
n
d
 
i
s
 
a
 
s
i
n
g
l
e
 
c
e
l
l
"
,


 
 
 
 
 
 
"
M
i
n
i
m
u
m
 
a
n
s
w
e
r
 
i
s
 
1
 
(
i
s
l
a
n
d
s
 
a
l
r
e
a
d
y
 
a
d
j
a
c
e
n
t
 
v
i
a
 
1
 
w
a
t
e
r
 
c
e
l
l
)
"
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
m
i
n
-
m
e
e
t
i
n
g
-
r
o
o
m
s
"
,


 
 
 
 
t
i
t
l
e
:
 
"
M
i
n
i
m
u
m
 
M
e
e
t
i
n
g
 
R
o
o
m
s
"
,


 
 
 
 
s
t
a
t
e
m
e
n
t
:
 
"
G
i
v
e
n
 
s
t
a
r
t
/
e
n
d
 
t
i
m
e
s
 
o
f
 
m
e
e
t
i
n
g
s
,
 
r
e
t
u
r
n
 
t
h
e
 
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
r
o
o
m
s
 
r
e
q
u
i
r
e
d
 
s
o
 
n
o
 
t
w
o
 
m
e
e
t
i
n
g
s
 
i
n
 
t
h
e
 
s
a
m
e
 
r
o
o
m
 
o
v
e
r
l
a
p
.
"
,


 
 
 
 
c
o
r
r
e
c
t
P
a
t
t
e
r
n
s
:
 
[
"
g
r
e
e
d
y
"
,
 
"
s
t
a
c
k
-
q
u
e
u
e
"
]
,


 
 
 
 
a
p
p
r
o
a
c
h
e
s
:
 
[


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
S
i
m
u
l
a
t
e
 
h
o
u
r
s
"
,
 
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
:
 
"
O
(
n
 
*
 
m
a
x
T
i
m
e
)
"
,
 
s
k
e
t
c
h
:
 
"
T
i
c
k
 
t
i
m
e
 
-
>
 
t
r
a
c
k
 
a
c
t
i
v
e
 
c
o
u
n
t
,
 
d
e
p
e
n
d
s
 
o
n
 
t
i
m
e
 
r
a
n
g
e
,
 
n
o
t
 
s
c
a
l
a
b
l
e
.
"
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
E
v
e
n
t
s
 
/
 
s
w
e
e
p
 
l
i
n
e
"
,
 
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
:
 
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
 
s
k
e
t
c
h
:
 
"
S
p
l
i
t
 
e
a
c
h
 
m
e
e
t
i
n
g
 
i
n
t
o
 
+
1
 
(
s
t
a
r
t
)
 
a
n
d
 
-
1
 
(
e
n
d
)
 
e
v
e
n
t
s
,
 
s
o
r
t
,
 
t
r
a
c
k
 
r
u
n
n
i
n
g
 
s
u
m
 
m
a
x
.
"
,
 
b
e
s
t
:
 
t
r
u
e
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
M
i
n
-
h
e
a
p
 
o
f
 
e
n
d
 
t
i
m
e
s
"
,
 
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
:
 
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
 
s
k
e
t
c
h
:
 
"
S
o
r
t
 
b
y
 
s
t
a
r
t
.
 
P
u
s
h
 
e
n
d
 
i
n
t
o
 
m
i
n
-
h
e
a
p
;
 
i
f
 
n
e
x
t
 
s
t
a
r
t
 
>
=
 
h
e
a
p
 
t
o
p
 
e
n
d
,
 
p
o
p
 
(
r
e
u
s
e
 
a
 
r
o
o
m
)
.
 
A
n
s
w
e
r
 
=
 
m
a
x
 
h
e
a
p
 
s
i
z
e
.
"
 
}
,


 
 
 
 
]
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
"
M
e
e
t
i
n
g
s
 
t
h
a
t
 
e
n
d
 
e
x
a
c
t
l
y
 
w
h
e
n
 
a
n
o
t
h
e
r
 
s
t
a
r
t
s
,
 
d
o
 
t
h
e
y
 
s
h
a
r
e
 
a
 
r
o
o
m
?
"
,


 
 
 
 
 
 
"
A
l
l
 
m
e
e
t
i
n
g
s
 
o
v
e
r
l
a
p
 
(
a
n
s
w
e
r
 
=
 
n
)
"
,


 
 
 
 
 
 
"
S
i
n
g
l
e
 
m
e
e
t
i
n
g
"
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
l
o
n
g
e
s
t
-
i
n
c
r
e
a
s
i
n
g
-
s
u
b
s
e
q
"
,


 
 
 
 
t
i
t
l
e
:
 
"
L
o
n
g
e
s
t
 
I
n
c
r
e
a
s
i
n
g
 
S
u
b
s
e
q
u
e
n
c
e
"
,


 
 
 
 
s
t
a
t
e
m
e
n
t
:
 
"
G
i
v
e
n
 
a
n
 
i
n
t
e
g
e
r
 
a
r
r
a
y
 
n
u
m
s
,
 
r
e
t
u
r
n
 
t
h
e
 
l
e
n
g
t
h
 
o
f
 
t
h
e
 
l
o
n
g
e
s
t
 
s
t
r
i
c
t
l
y
-
i
n
c
r
e
a
s
i
n
g
 
s
u
b
s
e
q
u
e
n
c
e
 
(
n
o
t
 
n
e
c
e
s
s
a
r
i
l
y
 
c
o
n
t
i
g
u
o
u
s
)
.
"
,


 
 
 
 
c
o
r
r
e
c
t
P
a
t
t
e
r
n
s
:
 
[
"
d
p
"
,
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
"
]
,


 
 
 
 
a
p
p
r
o
a
c
h
e
s
:
 
[


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
B
r
u
t
e
 
f
o
r
c
e
"
,
 
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
:
 
"
O
(
2
ⁿ
)
"
,
 
s
k
e
t
c
h
:
 
"
E
n
u
m
e
r
a
t
e
 
a
l
l
 
s
u
b
s
e
q
u
e
n
c
e
s
.
"
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
C
l
a
s
s
i
c
 
D
P
"
,
 
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
:
 
"
O
(
n
²
)
 
t
i
m
e
,
 
O
(
n
)
 
s
p
a
c
e
"
,
 
s
k
e
t
c
h
:
 
"
d
p
[
i
]
 
=
 
1
 
+
 
m
a
x
{
d
p
[
j
]
 
:
 
j
 
<
 
i
,
 
n
u
m
s
[
j
]
 
<
 
n
u
m
s
[
i
]
}
.
"
 
}
,


 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
P
a
t
i
e
n
c
e
 
s
o
r
t
 
/
 
B
S
 
o
n
 
t
a
i
l
s
"
,
 
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
:
 
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
 
s
k
e
t
c
h
:
 
"
K
e
e
p
 
s
m
a
l
l
e
s
t
 
t
a
i
l
 
s
e
e
n
 
f
o
r
 
e
v
e
r
y
 
L
I
S
 
l
e
n
g
t
h
.
 
F
o
r
 
e
a
c
h
 
x
,
 
b
i
n
a
r
y
-
s
e
a
r
c
h
 
t
h
e
 
r
e
p
l
a
c
e
 
p
o
s
i
t
i
o
n
.
"
,
 
b
e
s
t
:
 
t
r
u
e
 
}
,


 
 
 
 
]
,


 
 
 
 
e
d
g
e
s
:
 
[


 
 
 
 
 
 
"
A
l
l
 
e
l
e
m
e
n
t
s
 
e
q
u
a
l
,
 
a
n
s
w
e
r
 
=
 
1
 
(
s
t
r
i
c
t
 
i
n
c
r
e
a
s
e
)
"
,


 
 
 
 
 
 
"
S
t
r
i
c
t
l
y
 
d
e
c
r
e
a
s
i
n
g
,
 
a
n
s
w
e
r
 
=
 
1
"
,


 
 
 
 
 
 
"
D
u
p
l
i
c
a
t
e
s
 
s
c
a
t
t
e
r
e
d
"
,


 
 
 
 
]
,


 
 
}
,


]
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
w
o
-
S
u
m
 
w
a
l
k
t
h
r
o
u
g
h
 
f
o
r
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
T
W
O
S
U
M
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
t
w
o
S
u
m
(
n
u
m
s
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
s
e
e
n
 
=
 
{
}
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
n
e
e
d
 
=
 
t
a
r
g
e
t
 
-
 
n
u
m
s
[
i
]
"
,


 
 
"
 
 
 
 
i
f
 
n
e
e
d
 
i
n
 
s
e
e
n
:
"
,


 
 
"
 
 
 
 
 
 
r
e
t
u
r
n
 
[
s
e
e
n
[
n
e
e
d
]
,
 
i
]
"
,


 
 
"
 
 
 
 
s
e
e
n
[
n
u
m
s
[
i
]
]
 
=
 
i
"
,


 
 
"
 
 
r
e
t
u
r
n
 
[
]
"
,


]
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
 
T
r
a
c
e
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
i
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
e
n
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
n
u
m
b
e
r
>
;


 
 
f
o
u
n
d
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
;


 
 
f
l
a
s
h
K
e
y
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




f
u
n
c
t
i
o
n
 
b
u
i
l
d
T
w
o
S
u
m
F
r
a
m
e
s
(
n
u
m
s
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
)
:
 
T
r
a
c
e
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
T
r
a
c
e
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
e
e
n
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
u
m
s
:
 
`
[
$
{
n
u
m
s
.
j
o
i
n
(
"
,
"
)
}
]
`
,
 
t
a
r
g
e
t
 
}
,
 
m
e
s
s
a
g
e
:
 
`
F
i
n
d
 
t
w
o
 
i
n
d
i
c
e
s
 
i
<
j
 
w
i
t
h
 
n
u
m
s
[
i
]
+
n
u
m
s
[
j
]
=
$
{
t
a
r
g
e
t
}
.
`
,
 
i
:
 
-
1
,
 
s
e
e
n
:
 
{
}
,
 
f
o
u
n
d
:
 
n
u
l
l
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
s
e
e
n
:
 
"
{
}
"
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
s
e
e
n
"
,
 
m
e
s
s
a
g
e
:
 
"
I
n
i
t
i
a
l
i
z
e
 
e
m
p
t
y
 
h
a
s
h
 
'
s
e
e
n
'
.
"
,
 
i
:
 
-
1
,
 
s
e
e
n
:
 
{
}
,
 
f
o
u
n
d
:
 
n
u
l
l
 
}
)
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
u
m
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
n
e
e
d
 
=
 
t
a
r
g
e
t
 
-
 
n
u
m
s
[
i
]
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
[
`
n
u
m
s
[
i
]
`
]
:
 
n
u
m
s
[
i
]
,
 
n
e
e
d
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
n
e
e
d
"
,
 
m
e
s
s
a
g
e
:
 
`
i
=
$
{
i
}
:
 
n
e
e
d
 
=
 
$
{
t
a
r
g
e
t
}
 
-
 
$
{
n
u
m
s
[
i
]
}
 
=
 
$
{
n
e
e
d
}
.
`
,
 
i
,
 
s
e
e
n
:
 
{
 
.
.
.
s
e
e
n
 
}
,
 
f
o
u
n
d
:
 
n
u
l
l
 
}
)
;


 
 
 
 
i
f
 
(
n
e
e
d
 
i
n
 
s
e
e
n
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
m
a
t
c
h
:
 
`
[
$
{
s
e
e
n
[
n
e
e
d
]
}
,
$
{
i
}
]
`
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
m
a
t
c
h
"
,
 
m
e
s
s
a
g
e
:
 
`
F
o
u
n
d
!
 
s
e
e
n
[
$
{
n
e
e
d
}
]
=
$
{
s
e
e
n
[
n
e
e
d
]
}
,
 
a
n
d
 
i
=
$
{
i
}
.
`
,
 
i
,
 
s
e
e
n
:
 
{
 
.
.
.
s
e
e
n
 
}
,
 
f
o
u
n
d
:
 
[
s
e
e
n
[
n
e
e
d
]
,
 
i
]
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
 
 
}


 
 
 
 
s
e
e
n
[
n
u
m
s
[
i
]
]
 
=
 
i
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
[
`
s
e
e
n
[
$
{
n
u
m
s
[
i
]
}
]
`
]
:
 
i
 
}
,
 
f
l
a
s
h
K
e
y
:
 
`
s
e
e
n
[
$
{
n
u
m
s
[
i
]
}
]
`
,
 
m
e
s
s
a
g
e
:
 
`
R
e
c
o
r
d
 
s
e
e
n
[
$
{
n
u
m
s
[
i
]
}
]
 
=
 
$
{
i
}
.
`
,
 
i
,
 
s
e
e
n
:
 
{
 
.
.
.
s
e
e
n
 
}
,
 
f
o
u
n
d
:
 
n
u
l
l
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
"
[
]
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
N
o
 
p
a
i
r
 
f
o
u
n
d
.
"
,
 
i
:
 
n
u
m
s
.
l
e
n
g
t
h
,
 
s
e
e
n
:
 
{
 
.
.
.
s
e
e
n
 
}
,
 
f
o
u
n
d
:
 
n
u
l
l
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
p
a
r
s
e
N
u
m
s
T
a
r
g
e
t
(
s
:
 
s
t
r
i
n
g
)
:
 
{
 
n
u
m
s
:
 
n
u
m
b
e
r
[
]
;
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
s
.
s
p
l
i
t
(
"
|
"
)
;


 
 
i
f
 
(
p
a
r
t
s
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
 
2
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
p
a
r
t
s
[
0
]
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
N
u
m
b
e
r
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
x
)
)
;


 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
N
u
m
b
e
r
(
p
a
r
t
s
[
1
]
.
t
r
i
m
(
)
)
;


 
 
i
f
 
(
!
n
u
m
s
.
l
e
n
g
t
h
 
|
|
 
!
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
t
a
r
g
e
t
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
{
 
n
u
m
s
,
 
t
a
r
g
e
t
 
}
;


}




f
u
n
c
t
i
o
n
 
T
w
o
S
u
m
T
r
a
c
e
V
i
z
(
{
 
f
r
a
m
e
,
 
n
u
m
s
,
 
t
a
r
g
e
t
 
}
:
 
{
 
f
r
a
m
e
:
 
T
r
a
c
e
F
r
a
m
e
;
 
n
u
m
s
:
 
n
u
m
b
e
r
[
]
;
 
t
a
r
g
e
t
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
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
g
r
i
d
 
g
a
p
-
4
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
m
i
n
m
a
x
(
0
,
1
f
r
)
 
2
2
0
p
x
"
 
}
}
>


 
 
 
 
 
 
 
 
<
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>
A
r
r
a
y
 
(
t
a
r
g
e
t
 
=
 
{
t
a
r
g
e
t
}
)
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
u
m
s
.
m
a
p
(
(
v
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
 
=
 
i
d
x
 
=
=
=
 
f
r
a
m
e
.
i
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
o
u
n
d
 
=
 
f
r
a
m
e
.
f
o
u
n
d
 
&
&
 
(
f
r
a
m
e
.
f
o
u
n
d
[
0
]
 
=
=
=
 
i
d
x
 
|
|
 
f
r
a
m
e
.
f
o
u
n
d
[
1
]
 
=
=
=
 
i
d
x
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
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
m
i
n
-
w
-
1
2
 
p
x
-
2
.
5
 
p
y
-
2
 
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
 
f
o
n
t
-
m
o
n
o
 
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
b
a
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
i
s
F
o
u
n
d
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
i
s
C
u
r
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
F
o
u
n
d
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
i
s
C
u
r
 
?
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
2
2
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
F
o
u
n
d
 
?
 
"
#
1
6
6
5
3
4
"
 
:
 
i
s
C
u
r
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
"
t
e
x
t
-
[
1
0
p
x
]
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
f
o
n
t
-
n
o
r
m
a
l
"
>
[
{
i
d
x
}
]
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
f
o
u
n
d
 
&
&
 
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
m
t
-
3
 
p
x
-
3
 
p
y
-
2
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
l
i
m
e
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
l
i
m
e
-
4
0
0
/
1
0
 
b
o
r
d
e
r
-
2
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
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
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
i
n
d
i
c
e
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
 
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
l
i
m
e
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
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
f
r
a
m
e
.
f
o
u
n
d
[
0
]
}
,
 
{
f
r
a
m
e
.
f
o
u
n
d
[
1
]
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}
,
 
n
u
m
s
[
{
f
r
a
m
e
.
f
o
u
n
d
[
0
]
}
]
 
+
 
n
u
m
s
[
{
f
r
a
m
e
.
f
o
u
n
d
[
1
]
}
]
 
=
 
{
n
u
m
s
[
f
r
a
m
e
.
f
o
u
n
d
[
0
]
]
}
 
+
 
{
n
u
m
s
[
f
r
a
m
e
.
f
o
u
n
d
[
1
]
]
}
 
=
 
{
t
a
r
g
e
t
}
.


 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
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
 
p
-
3
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>
H
a
s
h
 
'
s
e
e
n
'
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
k
e
y
s
(
f
r
a
m
e
.
s
e
e
n
)
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
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
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
f
r
a
m
e
.
s
e
e
n
)
.
m
a
p
(
(
[
k
,
 
v
]
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
k
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
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
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
s
t
o
n
e
-
9
0
0
 
f
o
n
t
-
m
o
n
o
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
 
}
}
>
{
k
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
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
-
&
g
t
;
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
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
"
>
{
v
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
(
"
2
,
7
,
1
1
,
1
5
 
|
 
9
"
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
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


 
 
 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
p
a
r
s
e
N
u
m
s
T
a
r
g
e
t
(
i
n
p
u
t
S
t
r
)
 
?
?
 
{
 
n
u
m
s
:
 
[
2
,
 
7
,
 
1
1
,
 
1
5
]
,
 
t
a
r
g
e
t
:
 
9
 
}
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
T
w
o
S
u
m
F
r
a
m
e
s
(
p
a
r
s
e
d
.
n
u
m
s
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
)
;


 
 
}
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
L
i
v
e
 
W
a
l
k
t
h
r
o
u
g
h
,
 
T
w
o
 
S
u
m
 
(
h
a
s
h
-
m
a
p
 
a
p
p
r
o
a
c
h
)
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
n
u
m
s
 
|
 
t
a
r
g
e
t
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
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
e
.
g
.
 
2
,
7
,
1
1
,
1
5
 
|
 
9
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
A
f
t
e
r
 
y
o
u
 
w
o
r
k
 
t
h
r
o
u
g
h
 
t
h
e
 
w
a
l
k
t
h
r
o
u
g
h
,
 
h
o
p
 
t
o
 
'
T
r
y
 
I
t
'
 
f
o
r
 
t
h
e
 
p
a
t
t
e
r
n
 
t
r
a
i
n
e
r
.
"


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
E
a
s
y
"
,
 
v
a
l
u
e
:
 
"
2
,
7
,
1
1
,
1
5
 
|
 
9
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
u
p
.
"
,
 
v
a
l
u
e
:
 
"
3
,
3
,
4
 
|
 
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
N
e
g
a
t
i
v
e
s
"
,
 
v
a
l
u
e
:
 
"
-
1
,
-
2
,
-
3
,
-
4
 
|
 
-
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
N
o
 
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
 
v
a
l
u
e
:
 
"
1
,
2
,
3
 
|
 
1
0
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
N
u
m
s
T
a
r
g
e
t
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
T
W
O
S
U
M
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
(


 
 
 
 
 
 
 
 
<
T
w
o
S
u
m
T
r
a
c
e
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
n
u
m
s
=
{
(
p
a
r
s
e
N
u
m
s
T
a
r
g
e
t
(
i
n
p
u
t
S
t
r
)
 
?
?
 
{
 
n
u
m
s
:
 
[
2
,
 
7
,
 
1
1
,
 
1
5
]
,
 
t
a
r
g
e
t
:
 
9
 
}
)
.
n
u
m
s
}
 
t
a
r
g
e
t
=
{
(
p
a
r
s
e
N
u
m
s
T
a
r
g
e
t
(
i
n
p
u
t
S
t
r
)
 
?
?
 
{
 
n
u
m
s
:
 
[
2
,
 
7
,
 
1
1
,
 
1
5
]
,
 
t
a
r
g
e
t
:
 
9
 
}
)
.
t
a
r
g
e
t
}
 
/
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
a
t
t
e
r
n
 
T
r
a
i
n
e
r
 
(
T
r
y
 
I
t
 
t
a
b
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
S
t
a
g
e
 
=
 
"
t
a
l
k
"
 
|
 
"
c
o
d
e
"
 
|
 
"
a
n
a
l
y
z
e
"
 
|
 
"
e
d
g
e
s
"
 
|
 
"
o
p
t
i
m
i
z
e
"
 
|
 
"
d
o
n
e
"
;




c
o
n
s
t
 
S
T
A
G
E
S
:
 
{
 
i
d
:
 
S
t
a
g
e
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
p
r
o
m
p
t
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
 
=
 
[


 
 
{
 
i
d
:
 
"
t
a
l
k
"
,
 
 
 
 
 
l
a
b
e
l
:
 
"
1
.
 
T
a
l
k
 
t
h
r
o
u
g
h
"
,
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
R
e
s
t
a
t
e
 
t
h
e
 
p
r
o
b
l
e
m
.
 
N
a
m
e
 
t
h
e
 
p
a
t
t
e
r
n
s
 
t
h
a
t
 
a
p
p
l
y
.
 
E
x
p
l
a
i
n
 
w
h
y
.
"
 
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
e
"
,
 
 
 
 
 
l
a
b
e
l
:
 
"
2
.
 
P
s
e
u
d
o
c
o
d
e
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
S
k
e
t
c
h
 
t
h
e
 
a
p
p
r
o
a
c
h
 
i
n
 
p
s
e
u
d
o
c
o
d
e
.
 
F
o
c
u
s
 
o
n
 
t
h
e
 
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
 
a
n
d
 
t
h
e
 
l
o
o
p
 
s
t
r
u
c
t
u
r
e
.
"
 
}
,


 
 
{
 
i
d
:
 
"
a
n
a
l
y
z
e
"
,
 
 
l
a
b
e
l
:
 
"
3
.
 
A
n
a
l
y
z
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
"
,
 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
T
i
m
e
 
a
n
d
 
s
p
a
c
e
,
 
b
e
s
t
,
 
a
v
e
r
a
g
e
,
 
w
o
r
s
t
.
 
J
u
s
t
i
f
y
 
t
h
e
 
d
o
m
i
n
a
t
i
n
g
 
o
p
e
r
a
t
i
o
n
.
"
 
}
,


 
 
{
 
i
d
:
 
"
e
d
g
e
s
"
,
 
 
 
 
l
a
b
e
l
:
 
"
4
.
 
H
a
n
d
l
e
 
e
d
g
e
 
c
a
s
e
s
"
,
 
 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
E
m
p
t
y
 
i
n
p
u
t
?
 
S
i
n
g
l
e
 
e
l
e
m
e
n
t
?
 
A
l
l
 
d
u
p
l
i
c
a
t
e
s
?
 
I
n
t
e
g
e
r
 
o
v
e
r
f
l
o
w
?
 
N
e
g
a
t
i
v
e
 
n
u
m
b
e
r
s
?
"
 
}
,


 
 
{
 
i
d
:
 
"
o
p
t
i
m
i
z
e
"
,
 
l
a
b
e
l
:
 
"
5
.
 
O
p
t
i
m
i
z
e
 
/
 
a
l
t
e
r
n
a
t
i
v
e
s
"
,
 
p
r
o
m
p
t
:
 
"
C
a
n
 
y
o
u
 
g
o
 
f
a
s
t
e
r
?
 
T
r
a
d
e
 
s
p
a
c
e
 
f
o
r
 
t
i
m
e
?
 
A
r
e
 
t
h
e
r
e
 
m
u
l
t
i
p
l
e
 
v
a
l
i
d
 
a
p
p
r
o
a
c
h
e
s
?
"
 
}
,


 
 
{
 
i
d
:
 
"
d
o
n
e
"
,
 
 
 
 
 
l
a
b
e
l
:
 
"
D
o
n
e
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
m
p
t
:
 
"
R
e
v
i
e
w
 
y
o
u
r
 
r
e
a
s
o
n
i
n
g
 
b
e
f
o
r
e
 
m
o
v
i
n
g
 
t
o
 
t
h
e
 
n
e
x
t
 
p
r
o
b
l
e
m
.
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
P
a
t
t
e
r
n
T
r
a
i
n
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
p
r
o
b
l
e
m
I
d
x
,
 
s
e
t
P
r
o
b
l
e
m
I
d
x
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
0
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
,
 
s
e
t
S
e
l
e
c
t
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
<
S
e
t
<
P
a
t
t
e
r
n
>
>
(
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
e
d
,
 
s
e
t
S
u
b
m
i
t
t
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
 
[
s
t
a
g
e
,
 
s
e
t
S
t
a
g
e
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
S
t
a
g
e
>
(
"
t
a
l
k
"
)
;


 
 
c
o
n
s
t
 
[
s
c
r
a
t
c
h
,
 
s
e
t
S
c
r
a
t
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
r
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
,
 
s
e
t
R
e
v
e
a
l
e
d
A
p
p
r
o
a
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
 
p
r
o
b
l
e
m
 
=
 
P
R
O
B
L
E
M
S
[
p
r
o
b
l
e
m
I
d
x
]
;


 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
S
e
t
 
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
 
n
e
w
 
S
e
t
<
P
a
t
t
e
r
n
>
(
p
r
o
b
l
e
m
.
c
o
r
r
e
c
t
P
a
t
t
e
r
n
s
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
 
P
A
L
E
T
T
E
_
I
D
S
.
h
a
s
(
p
)
)
)
,
 
[
p
r
o
b
l
e
m
I
d
x
]
)
;




 
 
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
g
g
l
e
(
p
:
 
P
a
t
t
e
r
n
)
 
{


 
 
 
 
i
f
 
(
s
u
b
m
i
t
t
e
d
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
s
e
l
e
c
t
e
d
)
;


 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
p
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
p
)
;
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
p
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
(
n
e
x
t
)
;


 
 
}




 
 
f
u
n
c
t
i
o
n
 
s
u
b
m
i
t
(
)
 
{
 
s
e
t
S
u
b
m
i
t
t
e
d
(
t
r
u
e
)
;
 
}




 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
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


 
 
 
 
i
f
 
(
!
s
u
b
m
i
t
t
e
d
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
r
e
t
u
r
n
 
[
.
.
.
c
o
r
r
e
c
t
S
e
t
]
.
e
v
e
r
y
(
(
p
)
 
=
>
 
s
e
l
e
c
t
e
d
.
h
a
s
(
p
)
)
 
&
&
 
[
.
.
.
s
e
l
e
c
t
e
d
]
.
e
v
e
r
y
(
(
p
)
 
=
>
 
c
o
r
r
e
c
t
S
e
t
.
h
a
s
(
p
)
)
;


 
 
}
,
 
[
s
u
b
m
i
t
t
e
d
,
 
s
e
l
e
c
t
e
d
,
 
c
o
r
r
e
c
t
S
e
t
]
)
;




 
 
f
u
n
c
t
i
o
n
 
n
e
x
t
P
r
o
b
l
e
m
(
)
 
{


 
 
 
 
s
e
t
P
r
o
b
l
e
m
I
d
x
(
(
i
d
x
)
 
=
>
 
(
i
d
x
 
+
 
1
)
 
%
 
P
R
O
B
L
E
M
S
.
l
e
n
g
t
h
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
(
n
e
w
 
S
e
t
(
)
)
;
 
s
e
t
S
u
b
m
i
t
t
e
d
(
f
a
l
s
e
)
;
 
s
e
t
S
t
a
g
e
(
"
t
a
l
k
"
)
;
 
s
e
t
S
c
r
a
t
c
h
(
"
"
)
;
 
s
e
t
R
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
(
f
a
l
s
e
)
;


 
 
}




 
 
c
o
n
s
t
 
s
t
a
g
e
I
d
x
 
=
 
S
T
A
G
E
S
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
t
a
g
e
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
S
t
a
g
e
 
=
 
S
T
A
G
E
S
[
s
t
a
g
e
I
d
x
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
P
a
t
t
e
r
n
-
r
e
c
o
g
n
i
t
i
o
n
 
t
r
a
i
n
e
r
.
 
R
e
a
d
 
t
h
e
 
p
r
o
b
l
e
m
,
 
p
i
c
k
 
e
v
e
r
y
 
a
p
p
l
i
c
a
b
l
e
 
p
a
t
t
e
r
n
,
 
t
h
e
n
 
w
a
l
k
 
t
h
r
o
u
g
h
 
t
h
e
 
i
n
t
e
r
v
i
e
w
 
s
t
a
g
e
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>




 
 
 
 
 
 
{
/
*
 
P
r
o
b
l
e
m
 
s
e
l
e
c
t
o
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
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
P
R
O
B
L
E
M
S
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
i
 
=
=
=
 
p
r
o
b
l
e
m
I
d
x
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
 
{
 
s
e
t
P
r
o
b
l
e
m
I
d
x
(
i
)
;
 
s
e
t
S
e
l
e
c
t
e
d
(
n
e
w
 
S
e
t
(
)
)
;
 
s
e
t
S
u
b
m
i
t
t
e
d
(
f
a
l
s
e
)
;
 
s
e
t
S
t
a
g
e
(
"
t
a
l
k
"
)
;
 
s
e
t
S
c
r
a
t
c
h
(
"
"
)
;
 
s
e
t
R
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
(
f
a
l
s
e
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
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
e
x
t
-
[
1
1
p
x
]
"
>
{
i
 
+
 
1
}
.
 
{
p
.
t
i
t
l
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
P
i
l
l
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
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
P
r
o
b
l
e
m
 
s
t
a
t
e
m
e
n
t
 
*
/
}


 
 
 
 
 
 
<
C
a
r
d
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
1
"
>
P
r
o
b
l
e
m
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
t
e
x
t
-
b
a
s
e
 
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
m
b
-
2
"
>
{
p
r
o
b
l
e
m
.
t
i
t
l
e
}
<
/
d
i
v
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
p
r
o
b
l
e
m
.
s
t
a
t
e
m
e
n
t
}
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
{
/
*
 
P
a
t
t
e
r
n
 
p
a
l
e
t
t
e
 
*
/
}


 
 
 
 
 
 
<
C
a
r
d
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>
S
e
l
e
c
t
 
a
l
l
 
a
p
p
l
i
c
a
b
l
e
 
p
a
t
t
e
r
n
s
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
g
r
i
d
 
g
a
p
-
2
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
1
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
P
A
T
T
E
R
N
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
h
o
s
e
n
 
=
 
s
e
l
e
c
t
e
d
.
h
a
s
(
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
r
r
e
c
t
 
=
 
c
o
r
r
e
c
t
S
e
t
.
h
a
s
(
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
h
o
w
R
i
g
h
t
 
=
 
s
u
b
m
i
t
t
e
d
 
&
&
 
i
s
C
o
r
r
e
c
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
h
o
w
W
r
o
n
g
 
=
 
s
u
b
m
i
t
t
e
d
 
&
&
 
c
h
o
s
e
n
 
&
&
 
!
i
s
C
o
r
r
e
c
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
h
o
w
M
i
s
s
e
d
 
=
 
s
u
b
m
i
t
t
e
d
 
&
&
 
!
c
h
o
s
e
n
 
&
&
 
i
s
C
o
r
r
e
c
t
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
t
o
g
g
l
e
(
p
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
u
b
m
i
t
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
p
.
h
i
n
t
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
l
e
f
t
 
p
-
2
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
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
d
e
f
a
u
l
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
s
h
o
w
R
i
g
h
t
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
s
h
o
w
W
r
o
n
g
 
?
 
T
H
E
M
E
.
d
a
n
g
e
r
 
:
 
s
h
o
w
M
i
s
s
e
d
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
c
h
o
s
e
n
 
?
 
p
.
c
o
l
o
r
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
s
h
o
w
R
i
g
h
t
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
s
h
o
w
W
r
o
n
g
 
?
 
"
#
f
e
e
2
e
2
"
 
:
 
s
h
o
w
M
i
s
s
e
d
 
?
 
"
#
f
e
f
9
c
3
"
 
:
 
c
h
o
s
e
n
 
?
 
`
$
{
p
.
c
o
l
o
r
}
1
a
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
g
a
p
-
1
 
m
b
-
0
.
5
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
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
c
h
o
s
e
n
 
?
 
p
.
c
o
l
o
r
 
:
 
T
H
E
M
E
.
t
e
x
t
 
}
}
>
{
p
.
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
R
i
g
h
t
 
&
&
 
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
[
1
0
p
x
]
 
t
e
x
t
-
l
i
m
e
-
7
0
0
"
>
c
o
r
r
e
c
t
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
W
r
o
n
g
 
&
&
 
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
[
1
0
p
x
]
 
t
e
x
t
-
r
o
s
e
-
7
0
0
"
>
w
r
o
n
g
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
M
i
s
s
e
d
 
&
&
 
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
[
1
0
p
x
]
 
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
7
0
0
"
>
m
i
s
s
e
d
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
1
0
p
x
]
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>
{
p
.
h
i
n
t
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
 
m
t
-
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
{
!
s
u
b
m
i
t
t
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
s
u
b
m
i
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
e
l
e
c
t
e
d
.
s
i
z
e
 
=
=
=
 
0
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
4
 
p
y
-
2
 
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
o
n
o
 
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
s
t
 
b
o
r
d
e
r
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
b
g
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
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
s
t
o
n
e
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
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
7
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
g
-
s
t
o
n
e
-
2
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
m
i
t
 
s
e
l
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
3
 
p
y
-
1
 
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
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
r
r
e
c
t
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
"
#
f
e
f
9
c
3
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
o
r
r
e
c
t
 
?
 
"
#
1
6
6
5
3
4
"
 
:
 
"
#
9
2
4
0
0
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
r
r
e
c
t
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
"
#
f
5
9
e
0
b
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
"
E
x
a
c
t
 
m
a
t
c
h
"
 
:
 
"
P
a
r
t
i
a
l
,
 
s
e
e
 
h
i
g
h
l
i
g
h
t
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
R
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
(
(
r
)
 
=
>
 
!
r
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
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
 
?
 
"
H
i
d
e
 
a
p
p
r
o
a
c
h
e
s
"
 
:
 
"
S
h
o
w
 
a
p
p
r
o
a
c
h
e
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
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
C
a
r
d
>




 
 
 
 
 
 
{
/
*
 
A
p
p
r
o
a
c
h
e
s
 
*
/
}


 
 
 
 
 
 
{
s
u
b
m
i
t
t
e
d
 
&
&
 
r
e
v
e
a
l
e
d
A
p
p
r
o
a
c
h
 
&
&
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>
A
p
p
r
o
a
c
h
e
s
 
(
s
i
d
e
-
b
y
-
s
i
d
e
)
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
g
r
i
d
 
g
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
2
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
b
l
e
m
.
a
p
p
r
o
a
c
h
e
s
.
m
a
p
(
(
a
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
p
-
3
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
a
.
b
e
s
t
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
.
b
e
s
t
 
?
 
"
#
f
0
f
d
f
4
"
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
1
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>
{
a
.
n
a
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
b
e
s
t
 
&
&
 
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
[
1
0
p
x
]
 
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
l
i
m
e
-
7
0
0
 
b
g
-
l
i
m
e
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
g
-
l
i
m
e
-
4
0
0
/
2
0
 
p
x
-
1
.
5
 
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
"
>
o
p
t
i
m
a
l
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
l
i
m
e
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
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
"
>
{
a
.
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
}
<
/
d
i
v
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
a
.
s
k
e
t
c
h
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
C
a
r
d
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
I
n
t
e
r
v
i
e
w
 
s
t
a
g
e
s
 
*
/
}


 
 
 
 
 
 
<
C
a
r
d
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>
I
n
t
e
r
v
i
e
w
 
M
o
d
e
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
S
T
A
G
E
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
s
)
 
=
>
 
s
.
i
d
 
!
=
=
 
"
d
o
n
e
"
)
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
s
.
i
d
}
 
a
c
t
i
v
e
=
{
s
t
a
g
e
 
=
=
=
 
s
.
i
d
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
S
t
a
g
e
(
s
.
i
d
)
}
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
e
x
t
-
[
1
0
p
x
]
"
 
s
t
y
l
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
 
i
 
>
 
s
t
a
g
e
I
d
x
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
d
o
n
e
"
 
?
 
0
.
6
 
:
 
1
 
}
}
>
{
s
.
l
a
b
e
l
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
P
i
l
l
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
/
d
i
v
>


 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
a
g
e
 
&
&
 
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
p
-
3
 
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
 
m
b
-
3
 
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
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
T
H
E
M
E
.
a
c
c
e
n
t
}
1
8
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
a
g
e
.
p
r
o
m
p
t
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
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
c
r
a
t
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
c
r
a
t
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
T
y
p
e
 
y
o
u
r
 
r
e
a
s
o
n
i
n
g
 
h
e
r
e
.
.
.
 
(
n
o
t
 
s
a
v
e
d
,
 
f
o
r
 
p
r
a
c
t
i
c
e
 
o
n
l
y
)
"


 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
4
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
x
-
3
 
p
y
-
2
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
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
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
r
e
s
i
z
e
-
y
 
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
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
e
d
g
e
s
"
 
&
&
 
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
m
t
-
2
 
p
-
3
 
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
4
0
0
/
1
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
a
m
b
e
r
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
4
0
0
/
3
0
 
t
e
x
t
-
s
m
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
a
m
b
e
r
-
8
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
3
0
0
 
m
b
-
1
.
5
"
>
E
x
p
e
c
t
e
d
 
e
d
g
e
 
c
a
s
e
s
<
/
d
i
v
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
l
i
s
t
-
d
i
s
c
 
p
l
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
0
.
5
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
b
l
e
m
.
e
d
g
e
s
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
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
>
{
e
}
<
/
l
i
>
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


 
 
 
 
 
 
 
 
)
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
t
-
3
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
S
t
a
g
e
(
S
T
A
G
E
S
[
M
a
t
h
.
m
a
x
(
0
,
 
s
t
a
g
e
I
d
x
 
-
 
1
)
]
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
a
g
e
I
d
x
 
=
=
=
 
0
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
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
o
u
s
 
s
t
a
g
e


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
S
t
a
g
e
(
S
T
A
G
E
S
[
M
a
t
h
.
m
i
n
(
S
T
A
G
E
S
.
l
e
n
g
t
h
 
-
 
1
,
 
s
t
a
g
e
I
d
x
 
+
 
1
)
]
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
a
g
e
I
d
x
 
>
=
 
S
T
A
G
E
S
.
l
e
n
g
t
h
 
-
 
1
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
4
 
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
m
d
 
b
g
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
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
s
t
o
n
e
-
9
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
o
n
o
 
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
s
t
 
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
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
7
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
g
-
s
t
o
n
e
-
2
0
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
s
t
a
g
e


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
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
C
a
r
d
>




 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
n
e
x
t
P
r
o
b
l
e
m
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
e
l
f
-
s
t
a
r
t
 
p
x
-
4
 
p
y
-
2
 
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
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
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
s
t
o
n
e
-
9
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
o
n
o
 
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
s
t
 
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
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
7
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
g
-
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
N
e
x
t
 
p
r
o
b
l
e
m


 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
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
a
t
t
e
r
n
 
r
e
c
o
g
n
i
t
i
o
n
 
=
 
f
a
s
t
 
s
o
l
v
i
n
g
"
,
 
b
o
d
y
:
 
"
S
e
n
i
o
r
 
e
n
g
i
n
e
e
r
s
 
d
o
n
'
t
 
'
i
n
v
e
n
t
'
 
a
 
s
o
l
u
t
i
o
n
,
 
t
h
e
y
 
p
a
t
t
e
r
n
-
m
a
t
c
h
.
 
A
f
t
e
r
 
y
o
u
'
v
e
 
s
e
e
n
 
2
0
0
 
p
r
o
b
l
e
m
s
,
 
y
o
u
 
r
e
c
o
g
n
i
z
e
 
'
s
u
m
-
t
o
-
t
a
r
g
e
t
 
i
n
 
s
o
r
t
e
d
 
a
r
r
a
y
'
 
a
s
 
t
w
o
-
p
o
i
n
t
e
r
 
i
n
s
t
a
n
t
l
y
.
 
T
h
e
 
a
r
t
 
i
s
 
c
a
t
a
l
o
g
u
i
n
g
 
c
l
u
e
s
:
 
s
o
r
t
e
d
?
 
-
>
 
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
 
/
 
t
w
o
-
p
o
i
n
t
e
r
.
 
S
u
b
a
r
r
a
y
?
 
-
>
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
/
 
p
r
e
f
i
x
 
s
u
m
s
.
 
O
p
t
i
m
a
l
 
c
o
u
n
t
?
 
-
>
 
D
P
.
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
n
e
 
p
r
o
b
l
e
m
,
 
m
a
n
y
 
a
p
p
r
o
a
c
h
e
s
"
,
 
b
o
d
y
:
 
"
M
o
s
t
 
p
r
o
b
l
e
m
s
 
a
d
m
i
t
 
2
-
4
 
v
a
l
i
d
 
a
p
p
r
o
a
c
h
e
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
 
t
r
a
d
e
-
o
f
f
s
.
 
I
n
t
e
r
v
i
e
w
s
 
r
e
w
a
r
d
 
l
i
s
t
i
n
g
 
t
h
e
m
 
a
n
d
 
e
x
p
l
a
i
n
i
n
g
 
w
h
y
 
y
o
u
'
d
 
p
i
c
k
 
t
h
e
 
b
e
s
t
.
 
'
B
r
u
t
e
 
f
o
r
c
e
 
f
i
r
s
t
,
 
t
h
e
n
 
o
p
t
i
m
i
z
e
'
 
i
s
 
a
 
c
o
n
v
e
r
s
a
t
i
o
n
 
s
t
a
r
t
e
r
,
 
n
e
v
e
r
 
s
k
i
p
 
s
t
e
p
 
o
n
e
.
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
t
e
r
v
i
e
w
 
m
o
d
e
,
 
5
 
s
t
a
g
e
s
"
,
 
b
o
d
y
:
 
"
(
1
)
 
R
e
s
t
a
t
e
 
+
 
c
l
a
r
i
f
y
.
 
(
2
)
 
P
s
e
u
d
o
c
o
d
e
 
a
n
 
a
p
p
r
o
a
c
h
.
 
(
3
)
 
A
n
a
l
y
z
e
 
t
i
m
e
 
a
n
d
 
s
p
a
c
e
.
 
(
4
)
 
W
a
l
k
 
e
d
g
e
 
c
a
s
e
s
.
 
(
5
)
 
O
p
t
i
m
i
z
e
 
o
r
 
d
i
s
c
u
s
s
 
a
l
t
e
r
n
a
t
i
v
e
s
.
 
M
i
s
s
 
a
n
y
 
s
t
a
g
e
 
a
n
d
 
y
o
u
 
l
o
s
e
 
s
i
g
n
a
l
,
 
e
v
e
n
 
w
i
t
h
 
a
 
c
o
r
r
e
c
t
 
s
o
l
u
t
i
o
n
.
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
h
a
t
 
t
o
 
m
e
m
o
r
i
z
e
"
,
 
b
o
d
y
:
 
"
T
e
m
p
l
a
t
e
s
 
f
o
r
 
e
a
c
h
 
p
a
t
t
e
r
n
 
(
s
l
i
d
i
n
g
 
w
i
n
d
o
w
,
 
B
F
S
,
 
D
F
S
,
 
D
P
 
1
-
D
 
a
n
d
 
2
-
D
,
 
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
 
o
n
 
a
n
s
w
e
r
,
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
,
 
u
n
i
o
n
-
f
i
n
d
,
 
t
r
i
e
)
.
 
M
e
m
o
r
i
z
e
 
t
h
e
 
s
k
e
l
e
t
o
n
,
 
p
a
r
a
m
e
t
e
r
i
z
e
 
t
h
e
 
b
o
d
y
.
 
N
o
w
 
y
o
u
r
 
j
o
b
 
i
s
 
j
u
s
t
 
t
o
 
r
e
c
o
g
n
i
z
e
 
w
h
i
c
h
 
t
e
m
p
l
a
t
e
 
f
i
t
s
.
"
 
}
,


 
 
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
p
a
t
t
e
r
n
 
r
e
c
o
g
n
i
t
i
o
n
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
M
a
t
c
h
 
t
h
e
 
p
r
o
b
l
e
m
 
t
o
 
a
 
t
e
m
p
l
a
t
e
 
w
i
t
h
i
n
 
s
e
c
o
n
d
s
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
b
r
a
i
n
 
i
s
 
a
 
l
o
o
k
-
u
p
 
t
a
b
l
e
 
i
n
d
e
x
e
d
 
b
y
 
p
r
o
b
l
e
m
 
c
l
u
e
s
.
 
T
h
i
s
 
l
e
s
s
o
n
 
i
s
 
t
h
e
 
e
x
e
r
c
i
s
e
 
t
h
a
t
 
b
u
i
l
d
s
 
t
h
e
 
i
n
d
e
x
.
 
B
y
 
t
h
e
 
e
n
d
,
 
a
 
g
l
a
n
c
e
 
a
t
 
a
 
n
e
w
 
p
r
o
b
l
e
m
 
s
h
o
u
l
d
 
s
u
r
f
a
c
e
 
1
-
3
 
c
a
n
d
i
d
a
t
e
 
p
a
t
t
e
r
n
s
 
w
i
t
h
i
n
 
s
e
c
o
n
d
s
,
 
t
h
e
n
 
y
o
u
 
p
i
c
k
,
 
c
o
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
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
g
r
i
d
 
g
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
l
i
m
e
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
l
i
m
e
-
4
0
0
 
m
b
-
1
 
f
o
n
t
-
m
o
n
o
"
>
0
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
s
.
t
i
t
l
e
}
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
"
c
l
u
e
 
t
o
 
p
a
t
t
e
r
n
"
 
c
h
e
a
t
 
s
h
e
e
t
<
/
S
u
b
H
e
a
d
i
n
g
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
l
i
s
t
-
d
i
s
c
 
p
l
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
1
 
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
s
o
r
t
e
d
 
a
r
r
a
y
"
 
o
r
 
"
l
o
g
-
n
 
h
i
n
t
"
,
 
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
 
/
 
t
w
o
-
p
o
i
n
t
e
r
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
c
o
n
t
i
g
u
o
u
s
 
s
u
b
a
r
r
a
y
 
/
 
s
u
b
s
t
r
i
n
g
"
,
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
,
 
p
r
e
f
i
x
 
s
u
m
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
s
t
e
p
s
"
 
o
n
 
a
 
g
r
i
d
,
 
B
F
S
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
c
o
u
n
t
 
t
h
e
 
w
a
y
s
"
 
/
 
"
m
a
x
 
v
a
l
u
e
"
 
/
 
"
c
a
n
 
w
e
 
r
e
a
c
h
"
,
 
D
P
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
n
e
x
t
 
g
r
e
a
t
e
r
 
/
 
s
m
a
l
l
e
r
"
,
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
p
a
r
e
n
t
h
e
s
e
s
 
/
 
m
a
t
c
h
i
n
g
"
,
 
s
t
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
o
v
e
r
l
a
p
p
i
n
g
 
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
 
s
o
r
t
 
+
 
s
w
e
e
p
 
/
 
g
r
e
e
d
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
s
h
o
r
t
e
s
t
 
w
e
i
g
h
t
e
d
 
p
a
t
h
"
 
(
n
o
n
-
n
e
g
a
t
i
v
e
)
,
 
D
i
j
k
s
t
r
a
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
c
o
n
n
e
c
t
i
v
i
t
y
 
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
"
,
 
u
n
i
o
n
-
f
i
n
d
 
o
r
 
D
F
S
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
s
e
e
n
 
t
h
i
s
 
v
a
l
u
e
 
b
e
f
o
r
e
?
"
,
 
h
a
s
h
 
s
e
t
/
m
a
p
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
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
e
,
 
n
o
t
 
j
u
s
t
 
s
o
l
v
e
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
v
i
e
w
e
r
s
 
r
a
n
k
 
c
a
n
d
i
d
a
t
e
s
 
o
n
 
s
i
g
n
a
l
 
p
e
r
 
u
n
i
t
 
t
i
m
e
.
 
T
a
l
k
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
 
t
h
e
 
p
a
t
t
e
r
n
 
t
r
e
e
 
(
"
t
h
i
s
 
c
o
u
l
d
 
b
e
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
b
e
c
a
u
s
e
.
.
.
,
 
o
r
 
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
 
o
n
 
a
n
s
w
e
r
 
b
e
c
a
u
s
e
.
.
.
"
)
 
p
r
o
d
u
c
e
s
 
s
i
g
n
a
l
 
e
v
e
n
 
b
e
f
o
r
e
 
y
o
u
 
c
o
d
e
.
 
A
 
s
i
l
e
n
t
 
c
o
d
e
r
 
w
h
o
 
h
a
p
p
e
n
s
 
t
o
 
g
e
t
 
t
h
e
 
r
i
g
h
t
 
a
n
s
w
e
r
 
s
c
o
r
e
s
 
l
o
w
e
r
 
t
h
a
n
 
a
 
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
o
r
 
w
h
o
 
h
a
p
p
e
n
s
 
t
o
 
h
a
v
e
 
a
 
m
i
n
o
r
 
b
u
g
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
N
e
x
t
 
s
t
e
p
s
 
a
f
t
e
r
 
L
e
v
e
l
 
8
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
P
r
a
c
t
i
c
e
 
2
0
0
+
 
p
r
o
b
l
e
m
s
 
a
c
r
o
s
s
 
e
v
e
r
y
 
p
a
t
t
e
r
n
.
 
T
i
m
e
-
b
o
x
 
t
h
e
m
:
 
3
0
 
m
i
n
 
f
o
r
 
m
e
d
i
u
m
s
,
 
4
5
 
m
i
n
 
f
o
r
 
h
a
r
d
s
.
 
R
e
d
o
 
m
i
s
s
e
d
 
p
r
o
b
l
e
m
s
 
a
f
t
e
r
 
a
 
w
e
e
k
.
 
D
o
 
m
o
c
k
 
i
n
t
e
r
v
i
e
w
s
 
o
u
t
 
l
o
u
d
,
 
y
o
u
r
 
t
o
n
g
u
e
 
t
r
i
p
s
 
o
n
 
"
I
'
l
l
 
u
s
e
 
a
 
h
a
s
h
 
m
a
p
 
t
o
 
a
c
h
i
e
v
e
 
O
(
n
)
"
 
t
h
e
 
f
i
r
s
t
 
f
e
w
 
t
i
m
e
s
,
 
t
h
e
n
 
b
e
c
o
m
e
s
 
r
e
f
l
e
x
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




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
 
L
8
_
P
a
t
t
e
r
n
R
e
c
o
g
n
i
t
i
o
n
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
,
 
c
o
n
t
e
n
t
:
 
<
P
a
t
t
e
r
n
T
r
a
i
n
e
r
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
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


 
 
 
 
{


 
 
 
 
 
 
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
Y
o
u
 
s
e
e
:
 
'
G
i
v
e
n
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
,
 
f
i
n
d
 
t
w
o
 
n
u
m
b
e
r
s
 
t
h
a
t
 
s
u
m
 
t
o
 
a
 
t
a
r
g
e
t
.
'
 
W
h
a
t
'
s
 
t
h
e
 
c
l
e
a
n
e
s
t
 
p
a
t
t
e
r
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
S
l
i
d
i
n
g
 
w
i
n
d
o
w
"
,
 
"
D
F
S
"
,
 
"
T
w
o
 
p
o
i
n
t
e
r
s
 
f
r
o
m
 
b
o
t
h
 
e
n
d
s
"
,
 
"
S
e
g
m
e
n
t
 
t
r
e
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
o
r
t
e
d
 
+
 
p
a
i
r
 
s
u
m
 
=
 
t
w
o
 
p
o
i
n
t
e
r
s
.
 
M
o
v
e
 
l
e
f
t
 
w
h
e
n
 
s
u
m
 
t
o
o
 
s
m
a
l
l
,
 
r
i
g
h
t
 
w
h
e
n
 
t
o
o
 
l
a
r
g
e
.
 
O
(
n
)
 
t
i
m
e
,
 
O
(
1
)
 
s
p
a
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
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
h
e
 
p
r
o
b
l
e
m
 
s
t
a
t
e
m
e
n
t
 
s
a
y
s
 
'
f
i
n
d
 
t
h
e
 
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
X
 
t
o
 
a
c
h
i
e
v
e
 
Y
,
 
w
h
e
r
e
 
Y
 
i
s
 
m
o
n
o
t
o
n
i
c
a
l
l
y
 
e
a
s
i
e
r
 
a
s
 
X
 
g
r
o
w
s
.
'
 
B
e
s
t
 
p
a
t
t
e
r
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
 
o
n
 
t
h
e
 
a
n
s
w
e
r
"
,
 
"
D
P
 
w
i
t
h
 
2
-
D
 
t
a
b
l
e
"
,
 
"
U
n
i
o
n
-
f
i
n
d
"
,
 
"
G
r
e
e
d
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
M
o
n
o
t
o
n
i
c
 
f
e
a
s
i
b
i
l
i
t
y
 
o
v
e
r
 
a
 
p
a
r
a
m
e
t
e
r
 
=
 
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
 
o
n
 
t
h
e
 
a
n
s
w
e
r
.
 
F
e
a
s
i
b
i
l
i
t
y
 
i
s
 
t
h
e
 
s
u
b
-
r
o
u
t
i
n
e
 
y
o
u
 
r
u
n
 
a
t
 
e
a
c
h
 
m
i
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
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
 
p
a
t
t
e
r
n
 
B
E
S
T
 
f
i
t
s
 
'
f
i
n
d
 
t
h
e
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
a
t
 
m
o
s
t
 
K
 
d
i
s
t
i
n
c
t
 
c
h
a
r
a
c
t
e
r
s
'
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
"
,
 
"
S
l
i
d
i
n
g
 
w
i
n
d
o
w
 
w
i
t
h
 
a
 
h
a
s
h
m
a
p
"
,
 
"
T
r
i
e
"
,
 
"
T
o
p
o
l
o
g
i
c
a
l
 
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
C
o
n
t
i
g
u
o
u
s
 
s
u
b
s
t
r
i
n
g
 
+
 
g
r
o
w
i
n
g
/
s
h
r
i
n
k
i
n
g
 
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
 
=
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
.
 
H
a
s
h
m
a
p
 
t
r
a
c
k
s
 
d
i
s
t
i
n
c
t
-
c
o
u
n
t
 
i
n
 
O
(
1
)
 
p
e
r
 
s
t
e
p
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
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
n
 
a
 
c
o
d
i
n
g
 
i
n
t
e
r
v
i
e
w
,
 
y
o
u
 
q
u
i
c
k
l
y
 
s
o
l
v
e
 
t
h
e
 
p
r
o
b
l
e
m
 
b
u
t
 
f
o
r
g
e
t
 
t
o
 
s
t
a
t
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
 
a
n
d
 
e
d
g
e
 
c
a
s
e
s
.
 
T
y
p
i
c
a
l
 
o
u
t
c
o
m
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
T
o
p
 
s
c
o
r
e
 
-
 
c
o
r
r
e
c
t
n
e
s
s
 
i
s
 
e
v
e
r
y
t
h
i
n
g
"
,


 
 
 
 
 
 
 
 
"
M
i
d
 
s
c
o
r
e
 
-
 
a
 
c
o
r
r
e
c
t
-
b
u
t
-
s
i
l
e
n
t
 
s
o
l
v
e
 
i
s
 
n
o
t
 
f
u
l
l
 
s
i
g
n
a
l
"
,


 
 
 
 
 
 
 
 
"
F
a
i
l
 
a
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
"
,


 
 
 
 
 
 
 
 
"
E
x
t
r
a
 
p
o
i
n
t
s
 
f
o
r
 
s
p
e
e
d
"
,


 
 
 
 
 
 
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
I
n
t
e
r
v
i
e
w
s
 
r
a
n
k
 
s
i
g
n
a
l
,
 
n
o
t
 
j
u
s
t
 
c
o
r
r
e
c
t
n
e
s
s
.
 
T
a
l
k
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
 
a
n
d
 
e
d
g
e
 
c
a
s
e
s
 
i
s
 
e
x
p
e
c
t
e
d
 
o
f
 
s
t
r
o
n
g
 
c
a
n
d
i
d
a
t
e
s
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
P
a
t
t
e
r
n
 
R
e
c
o
g
n
i
t
i
o
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
6
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
V
e
r
y
 
h
i
g
h
 
-
 
t
h
e
 
c
a
p
s
t
o
n
e
 
s
k
i
l
l
 
f
o
r
 
i
n
t
e
r
v
i
e
w
 
p
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
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


