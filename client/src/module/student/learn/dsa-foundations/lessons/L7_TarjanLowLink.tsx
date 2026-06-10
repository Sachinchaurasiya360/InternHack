
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
 
C
o
d
e
2
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


 
 
I
n
l
i
n
e
C
o
d
e
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


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
g
r
a
p
h
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
 
 
S
C
C
 
c
o
l
o
r
 
p
a
l
e
t
t
e
 
(
d
i
s
t
i
n
c
t
 
h
u
e
s
 
f
o
r
 
u
p
 
t
o
 
6
 
S
C
C
s
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




c
o
n
s
t
 
S
C
C
_
C
O
L
O
R
S
 
=
 
[


 
 
"
#
a
3
e
6
3
5
"
,
 
/
/
 
l
i
m
e
-
4
0
0
 
(
a
c
c
e
n
t
)


 
 
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
 
/
/
 
c
y
a
n
-
5
0
0


 
 
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
 
/
/
 
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
#
8
b
5
c
f
6
"
,
 
/
/
 
v
i
o
l
e
t
-
5
0
0


 
 
"
#
f
9
7
3
1
6
"
,
 
/
/
 
o
r
a
n
g
e
-
5
0
0


 
 
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
 
/
/
 
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
0


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
 
 
G
r
a
p
h
 
l
a
y
o
u
t
 
h
e
l
p
e
r
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




f
u
n
c
t
i
o
n
 
c
i
r
c
l
e
L
a
y
o
u
t
(


 
 
i
d
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
,


 
 
c
x
:
 
n
u
m
b
e
r
,


 
 
c
y
:
 
n
u
m
b
e
r
,


 
 
r
:
 
n
u
m
b
e
r
,


)
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
o
u
t
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
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
d
s
.
f
o
r
E
a
c
h
(
(
i
d
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
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
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
 
 
T
a
r
j
a
n
 
S
C
C
 
f
r
a
m
e
 
t
y
p
e
s
 
+
 
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
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
d
o
n
e
"
 
|
 
"
m
a
t
c
h
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
 
T
a
r
j
a
n
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


 
 
d
i
s
c
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


 
 
l
o
w
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


 
 
o
n
S
t
a
c
k
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
 
b
o
o
l
e
a
n
>
;


 
 
s
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


 
 
s
c
c
O
f
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


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
e
S
t
a
t
e
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
 
"
d
e
f
a
u
l
t
"
 
|
 
"
t
r
e
e
"
 
|
 
"
b
a
c
k
"
 
|
 
"
c
r
o
s
s
"
>
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




c
o
n
s
t
 
T
A
R
J
A
N
_
P
S
E
U
D
O
 
=
 
[


 
 
"
T
a
r
j
a
n
-
S
C
C
(
G
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
i
f
 
d
i
s
c
[
v
]
 
=
 
∅
:
 
D
F
S
(
v
)
"
,


 
 
"
D
F
S
(
u
)
:
"
,


 
 
"
 
 
d
i
s
c
[
u
]
 
←
 
l
o
w
[
u
]
 
←
 
t
i
m
e
+
+
"
,


 
 
"
 
 
p
u
s
h
 
u
;
 
o
n
S
t
a
c
k
[
u
]
 
←
 
t
r
u
e
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
e
d
g
e
 
(
u
 
→
 
v
)
:
"
,


 
 
"
 
 
 
 
i
f
 
d
i
s
c
[
v
]
 
=
 
∅
:
 
D
F
S
(
v
)
"
,


 
 
"
 
 
 
 
 
 
l
o
w
[
u
]
 
←
 
m
i
n
(
l
o
w
[
u
]
,
 
l
o
w
[
v
]
)
"
,


 
 
"
 
 
 
 
e
l
i
f
 
o
n
S
t
a
c
k
[
v
]
:
 
l
o
w
[
u
]
 
←
 
m
i
n
(
l
o
w
[
u
]
,
 
d
i
s
c
[
v
]
)
"
,


 
 
"
 
 
i
f
 
l
o
w
[
u
]
 
=
=
 
d
i
s
c
[
u
]
:
 
p
o
p
 
S
C
C
"
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
a
r
j
a
n
 
S
C
C
 
f
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
F
I
X
E
D
_
S
C
C
_
G
R
A
P
H
 
=
 
{


 
 
i
d
s
:
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
,
 
"
D
"
,
 
"
E
"
,
 
"
F
"
]
,


 
 
e
d
g
e
s
:
 
[


 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
B
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
C
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
C
"
,
 
t
o
:
 
"
A
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
D
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
D
"
,
 
t
o
:
 
"
E
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
E
"
,
 
t
o
:
 
"
F
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
F
"
,
 
t
o
:
 
"
D
"
 
}
,


 
 
]
,


}
;




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
a
r
j
a
n
F
r
a
m
e
s
(


 
 
i
d
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
,


 
 
e
d
g
e
s
:
 
{
 
f
r
o
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
o
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
,


)
:
 
T
a
r
j
a
n
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
r
a
m
e
s
:
 
T
a
r
j
a
n
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
 
a
d
j
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
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
 
a
s
 
s
t
r
i
n
g
[
]
]
)
,


 
 
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
e
.
t
o
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
]
.
s
o
r
t
(
)
;




 
 
c
o
n
s
t
 
d
i
s
c
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
l
o
w
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
o
n
S
t
a
c
k
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
 
b
o
o
l
e
a
n
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
s
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
c
c
O
f
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
 
a
s
 
N
o
d
e
S
t
a
t
e
]
)
,


 
 
)
;


 
 
c
o
n
s
t
 
e
d
g
e
S
t
a
t
e
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
 
"
d
e
f
a
u
l
t
"
 
|
 
"
t
r
e
e
"
 
|
 
"
b
a
c
k
"
 
|
 
"
c
r
o
s
s
"
>
 
=
 
{
}
;


 
 
l
e
t
 
t
i
m
e
 
=
 
0
;


 
 
l
e
t
 
s
c
c
C
o
u
n
t
 
=
 
0
;




 
 
c
o
n
s
t
 
s
n
a
p
 
=
 
(


 
 
 
 
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
,


 
 
 
 
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
,


 
 
 
 
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
 
=
 
{
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
?
:
 
s
t
r
i
n
g
,


 
 
)
 
=
>
 
{


 
 
 
 
f
r
a
m
e
s
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
,


 
 
 
 
 
 
v
a
r
s
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
d
i
s
c
:
 
{
 
.
.
.
d
i
s
c
 
}
,


 
 
 
 
 
 
l
o
w
:
 
{
 
.
.
.
l
o
w
 
}
,


 
 
 
 
 
 
o
n
S
t
a
c
k
:
 
{
 
.
.
.
o
n
S
t
a
c
k
 
}
,


 
 
 
 
 
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,


 
 
 
 
 
 
s
c
c
O
f
:
 
{
 
.
.
.
s
c
c
O
f
 
}
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
n
o
d
e
S
t
a
t
e
s
 
}
,


 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
:
 
{
 
.
.
.
e
d
g
e
S
t
a
t
e
s
 
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
,


 
 
 
 
}
)
;


 
 
}
;




 
 
f
u
n
c
t
i
o
n
 
d
f
s
(
u
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
d
i
s
c
[
u
]
 
=
 
l
o
w
[
u
]
 
=
 
t
i
m
e
+
+
;


 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
u
)
;


 
 
 
 
o
n
S
t
a
c
k
[
u
]
 
=
 
t
r
u
e
;


 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
u
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
3
,


 
 
 
 
 
 
`
D
F
S
(
$
{
u
}
)
:
 
d
i
s
c
[
$
{
u
}
]
 
=
 
l
o
w
[
$
{
u
}
]
 
=
 
$
{
d
i
s
c
[
u
]
}
.
 
P
u
s
h
e
d
 
t
o
 
s
t
a
c
k
.
`
,


 
 
 
 
 
 
{
 
u
,
 
"
d
i
s
c
[
u
]
"
:
 
d
i
s
c
[
u
]
!
,
 
"
l
o
w
[
u
]
"
:
 
l
o
w
[
u
]
!
 
}
,


 
 
 
 
 
 
u
,


 
 
 
 
)
;




 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
u
}
-
$
{
v
}
`
;


 
 
 
 
 
 
i
f
 
(
d
i
s
c
[
v
]
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
{


 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
[
k
]
 
=
 
"
t
r
e
e
"
;


 
 
 
 
 
 
 
 
s
n
a
p
(
6
,
 
`
E
d
g
e
 
$
{
u
}
 
→
 
$
{
v
}
:
 
t
r
e
e
 
e
d
g
e
.
 
R
e
c
u
r
s
e
 
i
n
t
o
 
$
{
v
}
.
`
,
 
{
 
u
,
 
v
 
}
)
;


 
 
 
 
 
 
 
 
d
f
s
(
v
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
L
o
w
 
=
 
M
a
t
h
.
m
i
n
(
l
o
w
[
u
]
!
,
 
l
o
w
[
v
]
!
)
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
w
L
o
w
 
!
=
=
 
l
o
w
[
u
]
)
 
{


 
 
 
 
 
 
 
 
 
 
l
o
w
[
u
]
 
=
 
n
e
w
L
o
w
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
7
,


 
 
 
 
 
 
 
 
 
 
 
 
`
B
a
c
k
 
f
r
o
m
 
D
F
S
(
$
{
v
}
)
.
 
l
o
w
[
$
{
u
}
]
 
=
 
m
i
n
(
p
r
e
v
,
 
l
o
w
[
$
{
v
}
]
=
$
{
l
o
w
[
v
]
}
)
 
=
 
$
{
l
o
w
[
u
]
}
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
u
,
 
v
,
 
"
l
o
w
[
u
]
"
:
 
l
o
w
[
u
]
!
,
 
"
l
o
w
[
v
]
"
:
 
l
o
w
[
v
]
!
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
"
l
o
w
[
u
]
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
o
n
S
t
a
c
k
[
v
]
)
 
{


 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
[
k
]
 
=
 
"
b
a
c
k
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
L
o
w
 
=
 
M
a
t
h
.
m
i
n
(
l
o
w
[
u
]
!
,
 
d
i
s
c
[
v
]
!
)
;


 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
8
,


 
 
 
 
 
 
 
 
 
 
`
E
d
g
e
 
$
{
u
}
 
→
 
$
{
v
}
:
 
B
A
C
K
 
e
d
g
e
 
(
v
 
o
n
 
s
t
a
c
k
)
.
 
l
o
w
[
$
{
u
}
]
 
=
 
m
i
n
(
$
{
l
o
w
[
u
]
}
,
 
d
i
s
c
[
$
{
v
}
]
=
$
{
d
i
s
c
[
v
]
}
)
 
=
 
$
{
n
e
w
L
o
w
}
.
`
,


 
 
 
 
 
 
 
 
 
 
{
 
u
,
 
v
,
 
"
d
i
s
c
[
v
]
"
:
 
d
i
s
c
[
v
]
!
,
 
"
l
o
w
[
u
]
 
n
e
w
"
:
 
n
e
w
L
o
w
 
}
,


 
 
 
 
 
 
 
 
 
 
"
l
o
w
[
u
]
"
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
l
o
w
[
u
]
 
=
 
n
e
w
L
o
w
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
[
k
]
 
=
 
"
c
r
o
s
s
"
;


 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
8
,


 
 
 
 
 
 
 
 
 
 
`
E
d
g
e
 
$
{
u
}
 
→
 
$
{
v
}
:
 
c
r
o
s
s
 
e
d
g
e
 
(
v
 
a
l
r
e
a
d
y
 
i
n
 
a
 
f
i
n
a
l
i
z
e
d
 
S
C
C
)
.
 
I
g
n
o
r
e
.
`
,


 
 
 
 
 
 
 
 
 
 
{
 
u
,
 
v
 
}
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
i
f
 
(
l
o
w
[
u
]
 
=
=
=
 
d
i
s
c
[
u
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
c
c
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
 
=
 
s
t
a
c
k
.
p
o
p
(
)
!
;


 
 
 
 
 
 
 
 
o
n
S
t
a
c
k
[
w
]
 
=
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
s
c
c
O
f
[
w
]
 
=
 
s
c
c
C
o
u
n
t
;


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
w
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
 
 
s
c
c
.
p
u
s
h
(
w
)
;


 
 
 
 
 
 
 
 
i
f
 
(
w
 
=
=
=
 
u
)
 
b
r
e
a
k
;


 
 
 
 
 
 
}


 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
9
,


 
 
 
 
 
 
 
 
`
l
o
w
[
$
{
u
}
]
 
=
=
 
d
i
s
c
[
$
{
u
}
]
 
=
 
$
{
d
i
s
c
[
u
]
}
 
→
 
S
C
C
 
r
o
o
t
!
 
S
C
C
 
#
$
{
s
c
c
C
o
u
n
t
 
+
 
1
}
:
 
{
$
{
s
c
c
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
}
.
`
,


 
 
 
 
 
 
 
 
{
 
s
c
c
I
d
:
 
s
c
c
C
o
u
n
t
 
+
 
1
,
 
m
e
m
b
e
r
s
:
 
s
c
c
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
,


 
 
 
 
 
 
 
 
"
s
c
c
I
d
"
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
c
c
C
o
u
n
t
+
+
;


 
 
 
 
}


 
 
}




 
 
s
n
a
p
(
0
,
 
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
:
 
d
i
s
c
[
v
]
 
=
 
∅
 
f
o
r
 
a
l
l
 
v
.
 
t
i
m
e
 
=
 
0
.
"
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
{


 
 
 
 
i
f
 
(
d
i
s
c
[
i
d
]
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
{


 
 
 
 
 
 
s
n
a
p
(
1
,
 
`
O
u
t
e
r
 
l
o
o
p
:
 
$
{
i
d
}
 
u
n
v
i
s
i
t
e
d
 
→
 
c
a
l
l
 
D
F
S
(
$
{
i
d
}
)
.
`
,
 
{


 
 
 
 
 
 
 
 
s
t
a
r
t
V
e
r
t
e
x
:
 
i
d
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
d
f
s
(
i
d
)
;


 
 
 
 
}


 
 
}


 
 
s
n
a
p
(
0
,
 
`
D
o
n
e
.
 
$
{
s
c
c
C
o
u
n
t
}
 
S
C
C
$
{
s
c
c
C
o
u
n
t
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
 
f
o
u
n
d
.
`
,
 
{


 
 
 
 
t
o
t
a
l
S
C
C
s
:
 
s
c
c
C
o
u
n
t
,


 
 
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
r
a
m
e
s
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
 
 
B
r
i
d
g
e
 
f
r
a
m
e
 
t
y
p
e
s
 
+
 
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
 
B
r
i
d
g
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


 
 
d
i
s
c
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


 
 
l
o
w
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


 
 
b
r
i
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


 
 
a
r
t
P
o
i
n
t
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


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
e
S
t
a
t
e
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
 
"
d
e
f
a
u
l
t
"
 
|
 
"
t
r
e
e
"
 
|
 
"
b
a
c
k
"
 
|
 
"
b
r
i
d
g
e
"
>
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




c
o
n
s
t
 
B
R
I
D
G
E
_
P
S
E
U
D
O
 
=
 
[


 
 
"
B
r
i
d
g
e
s
-
A
P
(
G
)
:
 
 
#
 
u
n
d
i
r
e
c
t
e
d
 
G
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
i
f
 
d
i
s
c
[
v
]
 
=
 
∅
:
 
D
F
S
(
v
,
 
n
u
l
l
)
"
,


 
 
"
D
F
S
(
u
,
 
p
a
r
e
n
t
)
:
"
,


 
 
"
 
 
d
i
s
c
[
u
]
 
←
 
l
o
w
[
u
]
 
←
 
t
i
m
e
+
+
"
,


 
 
"
 
 
c
h
i
l
d
C
o
u
n
t
 
←
 
0
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
v
 
o
f
 
u
:
"
,


 
 
"
 
 
 
 
i
f
 
d
i
s
c
[
v
]
 
=
 
∅
:
 
D
F
S
(
v
,
 
u
)
;
 
c
h
i
l
d
C
o
u
n
t
+
+
"
,


 
 
"
 
 
 
 
 
 
l
o
w
[
u
]
 
←
 
m
i
n
(
l
o
w
[
u
]
,
 
l
o
w
[
v
]
)
"
,


 
 
"
 
 
 
 
 
 
i
f
 
l
o
w
[
v
]
 
>
 
d
i
s
c
[
u
]
:
 
(
u
,
v
)
 
i
s
 
B
R
I
D
G
E
"
,


 
 
"
 
 
 
 
 
 
i
f
 
p
a
r
e
n
t
≠
n
u
l
l
 
a
n
d
 
l
o
w
[
v
]
≥
d
i
s
c
[
u
]
:
 
u
 
i
s
 
A
P
"
,


 
 
"
 
 
 
 
e
l
i
f
 
v
 
≠
 
p
a
r
e
n
t
:
 
l
o
w
[
u
]
 
←
 
m
i
n
(
l
o
w
[
u
]
,
 
d
i
s
c
[
v
]
)
"
,


 
 
"
 
 
i
f
 
p
a
r
e
n
t
=
=
n
u
l
l
 
a
n
d
 
c
h
i
l
d
C
o
u
n
t
≥
2
:
 
u
 
(
r
o
o
t
)
 
i
s
 
A
P
"
,


]
;




c
o
n
s
t
 
F
I
X
E
D
_
B
R
I
D
G
E
_
G
R
A
P
H
 
=
 
{


 
 
i
d
s
:
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
,
 
"
D
"
,
 
"
E
"
]
,


 
 
e
d
g
e
s
:
 
[


 
 
 
 
{
 
f
r
o
m
:
 
"
A
"
,
 
t
o
:
 
"
B
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
B
"
,
 
t
o
:
 
"
C
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
C
"
,
 
t
o
:
 
"
A
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
C
"
,
 
t
o
:
 
"
D
"
 
}
,


 
 
 
 
{
 
f
r
o
m
:
 
"
D
"
,
 
t
o
:
 
"
E
"
 
}
,


 
 
]
,


}
;




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
B
r
i
d
g
e
F
r
a
m
e
s
(


 
 
i
d
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
,


 
 
e
d
g
e
s
:
 
{
 
f
r
o
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
o
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
,


)
:
 
B
r
i
d
g
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
r
a
m
e
s
:
 
B
r
i
d
g
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
 
a
d
j
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
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
 
a
s
 
s
t
r
i
n
g
[
]
]
)
,


 
 
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
{


 
 
 
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
e
.
t
o
)
;


 
 
 
 
a
d
j
[
e
.
t
o
]
.
p
u
s
h
(
e
.
f
r
o
m
)
;


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
]
.
s
o
r
t
(
)
;




 
 
c
o
n
s
t
 
d
i
s
c
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
l
o
w
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
 
=
 
{
}
;


 
 
c
o
n
s
t
 
b
r
i
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
 
=
 
[
]
;


 
 
c
o
n
s
t
 
a
r
t
P
o
i
n
t
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
 
=
 
[
]
;


 
 
c
o
n
s
t
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(


 
 
 
 
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
 
a
s
 
N
o
d
e
S
t
a
t
e
]
)
,


 
 
)
;


 
 
c
o
n
s
t
 
e
d
g
e
S
t
a
t
e
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
 
"
d
e
f
a
u
l
t
"
 
|
 
"
t
r
e
e
"
 
|
 
"
b
a
c
k
"
 
|
 
"
b
r
i
d
g
e
"
>
 
=


 
 
 
 
{
}
;


 
 
l
e
t
 
t
i
m
e
 
=
 
0
;




 
 
c
o
n
s
t
 
e
d
g
e
K
e
y
 
=
 
(
a
:
 
s
t
r
i
n
g
,
 
b
:
 
s
t
r
i
n
g
)
 
=
>


 
 
 
 
a
 
<
 
b
 
?
 
`
$
{
a
}
-
$
{
b
}
`
 
:
 
`
$
{
b
}
-
$
{
a
}
`
;




 
 
c
o
n
s
t
 
s
n
a
p
 
=
 
(


 
 
 
 
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
,


 
 
 
 
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
,


 
 
 
 
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
 
=
 
{
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
?
:
 
s
t
r
i
n
g
,


 
 
)
 
=
>
 
{


 
 
 
 
f
r
a
m
e
s
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
,


 
 
 
 
 
 
v
a
r
s
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
d
i
s
c
:
 
{
 
.
.
.
d
i
s
c
 
}
,


 
 
 
 
 
 
l
o
w
:
 
{
 
.
.
.
l
o
w
 
}
,


 
 
 
 
 
 
b
r
i
d
g
e
s
:
 
[
.
.
.
b
r
i
d
g
e
s
]
,


 
 
 
 
 
 
a
r
t
P
o
i
n
t
s
:
 
[
.
.
.
a
r
t
P
o
i
n
t
s
]
,


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
n
o
d
e
S
t
a
t
e
s
 
}
,


 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
:
 
{
 
.
.
.
e
d
g
e
S
t
a
t
e
s
 
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
,


 
 
 
 
}
)
;


 
 
}
;




 
 
f
u
n
c
t
i
o
n
 
d
f
s
(
u
:
 
s
t
r
i
n
g
,
 
p
a
r
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
)
 
{


 
 
 
 
d
i
s
c
[
u
]
 
=
 
l
o
w
[
u
]
 
=
 
t
i
m
e
+
+
;


 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
u
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
l
e
t
 
c
h
i
l
d
C
o
u
n
t
 
=
 
0
;


 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
3
,


 
 
 
 
 
 
`
D
F
S
(
$
{
u
}
,
 
p
a
r
e
n
t
=
$
{
p
a
r
e
n
t
 
?
?
 
"
n
u
l
l
"
}
)
:
 
d
i
s
c
=
$
{
d
i
s
c
[
u
]
}
,
 
l
o
w
=
$
{
l
o
w
[
u
]
}
.
`
,


 
 
 
 
 
 
{
 
u
,
 
p
a
r
e
n
t
:
 
p
a
r
e
n
t
 
?
?
 
"
n
u
l
l
"
,
 
"
d
i
s
c
[
u
]
"
:
 
d
i
s
c
[
u
]
!
,
 
"
l
o
w
[
u
]
"
:
 
l
o
w
[
u
]
!
 
}
,


 
 
 
 
 
 
u
,


 
 
 
 
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
e
d
g
e
K
e
y
(
u
,
 
v
)
;


 
 
 
 
 
 
i
f
 
(
d
i
s
c
[
v
]
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
{


 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
[
k
]
 
=
 
"
t
r
e
e
"
;


 
 
 
 
 
 
 
 
s
n
a
p
(
6
,
 
`
$
{
u
}
,
 
$
{
v
}
:
 
t
r
e
e
 
e
d
g
e
.
 
R
e
c
u
r
s
e
.
`
,
 
{
 
u
,
 
v
 
}
)
;


 
 
 
 
 
 
 
 
d
f
s
(
v
,
 
u
)
;


 
 
 
 
 
 
 
 
c
h
i
l
d
C
o
u
n
t
+
+
;


 
 
 
 
 
 
 
 
l
o
w
[
u
]
 
=
 
M
a
t
h
.
m
i
n
(
l
o
w
[
u
]
!
,
 
l
o
w
[
v
]
!
)
;


 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
7
,


 
 
 
 
 
 
 
 
 
 
`
B
a
c
k
 
f
r
o
m
 
D
F
S
(
$
{
v
}
)
.
 
l
o
w
[
$
{
u
}
]
 
=
 
m
i
n
(
p
r
e
v
,
 
l
o
w
[
$
{
v
}
]
=
$
{
l
o
w
[
v
]
}
)
 
=
 
$
{
l
o
w
[
u
]
}
.
`
,


 
 
 
 
 
 
 
 
 
 
{
 
u
,
 
v
,
 
"
l
o
w
[
u
]
"
:
 
l
o
w
[
u
]
!
,
 
"
l
o
w
[
v
]
"
:
 
l
o
w
[
v
]
!
 
}
,


 
 
 
 
 
 
 
 
 
 
"
l
o
w
[
u
]
"
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
i
f
 
(
l
o
w
[
v
]
!
 
>
 
d
i
s
c
[
u
]
!
)
 
{


 
 
 
 
 
 
 
 
 
 
b
r
i
d
g
e
s
.
p
u
s
h
(
`
$
{
u
}
-
$
{
v
}
`
)
;


 
 
 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
s
[
k
]
 
=
 
"
b
r
i
d
g
e
"
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
`
l
o
w
[
$
{
v
}
]
=
$
{
l
o
w
[
v
]
}
 
>
 
d
i
s
c
[
$
{
u
}
]
=
$
{
d
i
s
c
[
u
]
}
 
→
 
B
R
I
D
G
E
:
 
$
{
u
}
,
 
$
{
v
}
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
b
r
i
d
g
e
:
 
`
$
{
u
}
-
$
{
v
}
`
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
"
b
r
i
d
g
e
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
e
n
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
l
o
w
[
v
]
!
 
>
=
 
d
i
s
c
[
u
]
!
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
a
r
t
P
o
i
n
t
s
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
u
)
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
a
r
t
P
o
i
n
t
s
.
p
u
s
h
(
u
)
;


 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
u
]
 
=
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
9
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
`
l
o
w
[
$
{
v
}
]
=
$
{
l
o
w
[
v
]
}
 
>
=
 
d
i
s
c
[
$
{
u
}
]
=
$
{
d
i
s
c
[
u
]
}
 
(
$
{
u
}
 
n
o
t
 
r
o
o
t
)
 
→
 
A
R
T
I
C
U
L
A
T
I
O
N
:
 
$
{
u
}
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
a
p
:
 
u
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
a
p
"
,


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
v
 
!
=
=
 
p
a
r
e
n
t
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
L
o
w
 
=
 
M
a
t
h
.
m
i
n
(
l
o
w
[
u
]
!
,
 
d
i
s
c
[
v
]
!
)
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
w
L
o
w
 
!
=
=
 
l
o
w
[
u
]
)
 
{


 
 
 
 
 
 
 
 
 
 
l
o
w
[
u
]
 
=
 
n
e
w
L
o
w
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
`
$
{
u
}
,
 
$
{
v
}
:
 
b
a
c
k
 
e
d
g
e
 
(
v
 
a
l
r
e
a
d
y
 
v
i
s
i
t
e
d
)
.
 
l
o
w
[
$
{
u
}
]
 
=
 
m
i
n
(
p
r
e
v
,
 
d
i
s
c
[
$
{
v
}
]
=
$
{
d
i
s
c
[
v
]
}
)
 
=
 
$
{
l
o
w
[
u
]
}
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
u
,
 
v
,
 
"
l
o
w
[
u
]
"
:
 
l
o
w
[
u
]
!
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
"
l
o
w
[
u
]
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
p
a
r
e
n
t
 
=
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
c
h
i
l
d
C
o
u
n
t
 
>
=
 
2
)
 
{


 
 
 
 
 
 
i
f
 
(
!
a
r
t
P
o
i
n
t
s
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
u
)
)
 
{


 
 
 
 
 
 
 
 
a
r
t
P
o
i
n
t
s
.
p
u
s
h
(
u
)
;


 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
u
]
 
=
 
"
m
a
t
c
h
"
;


 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
1
1
,


 
 
 
 
 
 
 
 
 
 
`
R
o
o
t
 
$
{
u
}
 
h
a
s
 
$
{
c
h
i
l
d
C
o
u
n
t
}
 
D
F
S
 
c
h
i
l
d
r
e
n
 
→
 
A
R
T
I
C
U
L
A
T
I
O
N
.
`
,


 
 
 
 
 
 
 
 
 
 
{
 
a
p
:
 
u
,
 
c
h
i
l
d
r
e
n
:
 
c
h
i
l
d
C
o
u
n
t
 
}
,


 
 
 
 
 
 
 
 
 
 
"
a
p
"
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
n
o
d
e
S
t
a
t
e
s
[
u
]
 
!
=
=
 
"
m
a
t
c
h
"
)
 
n
o
d
e
S
t
a
t
e
s
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
}




 
 
s
n
a
p
(
0
,
 
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
:
 
d
i
s
c
[
v
]
 
=
 
∅
 
f
o
r
 
a
l
l
 
v
.
 
t
i
m
e
 
=
 
0
.
"
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
{


 
 
 
 
i
f
 
(
d
i
s
c
[
i
d
]
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
{


 
 
 
 
 
 
s
n
a
p
(
1
,
 
`
C
o
m
p
o
n
e
n
t
 
s
t
a
r
t
:
 
D
F
S
(
$
{
i
d
}
,
 
n
u
l
l
)
.
`
,
 
{
 
s
t
a
r
t
:
 
i
d
 
}
)
;


 
 
 
 
 
 
d
f
s
(
i
d
,
 
u
n
d
e
f
i
n
e
d
)
;


 
 
 
 
}


 
 
}


 
 
s
n
a
p
(


 
 
 
 
0
,


 
 
 
 
`
D
o
n
e
.
 
$
{
b
r
i
d
g
e
s
.
l
e
n
g
t
h
}
 
b
r
i
d
g
e
(
s
)
,
 
$
{
a
r
t
P
o
i
n
t
s
.
l
e
n
g
t
h
}
 
a
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
(
s
)
.
`
,


 
 
 
 
{
 
b
r
i
d
g
e
s
:
 
b
r
i
d
g
e
s
.
l
e
n
g
t
h
,
 
a
r
t
P
o
i
n
t
s
:
 
a
r
t
P
o
i
n
t
s
.
l
e
n
g
t
h
 
}
,


 
 
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
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
 
 
G
r
a
p
h
 
S
V
G
 
r
e
n
d
e
r
e
r
 
(
i
n
l
i
n
e
,
 
d
i
r
e
c
t
e
d
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




c
o
n
s
t
 
N
O
D
E
_
R
 
=
 
2
2
;


c
o
n
s
t
 
S
V
G
_
W
 
=
 
5
2
0
;


c
o
n
s
t
 
S
V
G
_
H
 
=
 
3
0
0
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
o
d
e
C
o
l
o
r
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
,
 
s
c
c
I
d
?
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
&
&
 
s
c
c
I
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
)


 
 
 
 
r
e
t
u
r
n
 
S
C
C
_
C
O
L
O
R
S
[
s
c
c
I
d
 
%
 
S
C
C
_
C
O
L
O
R
S
.
l
e
n
g
t
h
]
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
f
r
o
n
t
i
e
r
"
)
 
r
e
t
u
r
n
 
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
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
m
a
t
c
h
"
)
 
r
e
t
u
r
n
 
"
#
1
0
b
9
8
1
"
;
 
/
/
 
e
m
e
r
a
l
d
 
f
o
r
 
A
P


 
 
r
e
t
u
r
n
 
T
H
E
M
E
.
b
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
 
n
o
d
e
B
o
r
d
e
r
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
f
r
o
n
t
i
e
r
"
)
 
r
e
t
u
r
n
 
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
D
a
r
k
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
m
a
t
c
h
"
)
 
r
e
t
u
r
n
 
"
#
0
6
5
f
4
6
"
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
)
 
r
e
t
u
r
n
 
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
;


 
 
r
e
t
u
r
n
 
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
 
n
o
d
e
T
e
x
t
C
o
l
o
r
(
s
t
a
t
e
:
 
N
o
d
e
S
t
a
t
e
,
 
s
c
c
I
d
?
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
&
&
 
s
c
c
I
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
)
 
r
e
t
u
r
n
 
"
#
1
c
1
9
1
7
"
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
f
r
o
n
t
i
e
r
"
)
 
r
e
t
u
r
n
 
"
#
1
c
1
9
1
7
"
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
m
a
t
c
h
"
)
 
r
e
t
u
r
n
 
"
#
f
f
f
"
;


 
 
r
e
t
u
r
n
 
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
;


}




t
y
p
e
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
t
r
e
e
"
 
|
 
"
b
a
c
k
"
 
|
 
"
c
r
o
s
s
"
 
|
 
"
b
r
i
d
g
e
"
;




f
u
n
c
t
i
o
n
 
e
d
g
e
C
o
l
o
r
(
s
t
a
t
e
:
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
t
r
e
e
"
)
 
r
e
t
u
r
n
 
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
D
a
r
k
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
b
a
c
k
"
)
 
r
e
t
u
r
n
 
"
#
f
5
9
e
0
b
"
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
b
r
i
d
g
e
"
)
 
r
e
t
u
r
n
 
"
#
d
c
2
6
2
6
"
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
c
r
o
s
s
"
)
 
r
e
t
u
r
n
 
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
M
u
t
e
d
;


 
 
r
e
t
u
r
n
 
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
 
e
d
g
e
W
i
d
t
h
(
s
t
a
t
e
:
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
)
:
 
n
u
m
b
e
r
 
{


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
t
r
e
e
"
 
|
|
 
s
t
a
t
e
 
=
=
=
 
"
b
r
i
d
g
e
"
)
 
r
e
t
u
r
n
 
2
.
5
;


 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
b
a
c
k
"
)
 
r
e
t
u
r
n
 
2
;


 
 
r
e
t
u
r
n
 
1
.
5
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
 
D
i
r
e
c
t
e
d
G
r
a
p
h
S
V
G
P
r
o
p
s
 
{


 
 
i
d
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
d
g
e
s
:
 
{
 
f
r
o
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
o
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


 
 
p
o
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
;


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
e
S
t
a
t
e
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
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
>
;


 
 
s
c
c
O
f
?
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


 
 
d
i
s
c
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


 
 
l
o
w
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


 
 
d
i
r
e
c
t
e
d
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




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
n
o
d
e
S
t
a
t
e
s
,


 
 
e
d
g
e
S
t
a
t
e
s
,


 
 
s
c
c
O
f
,


 
 
d
i
s
c
,


 
 
l
o
w
,


 
 
d
i
r
e
c
t
e
d
,


}
:
 
D
i
r
e
c
t
e
d
G
r
a
p
h
S
V
G
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
 
e
d
g
e
K
e
y
 
=
 
(
a
:
 
s
t
r
i
n
g
,
 
b
:
 
s
t
r
i
n
g
)
 
=
>


 
 
 
 
d
i
r
e
c
t
e
d
 
?
 
`
$
{
a
}
-
$
{
b
}
`
 
:
 
a
 
<
 
b
 
?
 
`
$
{
a
}
-
$
{
b
}
`
 
:
 
`
$
{
b
}
-
$
{
a
}
`
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
v
g


 
 
 
 
 
 
w
i
d
t
h
=
{
S
V
G
_
W
}


 
 
 
 
 
 
h
e
i
g
h
t
=
{
S
V
G
_
H
}


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
S
V
G
_
W
}
 
$
{
S
V
G
_
H
}
`
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
 
m
a
x
-
w
-
f
u
l
l
 
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
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r


 
 
 
 
 
 
 
 
 
 
i
d
=
"
a
r
r
o
w
-
d
e
f
a
u
l
t
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"


 
 
 
 
 
 
 
 
 
 
r
e
f
X
=
"
7
"


 
 
 
 
 
 
 
 
 
 
r
e
f
Y
=
"
3
"


 
 
 
 
 
 
 
 
 
 
o
r
i
e
n
t
=
"
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
"
0
 
0
,
 
8
 
3
,
 
0
 
6
"
 
f
i
l
l
=
{
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
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r


 
 
 
 
 
 
 
 
 
 
i
d
=
"
a
r
r
o
w
-
t
r
e
e
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"


 
 
 
 
 
 
 
 
 
 
r
e
f
X
=
"
7
"


 
 
 
 
 
 
 
 
 
 
r
e
f
Y
=
"
3
"


 
 
 
 
 
 
 
 
 
 
o
r
i
e
n
t
=
"
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
"
0
 
0
,
 
8
 
3
,
 
0
 
6
"
 
f
i
l
l
=
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
D
a
r
k
}
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r


 
 
 
 
 
 
 
 
 
 
i
d
=
"
a
r
r
o
w
-
b
a
c
k
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"


 
 
 
 
 
 
 
 
 
 
r
e
f
X
=
"
7
"


 
 
 
 
 
 
 
 
 
 
r
e
f
Y
=
"
3
"


 
 
 
 
 
 
 
 
 
 
o
r
i
e
n
t
=
"
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
"
0
 
0
,
 
8
 
3
,
 
0
 
6
"
 
f
i
l
l
=
"
#
f
5
9
e
0
b
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r


 
 
 
 
 
 
 
 
 
 
i
d
=
"
a
r
r
o
w
-
c
r
o
s
s
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"


 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"


 
 
 
 
 
 
 
 
 
 
r
e
f
X
=
"
7
"


 
 
 
 
 
 
 
 
 
 
r
e
f
Y
=
"
3
"


 
 
 
 
 
 
 
 
 
 
o
r
i
e
n
t
=
"
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
"
0
 
0
,
 
8
 
3
,
 
0
 
6
"
 
f
i
l
l
=
{
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
M
u
t
e
d
}
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
{
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
r
o
m
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
f
r
o
m
 
|
|
 
!
t
o
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
 
k
 
=
 
e
d
g
e
K
e
y
(
e
.
f
r
o
m
,
 
e
.
t
o
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
(
e
d
g
e
S
t
a
t
e
s
[
k
]
 
?
?
 
"
d
e
f
a
u
l
t
"
)
 
a
s
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
t
o
.
x
 
-
 
f
r
o
m
.
x
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
t
o
.
y
 
-
 
f
r
o
m
.
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
;


 
 
 
 
 
 
 
 
i
f
 
(
l
e
n
 
<
 
1
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
 
u
x
 
=
 
d
x
 
/
 
l
e
n
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
y
 
=
 
d
y
 
/
 
l
e
n
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
f
r
o
m
.
x
 
+
 
u
x
 
*
 
N
O
D
E
_
R
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
1
 
=
 
f
r
o
m
.
y
 
+
 
u
y
 
*
 
N
O
D
E
_
R
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
t
o
.
x
 
-
 
u
x
 
*
 
(
N
O
D
E
_
R
 
+
 
(
d
i
r
e
c
t
e
d
 
?
 
6
 
:
 
0
)
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
2
 
=
 
t
o
.
y
 
-
 
u
y
 
*
 
(
N
O
D
E
_
R
 
+
 
(
d
i
r
e
c
t
e
d
 
?
 
6
 
:
 
0
)
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
a
r
k
e
r
I
d
 
=
 
d
i
r
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
?
 
`
a
r
r
o
w
-
$
{
s
t
 
=
=
=
 
"
b
r
i
d
g
e
"
 
|
|
 
s
t
 
=
=
=
 
"
d
e
f
a
u
l
t
"
 
?
 
"
d
e
f
a
u
l
t
"
 
:
 
s
t
}
`


 
 
 
 
 
 
 
 
 
 
:
 
u
n
d
e
f
i
n
e
d
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
x
1
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
y
1
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
x
2
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
y
2
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
e
d
g
e
C
o
l
o
r
(
s
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
e
d
g
e
W
i
d
t
h
(
s
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
s
t
 
=
=
=
 
"
c
r
o
s
s
"
 
?
 
"
4
 
3
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
{
m
a
r
k
e
r
I
d
 
?
 
`
u
r
l
(
#
$
{
m
a
r
k
e
r
I
d
}
)
`
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
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
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
p
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
 
s
c
c
I
d
 
=
 
s
c
c
O
f
?
.
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
n
o
d
e
C
o
l
o
r
(
s
t
,
 
s
c
c
I
d
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
 
=
 
n
o
d
e
B
o
r
d
e
r
(
s
t
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
e
x
t
C
o
l
 
=
 
n
o
d
e
T
e
x
t
C
o
l
o
r
(
s
t
,
 
s
c
c
I
d
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
d
i
s
c
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
 
=
 
l
o
w
[
i
d
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
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
N
O
D
E
_
R
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
f
i
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
t
 
=
=
=
 
"
f
r
o
n
t
i
e
r
"
 
?
 
2
.
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
.
y
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
t
e
x
t
C
o
l
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
.
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
.
y
 
+
 
N
O
D
E
_
R
 
+
 
1
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
9
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
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
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
:
{
d
}
 
l
:
{
l
 
?
?
 
"
?
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
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
 
 
S
C
C
 
s
e
c
t
i
o
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
 
S
C
C
S
e
c
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
d
s
,
 
e
d
g
e
s
 
}
 
=
 
F
I
X
E
D
_
S
C
C
_
G
R
A
P
H
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
 
b
u
i
l
d
T
a
r
j
a
n
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
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


 
 
c
o
n
s
t
 
p
o
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
 
c
i
r
c
l
e
L
a
y
o
u
t
(
i
d
s
,
 
S
V
G
_
W
 
/
 
2
,
 
S
V
G
_
H
 
/
 
2
 
-
 
1
0
,
 
1
0
0
)
,


 
 
 
 
[
i
d
s
]
,


 
 
)
;




 
 
c
o
n
s
t
 
s
c
c
C
o
l
o
r
s
 
=
 
f
r
a
m
e


 
 
 
 
?
 
i
d
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
i
d
)
 
=
>
 
f
r
a
m
e
.
s
c
c
O
f
[
i
d
]
 
!
=
=
 
u
n
d
e
f
i
n
e
d
)


 
 
 
 
 
 
 
 
.
r
e
d
u
c
e
<
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
 
s
t
r
i
n
g
[
]
>
>
(
(
a
c
c
,
 
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
 
=
 
f
r
a
m
e
.
s
c
c
O
f
[
i
d
]
!
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
a
c
c
[
s
]
)
 
a
c
c
[
s
]
 
=
 
[
]
;


 
 
 
 
 
 
 
 
 
 
a
c
c
[
s
]
.
p
u
s
h
(
i
d
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
a
c
c
;


 
 
 
 
 
 
 
 
}
,
 
{
}
)


 
 
 
 
:
 
{
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
T
a
r
j
a
n
 
S
C
C
,
 
l
o
w
-
l
i
n
k
 
t
e
c
h
n
i
q
u
e
 
(
d
i
r
e
c
t
e
d
 
g
r
a
p
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
T
A
R
J
A
N
_
P
S
E
U
D
O
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
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
G
r
a
p
h
:
 
A
→
B
→
C
→
A
 
(
S
C
C
1
)
 
|
 
B
→
D
→
E
→
F
→
D
 
(
S
C
C
2
)
 
|
 
e
a
c
h
 
n
o
d
e
 
s
h
o
w
s
 
d
:
d
i
s
c
 
l
:
l
o
w


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
G
r
a
p
h
S
V
G


 
 
 
 
 
 
 
 
 
 
i
d
s
=
{
i
d
s
}


 
 
 
 
 
 
 
 
 
 
e
d
g
e
s
=
{
e
d
g
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
s
=
{
p
o
s
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
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
n
o
d
e
S
t
a
t
e
s
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
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
e
d
g
e
S
t
a
t
e
s
 
a
s
 
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
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
>
 
?
?
 
{
}


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
s
c
c
O
f
=
{
f
r
a
m
e
?
.
s
c
c
O
f
}


 
 
 
 
 
 
 
 
 
 
d
i
s
c
=
{
f
r
a
m
e
?
.
d
i
s
c
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
l
o
w
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
o
w
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
d
i
r
e
c
t
e
d
=
{
t
r
u
e
}


 
 
 
 
 
 
 
 
/
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
c
o
l
 
g
a
p
-
2
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
/
6
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
x
-
3
 
p
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
"
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
 
g
a
p
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
s
t
a
r
t
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
 
m
i
n
-
w
-
3
6
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
F
S
 
S
t
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
s
t
a
c
k
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
 
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
s
p
a
n
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
-
r
e
v
e
r
s
e
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
s
t
a
c
k
 
?
?
 
[
]
)
.
m
a
p
(
(
v
,
 
i
,
 
a
r
r
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
3
 
p
x
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
 
=
=
=
 
a
r
r
.
l
e
n
g
t
h
 
-
 
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
1
2
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
 
=
=
=
 
a
r
r
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
#
1
c
1
9
1
7
"
 
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
D
a
r
k
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
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
o
p
a
c
i
t
y
-
7
5
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
:
{
f
r
a
m
e
?
.
d
i
s
c
[
v
]
}
 
l
:
{
f
r
a
m
e
?
.
l
o
w
[
v
]
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
4
8
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
s
 
F
o
u
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
c
c
C
o
l
o
r
s
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
m
o
n
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
n
e
 
y
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
s
c
c
C
o
l
o
r
s
)
.
m
a
p
(
(
[
s
i
d
,
 
m
e
m
b
e
r
s
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
s
i
d
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
 
f
o
n
t
-
b
o
l
d
 
p
x
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
_
C
O
L
O
R
S
[
N
u
m
b
e
r
(
s
i
d
)
 
%
 
S
C
C
_
C
O
L
O
R
S
.
l
e
n
g
t
h
]
 
+
 
"
2
2
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
_
C
O
L
O
R
S
[
N
u
m
b
e
r
(
s
i
d
)
 
%
 
S
C
C
_
C
O
L
O
R
S
.
l
e
n
g
t
h
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
p
a
c
i
t
y
-
6
0
"
>
S
C
C
 
#
{
N
u
m
b
e
r
(
s
i
d
)
 
+
 
1
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
>
{
"
{
"
 
+
 
m
e
m
b
e
r
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
 
+
 
"
}
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
 
m
t
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
 
r
o
o
t
:
 
v
e
r
t
e
x
 
w
h
e
r
e
 
l
o
w
[
u
]
 
=
=
 
d
i
s
c
[
u
]
.
 
S
t
a
c
k
 
p
o
p
s
 
t
o
 
t
h
a
t
 
v
e
r
t
e
x
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
s
t
o
n
e
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
D
a
r
k
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
e
e
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
M
u
t
e
d
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
r
o
s
s
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
 
n
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
 
S
C
C
_
C
O
L
O
R
S
[
0
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
C
C
 
c
o
l
o
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
 
 
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
 
 
B
r
i
d
g
e
 
s
e
c
t
i
o
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
 
B
r
i
d
g
e
S
e
c
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
d
s
,
 
e
d
g
e
s
 
}
 
=
 
F
I
X
E
D
_
B
R
I
D
G
E
_
G
R
A
P
H
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
 
b
u
i
l
d
B
r
i
d
g
e
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
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


 
 
c
o
n
s
t
 
p
o
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
 
c
i
r
c
l
e
L
a
y
o
u
t
(
i
d
s
,
 
S
V
G
_
W
 
/
 
2
,
 
S
V
G
_
H
 
/
 
2
,
 
1
0
0
)
,


 
 
 
 
[
i
d
s
]
,


 
 
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
B
r
i
d
g
e
s
 
a
n
d
 
A
r
t
i
c
u
l
a
t
i
o
n
 
P
o
i
n
t
s
,
 
l
o
w
-
l
i
n
k
 
t
e
c
h
n
i
q
u
e
 
(
u
n
d
i
r
e
c
t
e
d
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
B
R
I
D
G
E
_
P
S
E
U
D
O
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
m
o
n
o
"
>


 
 
 
 
 
 
 
 
 
 
G
r
a
p
h
:
 
A
-
B
-
C
-
A
 
(
c
y
c
l
e
,
 
n
o
 
b
r
i
d
g
e
s
)
 
+
 
C
-
D
-
E
 
(
p
a
t
h
,
 
b
r
i
d
g
e
s
 
C
-
D
 
a
n
d
 
D
-
E
)


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
G
r
a
p
h
S
V
G


 
 
 
 
 
 
 
 
 
 
i
d
s
=
{
i
d
s
}


 
 
 
 
 
 
 
 
 
 
e
d
g
e
s
=
{
e
d
g
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
s
=
{
p
o
s
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
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
n
o
d
e
S
t
a
t
e
s
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
e
d
g
e
S
t
a
t
e
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
e
d
g
e
S
t
a
t
e
s
 
a
s
 
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
 
E
d
g
e
D
i
s
p
l
a
y
S
t
a
t
e
>
 
?
?
 
{
}


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
s
c
c
O
f
=
{
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
d
i
s
c
=
{
f
r
a
m
e
?
.
d
i
s
c
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
l
o
w
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
o
w
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
d
i
r
e
c
t
e
d
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
/
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
c
o
l
 
g
a
p
-
2
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
/
6
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
x
-
3
 
p
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
"
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
 
g
a
p
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
 
m
i
n
-
w
-
3
6
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
i
d
g
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
b
r
i
d
g
e
s
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
n
e
 
y
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
b
r
i
d
g
e
s
 
?
?
 
[
]
)
.
m
a
p
(
(
b
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
x
-
2
 
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
 
"
r
g
b
a
(
2
2
0
,
3
8
,
3
8
,
0
.
1
0
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
a
n
g
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
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
 
m
i
n
-
w
-
3
6
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
r
t
i
c
u
l
a
t
i
o
n
 
P
o
i
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
a
r
t
P
o
i
n
t
s
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
n
e
 
y
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
(
f
r
a
m
e
?
.
a
r
t
P
o
i
n
t
s
 
?
?
 
[
]
)
.
m
a
p
(
(
v
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
v
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
1
 
r
o
u
n
d
e
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
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
2
)
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
5
f
4
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
8
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
e
s
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
[
1
1
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
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
i
d
g
e
:
 
l
o
w
[
v
]
 
&
g
t
;
 
d
i
s
c
[
u
]
 
f
o
r
 
t
r
e
e
 
e
d
g
e
 
u
,
 
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
[
1
1
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
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
P
 
(
n
o
n
-
r
o
o
t
)
:
 
l
o
w
[
v
]
 
≥
 
d
i
s
c
[
u
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
[
1
1
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
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
P
 
(
r
o
o
t
)
:
 
≥
 
2
 
D
F
S
 
c
h
i
l
d
r
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
o
n
e
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
D
a
r
k
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
e
e
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
1
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
r
i
d
g
e


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
 
m
r
-
1
 
a
l
i
g
n
-
m
i
d
d
l
e
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
 
"
#
1
0
b
9
8
1
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t


 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
 
 
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




t
y
p
e
 
V
i
s
M
o
d
e
 
=
 
"
s
c
c
"
 
|
 
"
b
r
i
d
g
e
s
"
;




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
m
o
d
e
,
 
s
e
t
M
o
d
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
V
i
s
M
o
d
e
>
(
"
s
c
c
"
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
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
s
c
c
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
M
o
d
e
(
"
s
c
c
"
)
}
>


 
 
 
 
 
 
 
 
 
 
T
a
r
j
a
n
 
S
C
C
 
(
d
i
r
e
c
t
e
d
)


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
b
r
i
d
g
e
s
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
M
o
d
e
(
"
b
r
i
d
g
e
s
"
)
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
B
r
i
d
g
e
s
 
&
a
m
p
;
 
A
r
t
i
c
u
l
a
t
i
o
n
 
P
o
i
n
t
s
 
(
u
n
d
i
r
e
c
t
e
d
)


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
s
c
c
"
 
?
 
<
S
C
C
S
e
c
t
i
o
n
 
/
>
 
:
 
<
B
r
i
d
g
e
S
e
c
t
i
o
n
 
/
>
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
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
T
h
e
 
l
o
w
-
l
i
n
k
 
i
n
s
i
g
h
t
"
,
 
b
:
 
"
D
F
S
 
g
i
v
e
s
 
e
v
e
r
y
 
v
e
r
t
e
x
 
a
 
d
i
s
c
o
v
e
r
y
 
t
i
m
e
 
d
i
s
c
[
u
]
.
 
T
h
e
 
l
o
w
-
l
i
n
k
 
l
o
w
[
u
]
 
=
 
t
h
e
 
s
m
a
l
l
e
s
t
 
d
i
s
c
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
u
'
s
 
D
F
S
 
s
u
b
t
r
e
e
 
u
s
i
n
g
 
A
T
 
M
O
S
T
 
O
N
E
 
b
a
c
k
 
e
d
g
e
.
 
T
h
i
s
 
s
i
n
g
l
e
 
n
u
m
b
e
r
 
c
a
p
t
u
r
e
s
 
w
h
e
t
h
e
r
 
u
'
s
 
s
u
b
t
r
e
e
 
c
a
n
 
'
c
l
i
m
b
 
b
a
c
k
 
u
p
'
 
t
h
e
 
D
F
S
 
t
r
e
e
,
 
a
n
d
 
t
h
a
t
'
s
 
w
h
a
t
 
t
e
l
l
s
 
u
s
 
a
b
o
u
t
 
c
y
c
l
e
s
,
 
S
C
C
s
,
 
b
r
i
d
g
e
s
,
 
a
n
d
 
a
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
o
n
e
 
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
o
l
v
e
s
 
f
o
u
r
 
p
r
o
b
l
e
m
s
"
,
 
b
:
 
"
T
a
r
j
a
n
'
s
 
1
9
7
2
 
p
a
p
e
r
 
s
h
o
w
e
d
 
t
h
a
t
 
d
i
s
c
 
+
 
l
o
w
 
l
e
t
 
y
o
u
 
c
o
m
p
u
t
e
 
(
1
)
 
S
t
r
o
n
g
l
y
 
C
o
n
n
e
c
t
e
d
 
C
o
m
p
o
n
e
n
t
s
 
i
n
 
O
(
V
+
E
)
,
 
(
2
)
 
B
r
i
d
g
e
s
 
i
n
 
O
(
V
+
E
)
,
 
(
3
)
 
A
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
s
 
i
n
 
O
(
V
+
E
)
,
 
(
4
)
 
B
i
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
 
i
n
 
O
(
V
+
E
)
.
 
A
l
l
 
f
r
o
m
 
o
n
e
 
D
F
S
,
 
s
a
m
e
 
c
o
d
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
o
s
t
-
p
r
o
c
e
s
s
i
n
g
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
T
a
r
j
a
n
 
S
C
C
 
v
s
 
K
o
s
a
r
a
j
u
"
,
 
b
:
 
"
B
o
t
h
 
f
i
n
d
 
S
C
C
s
 
i
n
 
O
(
V
+
E
)
.
 
K
o
s
a
r
a
j
u
 
d
o
e
s
 
T
W
O
 
D
F
S
 
p
a
s
s
e
s
 
(
o
n
e
 
o
n
 
G
,
 
o
n
e
 
o
n
 
i
t
s
 
t
r
a
n
s
p
o
s
e
 
i
n
 
f
i
n
i
s
h
-
t
i
m
e
 
o
r
d
e
r
)
.
 
T
a
r
j
a
n
 
d
o
e
s
 
O
N
E
 
p
a
s
s
.
 
B
o
t
h
 
g
i
v
e
 
t
h
e
 
s
a
m
e
 
S
C
C
s
.
 
T
a
r
j
a
n
 
i
s
 
m
o
r
e
 
c
a
c
h
e
-
f
r
i
e
n
d
l
y
;
 
K
o
s
a
r
a
j
u
 
i
s
 
c
o
n
c
e
p
t
u
a
l
l
y
 
s
i
m
p
l
e
r
 
t
o
 
t
e
a
c
h
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
B
r
i
d
g
e
"
,
 
b
:
 
"
A
n
 
e
d
g
e
 
w
h
o
s
e
 
r
e
m
o
v
a
l
 
i
n
c
r
e
a
s
e
s
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
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
.
 
I
n
 
a
 
r
o
a
d
 
n
e
t
w
o
r
k
,
 
a
 
b
r
i
d
g
e
 
i
s
 
a
 
r
o
a
d
 
w
h
o
s
e
 
c
l
o
s
u
r
e
 
s
p
l
i
t
s
 
t
w
o
 
r
e
g
i
o
n
s
.
 
T
e
s
t
:
 
t
r
e
e
 
e
d
g
e
 
u
 
t
o
 
v
 
i
s
 
a
 
b
r
i
d
g
e
 
i
f
f
 
l
o
w
[
v
]
 
>
 
d
i
s
c
[
u
]
,
 
m
e
a
n
i
n
g
 
v
'
s
 
s
u
b
t
r
e
e
 
h
a
s
 
N
O
 
b
a
c
k
 
e
d
g
e
 
s
k
i
p
p
i
n
g
 
o
v
e
r
 
u
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
A
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
 
(
c
u
t
 
v
e
r
t
e
x
)
"
,
 
b
:
 
"
A
 
v
e
r
t
e
x
 
w
h
o
s
e
 
r
e
m
o
v
a
l
 
d
i
s
c
o
n
n
e
c
t
s
 
t
h
e
 
g
r
a
p
h
.
 
T
w
o
 
c
a
s
e
s
:
 
(
a
)
 
n
o
n
-
r
o
o
t
 
u
 
i
s
 
A
P
 
i
f
f
 
s
o
m
e
 
c
h
i
l
d
 
v
 
h
a
s
 
l
o
w
[
v
]
 
>
=
 
d
i
s
c
[
u
]
;
 
(
b
)
 
r
o
o
t
 
i
s
 
A
P
 
i
f
f
 
i
t
 
h
a
s
 
2
 
o
r
 
m
o
r
e
 
D
F
S
 
c
h
i
l
d
r
e
n
.
 
U
s
e
d
 
i
n
 
n
e
t
w
o
r
k
 
r
e
l
i
a
b
i
l
i
t
y
,
 
b
i
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
 
d
e
c
o
m
p
o
s
i
t
i
o
n
,
 
s
o
c
i
a
l
-
n
e
t
w
o
r
k
 
i
n
f
l
u
e
n
c
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
d
i
r
e
c
t
e
d
 
n
e
e
d
s
 
S
C
C
,
 
u
n
d
i
r
e
c
t
e
d
 
n
e
e
d
s
 
b
r
i
d
g
e
s
/
A
P
"
,
 
b
:
 
"
I
n
 
a
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
,
 
m
u
t
u
a
l
 
r
e
a
c
h
a
b
i
l
i
t
y
 
d
e
f
i
n
e
s
 
e
q
u
i
v
a
l
e
n
c
e
 
c
l
a
s
s
e
s
,
 
t
h
o
s
e
 
a
r
e
 
S
C
C
s
.
 
I
n
 
a
n
 
u
n
d
i
r
e
c
t
e
d
 
g
r
a
p
h
,
 
e
v
e
r
y
 
t
r
a
v
e
r
s
a
b
l
e
 
p
a
i
r
 
i
s
 
m
u
t
u
a
l
l
y
 
r
e
a
c
h
a
b
l
e
,
 
s
o
 
t
h
e
 
q
u
e
s
t
i
o
n
 
s
h
i
f
t
s
 
t
o
 
F
R
A
G
I
L
I
T
Y
:
 
w
h
i
c
h
 
e
d
g
e
s
 
o
r
 
v
e
r
t
i
c
e
s
 
a
r
e
 
c
r
i
t
i
c
a
l
 
t
o
 
k
e
e
p
i
n
g
 
t
h
e
 
g
r
a
p
h
 
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
o
n
e
 
d
f
s
,
 
f
o
u
r
 
p
r
o
b
l
e
m
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
e
n
t
a
l
 
m
o
d
e
l
:
 
t
h
e
 
s
w
i
s
s
-
a
r
m
y
 
D
F
S
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


 
 
 
 
 
 
 
 
 
 
T
a
r
j
a
n
'
s
 
l
o
w
-
l
i
n
k
 
i
s
 
t
h
e
 
s
w
i
s
s
-
a
r
m
y
 
D
F
S
:
 
a
 
s
i
n
g
l
e
 
r
e
c
u
r
s
i
v
e
 
w
a
l
k
 
o
v
e
r
 
t
h
e
 
g
r
a
p
h
 
t
h
a
t
,
 
b
y
 
t
r
a
c
k
i
n
g
 
<
I
n
l
i
n
e
C
o
d
e
>
d
i
s
c
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
n
d
 
<
I
n
l
i
n
e
C
o
d
e
>
l
o
w
<
/
I
n
l
i
n
e
C
o
d
e
>
 
p
e
r
 
v
e
r
t
e
x
,
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
 
a
n
s
w
e
r
s
 
q
u
e
s
t
i
o
n
s
 
a
b
o
u
t
 
c
y
c
l
e
s
,
 
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
 
a
n
d
 
s
t
r
u
c
t
u
r
a
l
 
f
r
a
g
i
l
i
t
y
.
 
T
h
e
 
t
e
c
h
n
i
q
u
e
 
i
s
 
o
n
e
 
o
f
 
t
h
e
 
m
o
s
t
-
r
e
u
s
e
d
 
i
d
e
a
s
 
i
n
 
g
r
a
p
h
 
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
,
 
o
n
c
e
 
y
o
u
 
i
n
t
e
r
n
a
l
i
z
e
 
<
I
n
l
i
n
e
C
o
d
e
>
l
o
w
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
f
o
u
r
 
c
l
a
s
s
i
c
a
l
 
p
r
o
b
l
e
m
s
 
b
e
c
o
m
e
 
t
r
i
v
i
a
l
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
c
a
r
d
s
.
m
a
p
(
(
c
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
2
 
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
 
u
p
p
e
r
c
a
s
e
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
c
.
t
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
c
.
b
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
 
 
T
r
y
 
I
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
 
T
r
y
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
 
p
r
o
b
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
O
n
 
t
h
e
 
S
C
C
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
 
A
>
B
,
 
B
>
C
,
 
C
>
A
,
 
B
>
D
,
 
D
>
E
,
 
E
>
F
,
 
F
>
D
,
 
G
>
F
,
 
G
>
H
,
 
H
>
G
,
 
h
o
w
 
m
a
n
y
 
S
C
C
s
 
a
r
e
 
t
h
e
r
e
?
"
,
 
a
:
 
"
3
"
 
}
,


 
 
 
 
{
 
q
:
 
"
R
e
m
o
v
i
n
g
 
a
 
b
r
i
d
g
e
 
a
l
w
a
y
s
 
i
n
c
r
e
a
s
e
s
 
t
h
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
-
c
o
m
p
o
n
e
n
t
 
c
o
u
n
t
 
b
y
 
h
o
w
 
m
a
n
y
?
"
,
 
a
:
 
"
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
r
u
e
/
F
a
l
s
e
:
 
A
 
g
r
a
p
h
 
w
i
t
h
 
N
O
 
b
r
i
d
g
e
s
 
h
a
s
 
a
 
E
u
l
e
r
i
a
n
 
c
i
r
c
u
i
t
.
"
,
 
a
:
 
"
F
a
l
s
e
 
(
n
e
e
d
 
a
l
l
 
e
v
e
n
 
d
e
g
r
e
e
s
 
t
o
o
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
h
e
 
p
a
t
h
 
A
-
B
,
 
B
-
C
,
 
C
-
D
,
 
D
-
E
 
h
a
s
 
h
o
w
 
m
a
n
y
 
b
r
i
d
g
e
s
?
 
H
o
w
 
m
a
n
y
 
A
P
s
?
"
,
 
a
:
 
"
4
 
b
r
i
d
g
e
s
,
 
3
 
A
P
s
 
(
B
,
 
C
,
 
D
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
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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
(
s
t
r
i
n
g
 
|
 
n
u
l
l
)
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
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
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
3
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
V
e
r
i
f
y
 
e
a
c
h
 
i
n
 
t
h
e
 
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
 
w
h
e
n
 
t
h
e
 
a
n
i
m
a
t
i
o
n
 
i
s
 
a
v
a
i
l
a
b
l
e
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
p
r
o
b
s
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
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
r
-
2
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
q
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
 
g
a
p
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
 
?
?
 
"
"
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
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
;
 
s
e
t
G
u
e
s
s
e
s
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
y
o
u
r
 
a
n
s
w
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
m
 
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
1
0
0
 
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
 
d
a
r
k
:
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
w
h
i
t
e
/
3
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
 
m
i
n
W
i
d
t
h
:
 
2
4
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
v
)
;
 
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
w
h
i
t
e
/
3
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
c
o
l
o
r
s
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
i
m
e
-
2
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
l
i
m
e
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
l
i
m
e
-
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
W
h
y
 
t
h
e
 
b
r
i
d
g
e
 
t
e
s
t
 
i
s
 
l
o
w
[
v
]
 
&
g
t
;
 
d
i
s
c
[
u
]
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


 
 
 
 
 
 
 
 
 
 
F
o
r
 
a
 
t
r
e
e
 
e
d
g
e
 
u
 
t
o
 
v
,
 
<
I
n
l
i
n
e
C
o
d
e
>
l
o
w
[
v
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
t
h
e
 
s
m
a
l
l
e
s
t
 
d
i
s
c
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
v
'
s
 
s
u
b
t
r
e
e
 
v
i
a
 
a
t
 
m
o
s
t
 
o
n
e
 
b
a
c
k
 
e
d
g
e
.
 
I
f
 
<
I
n
l
i
n
e
C
o
d
e
>
l
o
w
[
v
]
 
&
g
t
;
 
d
i
s
c
[
u
]
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
t
h
e
n
 
v
'
s
 
s
u
b
t
r
e
e
 
h
a
s
 
N
O
 
b
a
c
k
 
e
d
g
e
 
t
h
a
t
 
s
k
i
p
s
 
o
v
e
r
 
u
,
 
m
e
a
n
i
n
g
 
t
h
e
 
o
n
l
y
 
p
a
t
h
 
f
r
o
m
 
v
'
s
 
s
u
b
t
r
e
e
 
t
o
 
a
n
y
w
h
e
r
e
 
a
b
o
v
e
 
u
 
i
s
 
T
H
R
O
U
G
H
 
t
h
e
 
e
d
g
e
 
(
u
,
 
v
)
 
i
t
s
e
l
f
.
 
R
e
m
o
v
i
n
g
 
i
t
 
d
i
s
c
o
n
n
e
c
t
s
 
t
h
e
 
s
u
b
t
r
e
e
.
 
H
e
n
c
e
:
 
b
r
i
d
g
e
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
 
p
a
d
d
e
d
=
{
f
a
l
s
e
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
t
-
5
 
p
b
-
2
"
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
S
C
C
 
a
l
g
o
r
i
t
h
m
 
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
/
d
i
v
>


 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
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
t
h
e
a
d
 
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
A
l
g
o
r
i
t
h
m
"
,
 
"
D
F
S
 
p
a
s
s
e
s
"
,
 
"
Y
e
a
r
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
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
x
-
4
 
p
y
-
2
 
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
 
b
o
r
d
e
r
-
b
 
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
"
>
{
h
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
K
o
s
a
r
a
j
u
"
,
 
"
2
 
(
G
 
a
n
d
 
i
t
s
 
t
r
a
n
s
p
o
s
e
)
"
,
 
"
1
9
7
8
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
T
a
r
j
a
n
"
,
 
"
1
 
(
l
o
w
-
l
i
n
k
)
"
,
 
"
1
9
7
2
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
P
a
t
h
-
b
a
s
e
d
 
(
G
a
b
o
w
)
"
,
 
"
1
 
(
t
w
o
 
s
t
a
c
k
s
)
"
,
 
"
2
0
0
0
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
]
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
t
r
 
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
s
t
o
n
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
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
1
0
0
"
>
{
r
[
0
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
"
>
{
r
[
1
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
"
>
{
r
[
2
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
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
p
x
-
5
 
p
y
-
3
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
A
l
l
 
t
h
r
e
e
 
a
r
e
 
O
(
V
 
+
 
E
)
.
 
P
r
o
d
u
c
t
i
o
n
 
c
o
d
e
 
(
N
e
t
w
o
r
k
X
 
<
I
n
l
i
n
e
C
o
d
e
>
n
x
.
s
t
r
o
n
g
l
y
_
c
o
n
n
e
c
t
e
d
_
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
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
B
o
o
s
t
G
r
a
p
h
)
 
t
y
p
i
c
a
l
l
y
 
u
s
e
s
 
T
a
r
j
a
n
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
W
h
e
r
e
 
t
h
i
s
 
l
a
n
d
s
 
i
n
 
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
 
a
n
d
 
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
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
<
s
t
r
o
n
g
 
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
1
0
0
"
>
S
C
C
 
c
o
n
d
e
n
s
a
t
i
o
n
<
/
s
t
r
o
n
g
>
:
 
c
o
l
l
a
p
s
e
 
e
a
c
h
 
S
C
C
 
i
n
t
o
 
a
 
s
i
n
g
l
e
 
n
o
d
e
 
t
o
 
g
e
t
 
a
 
D
A
G
.
 
U
s
e
d
 
i
n
 
2
-
S
A
T
,
 
d
a
t
a
f
l
o
w
 
a
n
a
l
y
s
i
s
,
 
d
e
a
d
l
o
c
k
 
d
e
t
e
c
t
i
o
n
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
<
s
t
r
o
n
g
 
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
1
0
0
"
>
C
r
i
t
i
c
a
l
 
C
o
n
n
e
c
t
i
o
n
s
 
i
n
 
a
 
N
e
t
w
o
r
k
<
/
s
t
r
o
n
g
>
 
(
L
e
e
t
C
o
d
e
 
1
1
9
2
)
:
 
l
i
t
e
r
a
l
l
y
 
f
i
n
d
 
a
l
l
 
b
r
i
d
g
e
s
,
 
T
a
r
j
a
n
'
s
 
l
o
w
-
l
i
n
k
 
i
s
 
t
h
e
 
i
n
t
e
n
d
e
d
 
s
o
l
u
t
i
o
n
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
<
s
t
r
o
n
g
 
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
1
0
0
"
>
N
e
t
w
o
r
k
 
r
e
l
i
a
b
i
l
i
t
y
<
/
s
t
r
o
n
g
>
:
 
I
S
P
 
b
a
c
k
b
o
n
e
 
a
n
a
l
y
s
i
s
.
 
B
r
i
d
g
e
s
 
a
r
e
 
s
i
n
g
l
e
 
p
o
i
n
t
s
 
o
f
 
f
a
i
l
u
r
e
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
<
s
t
r
o
n
g
 
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
1
0
0
"
>
C
o
m
p
i
l
e
r
 
d
a
t
a
f
l
o
w
<
/
s
t
r
o
n
g
>
:
 
S
C
C
s
 
o
f
 
a
 
c
a
l
l
 
g
r
a
p
h
 
i
d
e
n
t
i
f
y
 
m
u
t
u
a
l
 
r
e
c
u
r
s
i
o
n
 
s
e
t
s
 
t
h
a
t
 
m
u
s
t
 
b
e
 
a
n
a
l
y
z
e
d
 
t
o
g
e
t
h
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
<
s
t
r
o
n
g
 
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
1
0
0
"
>
S
o
c
i
a
l
 
n
e
t
w
o
r
k
s
<
/
s
t
r
o
n
g
>
:
 
a
n
 
S
C
C
 
o
f
 
t
h
e
 
f
o
l
l
o
w
s
 
g
r
a
p
h
 
i
s
 
a
 
f
r
i
e
n
d
-
c
l
i
q
u
e
 
w
h
e
r
e
 
e
v
e
r
y
o
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
v
e
l
y
 
f
o
l
l
o
w
s
 
e
v
e
r
y
o
n
e
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
7
_
T
a
r
j
a
n
L
o
w
L
i
n
k
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
T
r
y
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


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
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
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
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
W
h
a
t
 
d
o
e
s
 
l
o
w
[
u
]
 
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
 
T
a
r
j
a
n
'
s
 
a
l
g
o
r
i
t
h
m
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
h
e
 
l
o
w
e
s
t
 
n
e
i
g
h
b
o
r
 
i
n
d
e
x
 
o
f
 
u
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
m
a
l
l
e
s
t
 
d
i
s
c
o
v
e
r
y
 
t
i
m
e
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
u
'
s
 
D
F
S
 
s
u
b
t
r
e
e
 
u
s
i
n
g
 
a
t
 
m
o
s
t
 
o
n
e
 
b
a
c
k
 
e
d
g
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
n
u
m
b
e
r
 
o
f
 
c
h
i
l
d
r
e
n
 
o
f
 
u
 
i
n
 
t
h
e
 
D
F
S
 
t
r
e
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
d
e
p
t
h
 
o
f
 
u
 
f
r
o
m
 
t
h
e
 
r
o
o
t
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
l
o
w
[
u
]
 
i
s
 
t
h
e
 
c
y
c
l
e
-
d
e
t
e
c
t
i
o
n
 
s
i
g
n
a
l
:
 
i
f
 
l
o
w
[
u
]
 
e
q
u
a
l
s
 
d
i
s
c
[
u
]
,
 
u
'
s
 
s
u
b
t
r
e
e
 
h
a
s
 
n
o
 
p
a
t
h
 
t
o
 
a
n
 
a
n
c
e
s
t
o
r
,
 
s
o
 
u
 
i
s
 
t
h
e
 
r
o
o
t
 
o
f
 
a
n
 
S
C
C
 
(
i
n
 
d
i
r
e
c
t
e
d
)
 
o
r
 
a
 
f
r
a
g
i
l
e
 
j
o
i
n
t
 
(
i
n
 
u
n
d
i
r
e
c
t
e
d
)
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
A
n
 
e
d
g
e
 
(
u
,
 
v
)
 
i
n
 
a
n
 
u
n
d
i
r
e
c
t
e
d
 
D
F
S
 
i
s
 
a
 
B
R
I
D
G
E
 
i
f
f
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
l
o
w
[
v
]
 
=
 
d
i
s
c
[
v
]
"
,
 
"
l
o
w
[
v
]
 
>
 
d
i
s
c
[
u
]
"
,
 
"
l
o
w
[
v
]
 
=
 
d
i
s
c
[
u
]
"
,
 
"
v
 
i
s
 
t
h
e
 
p
a
r
e
n
t
 
o
f
 
u
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
I
f
 
l
o
w
[
v
]
 
>
 
d
i
s
c
[
u
]
,
 
v
'
s
 
s
u
b
t
r
e
e
 
h
a
s
 
n
o
 
b
a
c
k
 
e
d
g
e
 
s
k
i
p
p
i
n
g
 
o
v
e
r
 
u
,
 
s
o
 
t
h
e
 
o
n
l
y
 
e
s
c
a
p
e
 
i
s
 
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
 
(
u
,
v
)
 
e
d
g
e
,
 
r
e
m
o
v
i
n
g
 
i
t
 
d
i
s
c
o
n
n
e
c
t
s
 
t
h
e
 
s
u
b
t
r
e
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
H
o
w
 
m
a
n
y
 
D
F
S
 
p
a
s
s
e
s
 
d
o
e
s
 
K
o
s
a
r
a
j
u
'
s
 
S
C
C
 
a
l
g
o
r
i
t
h
m
 
n
e
e
d
 
v
s
 
T
a
r
j
a
n
'
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
1
 
v
s
 
1
"
,
 
"
2
 
v
s
 
1
"
,
 
"
1
 
v
s
 
2
"
,
 
"
B
o
t
h
 
n
e
e
d
 
3
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
K
o
s
a
r
a
j
u
 
r
u
n
s
 
D
F
S
 
o
n
 
G
 
t
o
 
g
e
t
 
a
 
f
i
n
i
s
h
-
t
i
m
e
 
o
r
d
e
r
,
 
t
h
e
n
 
D
F
S
 
o
n
 
t
h
e
 
t
r
a
n
s
p
o
s
e
 
i
n
 
r
e
v
e
r
s
e
-
f
i
n
i
s
h
 
o
r
d
e
r
.
 
T
a
r
j
a
n
 
d
o
e
s
 
a
 
s
i
n
g
l
e
 
D
F
S
 
u
s
i
n
g
 
d
i
s
c
/
l
o
w
,
 
s
a
m
e
 
O
(
V
+
E
)
,
 
o
n
e
 
p
a
s
s
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
A
 
r
o
o
t
 
v
e
r
t
e
x
 
o
f
 
a
 
D
F
S
 
t
r
e
e
 
i
s
 
a
n
 
a
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
 
i
f
f
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
I
t
 
h
a
s
 
a
t
 
l
e
a
s
t
 
o
n
e
 
c
h
i
l
d
"
,


 
 
 
 
 
 
 
 
"
I
t
 
h
a
s
 
a
t
 
l
e
a
s
t
 
t
w
o
 
c
h
i
l
d
r
e
n
 
i
n
 
t
h
e
 
D
F
S
 
t
r
e
e
"
,


 
 
 
 
 
 
 
 
"
l
o
w
[
r
o
o
t
]
 
>
 
0
"
,


 
 
 
 
 
 
 
 
"
I
t
 
h
a
s
 
b
a
c
k
 
e
d
g
e
s
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
f
 
t
h
e
 
D
F
S
 
r
o
o
t
 
h
a
s
 
j
u
s
t
 
o
n
e
 
c
h
i
l
d
 
s
u
b
t
r
e
e
,
 
r
e
m
o
v
i
n
g
 
i
t
 
l
e
a
v
e
s
 
t
h
a
t
 
s
u
b
t
r
e
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
 
(
j
u
s
t
 
r
o
o
t
e
d
 
a
t
 
i
t
s
 
c
h
i
l
d
)
.
 
W
i
t
h
 
2
 
o
r
 
m
o
r
e
 
c
h
i
l
d
 
s
u
b
t
r
e
e
s
,
 
r
e
m
o
v
i
n
g
 
t
h
e
 
r
o
o
t
 
s
p
l
i
t
s
 
t
h
e
m
,
 
a
r
t
i
c
u
l
a
t
i
o
n
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
A
f
t
e
r
 
S
C
C
 
c
o
n
d
e
n
s
a
t
i
o
n
 
(
c
o
l
l
a
p
s
e
 
e
a
c
h
 
S
C
C
 
t
o
 
o
n
e
 
n
o
d
e
)
,
 
t
h
e
 
r
e
s
u
l
t
i
n
g
 
g
r
a
p
h
 
i
s
 
a
l
w
a
y
s
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
A
 
t
r
e
e
"
,
 
"
A
 
D
A
G
"
,
 
"
D
i
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
"
,
 
"
S
t
r
o
n
g
l
y
 
c
o
n
n
e
c
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
B
y
 
d
e
f
i
n
i
t
i
o
n
 
o
f
 
S
C
C
,
 
n
o
 
t
w
o
 
S
C
C
s
 
a
r
e
 
m
u
t
u
a
l
l
y
 
r
e
a
c
h
a
b
l
e
.
 
S
o
 
t
h
e
 
c
o
n
d
e
n
s
a
t
i
o
n
 
h
a
s
 
n
o
 
d
i
r
e
c
t
e
d
 
c
y
c
l
e
,
 
i
t
 
i
s
 
a
 
D
A
G
.
 
T
h
i
s
 
i
s
 
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
a
l
 
f
o
r
 
2
-
S
A
T
,
 
d
a
t
a
f
l
o
w
 
a
n
a
l
y
s
i
s
,
 
a
n
d
 
t
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
 
r
e
a
s
o
n
i
n
g
 
o
v
e
r
 
c
y
c
l
i
c
 
g
r
a
p
h
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
T
a
r
j
a
n
'
s
 
L
o
w
-
L
i
n
k
 
(
S
C
C
,
 
B
r
i
d
g
e
s
)
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
9
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
H
i
g
h
,
 
L
C
1
1
9
2
 
(
C
r
i
t
i
c
a
l
 
C
o
n
n
e
c
t
i
o
n
s
)
,
 
2
-
S
A
T
,
 
n
e
t
w
o
r
k
-
r
e
l
i
a
b
i
l
i
t
y
 
q
u
e
s
t
i
o
n
s
.
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
M
a
x
i
m
u
m
 
F
l
o
w
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


