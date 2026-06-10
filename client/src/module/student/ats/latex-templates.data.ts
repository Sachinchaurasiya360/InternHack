
e
x
p
o
r
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
 
L
a
t
e
x
T
e
m
p
l
a
t
e
 
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


 
 
c
a
t
e
g
o
r
y
:
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
 
|
 
"
a
c
a
d
e
m
i
c
"
 
|
 
"
m
i
n
i
m
a
l
"
 
|
 
"
c
r
e
a
t
i
v
e
"
 
|
 
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
 
|
 
"
e
x
e
c
u
t
i
v
e
"
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


 
 
p
r
e
v
i
e
w
L
i
n
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


 
 
s
o
u
r
c
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
u
p
p
o
r
t
i
n
g
F
i
l
e
s
:
 
{
 
f
i
l
e
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
n
t
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
 
}
[
]
;


}




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
 
L
A
T
E
X
_
T
E
M
P
L
A
T
E
S
:
 
L
a
t
e
x
T
e
m
p
l
a
t
e
[
]
 
=
 
[


 
 
/
/
 
─
─
 
1
.
 
P
r
o
f
e
s
s
i
o
n
a
l
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
p
r
o
f
e
s
s
i
o
n
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
P
r
o
f
e
s
s
i
o
n
a
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
C
l
e
a
n
 
s
i
n
g
l
e
-
c
o
l
u
m
n
 
l
a
y
o
u
t
 
w
i
t
h
 
r
u
l
e
d
 
s
e
c
t
i
o
n
 
h
e
a
d
e
r
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
,


 
 
 
 
t
a
g
s
:
 
[
"
A
T
S
-
f
r
i
e
n
d
l
y
"
,
 
"
s
i
n
g
l
e
-
c
o
l
u
m
n
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
J
O
H
N
 
D
O
E
"
,


 
 
 
 
 
 
"
j
o
h
n
.
d
o
e
@
e
m
a
i
l
.
c
o
m
 
|
 
+
1
 
(
5
5
5
)
 
1
2
3
-
4
5
6
7
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
S
u
m
m
a
r
y
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
d
 
s
o
f
t
w
a
r
e
 
e
n
g
i
n
e
e
r
 
w
i
t
h
 
5
+
 
y
e
a
r
s
.
.
.
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
S
e
n
i
o
r
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
 
-
 
T
e
c
h
C
o
r
p
 
I
n
c
.
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
7
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
}
{
}
{
0
e
m
}
{
}
[
\
\
t
i
t
l
e
r
u
l
e
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
8
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
 
\
\
t
e
x
t
b
f
{
J
o
h
n
 
D
o
e
}
}
 
\
\
\
\
[
4
p
t
]


 
 
j
o
h
n
.
d
o
e
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
5
5
5
)
 
1
2
3
-
4
5
6
7
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
 
\
\
\
\


 
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
j
o
h
n
d
o
e
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
j
o
h
n
d
o
e
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
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
j
o
h
n
d
o
e
}
{
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
j
o
h
n
d
o
e
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
S
u
m
m
a
r
y
}


E
x
p
e
r
i
e
n
c
e
d
 
s
o
f
t
w
a
r
e
 
e
n
g
i
n
e
e
r
 
w
i
t
h
 
5
+
 
y
e
a
r
s
 
b
u
i
l
d
i
n
g
 
s
c
a
l
a
b
l
e
 
w
e
b
 
a
p
p
l
i
c
a
t
i
o
n
s
.
 
P
r
o
f
i
c
i
e
n
t
 
i
n
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
a
n
d
 
c
l
o
u
d
 
i
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
.
 
P
a
s
s
i
o
n
a
t
e
 
a
b
o
u
t
 
c
l
e
a
n
 
c
o
d
e
 
a
n
d
 
u
s
e
r
-
c
e
n
t
r
i
c
 
d
e
s
i
g
n
.




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
T
e
c
h
C
o
r
p
 
I
n
c
.
,
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
a
n
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
]


 
 
\
\
i
t
e
m
 
L
e
d
 
d
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
 
o
f
 
a
 
r
e
a
l
-
t
i
m
e
 
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
 
s
e
r
v
i
n
g
 
5
0
K
+
 
d
a
i
l
y
 
u
s
e
r
s


 
 
\
\
i
t
e
m
 
R
e
d
u
c
e
d
 
A
P
I
 
r
e
s
p
o
n
s
e
 
t
i
m
e
s
 
b
y
 
4
0
\
\
%
 
t
h
r
o
u
g
h
 
q
u
e
r
y
 
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
 
a
n
d
 
c
a
c
h
i
n
g


 
 
\
\
i
t
e
m
 
M
e
n
t
o
r
e
d
 
3
 
j
u
n
i
o
r
 
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
 
a
n
d
 
c
o
n
d
u
c
t
e
d
 
c
o
d
e
 
r
e
v
i
e
w
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
S
t
a
r
t
u
p
X
Y
Z
,
 
R
e
m
o
t
e
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
1
9
 
-
-
 
D
e
c
 
2
0
2
1
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
]


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
R
e
a
c
t
 
c
o
m
p
o
n
e
n
t
 
l
i
b
r
a
r
y
 
u
s
e
d
 
a
c
r
o
s
s
 
4
 
p
r
o
d
u
c
t
 
t
e
a
m
s


 
 
\
\
i
t
e
m
 
I
m
p
l
e
m
e
n
t
e
d
 
C
I
/
C
D
 
p
i
p
e
l
i
n
e
 
r
e
d
u
c
i
n
g
 
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
 
t
i
m
e
 
f
r
o
m
 
2
 
h
o
u
r
s
 
t
o
 
1
5
 
m
i
n
u
t
e
s


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
R
E
S
T
f
u
l
 
A
P
I
s
 
h
a
n
d
l
i
n
g
 
1
0
M
+
 
r
e
q
u
e
s
t
s
 
p
e
r
 
d
a
y


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
C
a
l
i
f
o
r
n
i
a
,
 
B
e
r
k
e
l
e
y
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
5
 
-
-
 
2
0
1
9
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
8
/
4
.
0




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}




\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
J
a
v
a
S
c
r
i
p
t
,
 
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
,
 
P
y
t
h
o
n
,
 
S
Q
L
 
\
\
\
\


\
\
t
e
x
t
b
f
{
F
r
a
m
e
w
o
r
k
s
:
}
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
E
x
p
r
e
s
s
,
 
N
e
x
t
.
j
s
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
o
o
l
s
:
}
 
G
i
t
,
 
D
o
c
k
e
r
,
 
A
W
S
,
 
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
,
 
R
e
d
i
s




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}




\
\
t
e
x
t
b
f
{
O
p
e
n
 
S
o
u
r
c
e
 
C
L
I
 
T
o
o
l
}
 
-
-
 
A
 
c
o
m
m
a
n
d
-
l
i
n
e
 
t
o
o
l
 
f
o
r
 
a
u
t
o
m
a
t
i
n
g
 
c
o
d
e
 
r
e
v
i
e
w
s
.
 
5
0
0
+
 
G
i
t
H
u
b
 
s
t
a
r
s
.
 
B
u
i
l
t
 
w
i
t
h
 
N
o
d
e
.
j
s
 
a
n
d
 
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
.




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
2
.
 
A
c
a
d
e
m
i
c
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
a
c
a
d
e
m
i
c
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
a
d
e
m
i
c
 
C
V
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
M
u
l
t
i
-
p
a
g
e
 
C
V
 
w
i
t
h
 
p
u
b
l
i
c
a
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
s
e
a
r
c
h
 
s
e
c
t
i
o
n
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
a
c
a
d
e
m
i
c
"
,


 
 
 
 
t
a
g
s
:
 
[
"
a
c
a
d
e
m
i
c
"
,
 
"
m
u
l
t
i
-
p
a
g
e
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
D
R
.
 
S
A
R
A
H
 
C
H
E
N
"
,


 
 
 
 
 
 
"
A
s
s
i
s
t
a
n
t
 
P
r
o
f
e
s
s
o
r
 
o
f
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
"
,


 
 
 
 
 
 
"
M
I
T
,
 
C
a
m
b
r
i
d
g
e
,
 
M
A
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
R
e
s
e
a
r
c
h
 
I
n
t
e
r
e
s
t
s
"
,


 
 
 
 
 
 
"
M
a
c
h
i
n
e
 
L
e
a
r
n
i
n
g
,
 
N
L
P
,
 
C
o
m
p
u
t
e
r
 
V
i
s
i
o
n
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
P
u
b
l
i
c
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
1
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
L
a
r
g
e
\
\
b
f
s
e
r
i
e
s
\
\
s
c
s
h
a
p
e
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
2
p
t
}
\
\
t
i
t
l
e
r
u
l
e
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
2
p
t
}
{
6
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
p
l
a
i
n
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
 
\
\
t
e
x
t
b
f
{
D
r
.
 
S
a
r
a
h
 
C
h
e
n
}
}
 
\
\
\
\
[
6
p
t
]


 
 
{
\
\
l
a
r
g
e
 
A
s
s
i
s
t
a
n
t
 
P
r
o
f
e
s
s
o
r
 
o
f
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
\
\
[
4
p
t
]


 
 
M
a
s
s
a
c
h
u
s
e
t
t
s
 
I
n
s
t
i
t
u
t
e
 
o
f
 
T
e
c
h
n
o
l
o
g
y
 
\
\
\
\
[
2
p
t
]


 
 
s
c
h
e
n
@
m
i
t
.
e
d
u
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
6
1
7
)
 
5
5
5
-
0
1
9
2
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
C
a
m
b
r
i
d
g
e
,
 
M
A
 
\
\
\
\


 
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
s
a
r
a
h
c
h
e
n
.
c
s
.
m
i
t
.
e
d
u
}
{
s
a
r
a
h
c
h
e
n
.
c
s
.
m
i
t
.
e
d
u
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
R
e
s
e
a
r
c
h
 
I
n
t
e
r
e
s
t
s
}


M
a
c
h
i
n
e
 
l
e
a
r
n
i
n
g
,
 
n
a
t
u
r
a
l
 
l
a
n
g
u
a
g
e
 
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
,
 
c
o
m
p
u
t
e
r
 
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
h
e
i
r
 
a
p
p
l
i
c
a
t
i
o
n
s
 
i
n
 
h
e
a
l
t
h
c
a
r
e
 
a
n
d
 
s
c
i
e
n
t
i
f
i
c
 
d
i
s
c
o
v
e
r
y
.




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
P
h
.
D
.
 
i
n
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
S
t
a
n
f
o
r
d
 
U
n
i
v
e
r
s
i
t
y
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
5
 
-
-
 
2
0
2
0
}
 
\
\
h
f
i
l
l
 
A
d
v
i
s
o
r
:
 
P
r
o
f
.
 
A
n
d
r
e
w
 
N
g
 
\
\
\
\


D
i
s
s
e
r
t
a
t
i
o
n
:
 
\
\
t
e
x
t
i
t
{
S
c
a
l
a
b
l
e
 
M
e
t
h
o
d
s
 
f
o
r
 
M
u
l
t
i
-
M
o
d
a
l
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
 
L
e
a
r
n
i
n
g
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
B
.
S
.
 
i
n
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
 
a
n
d
 
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
s
}
 
\
\
h
f
i
l
l
 
C
a
l
t
e
c
h
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
1
 
-
-
 
2
0
1
5
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
9
5
/
4
.
0
,
 
S
u
m
m
a
 
C
u
m
 
L
a
u
d
e




\
\
s
e
c
t
i
o
n
*
{
A
c
a
d
e
m
i
c
 
A
p
p
o
i
n
t
m
e
n
t
s
}




\
\
t
e
x
t
b
f
{
A
s
s
i
s
t
a
n
t
 
P
r
o
f
e
s
s
o
r
}
 
\
\
h
f
i
l
l
 
M
I
T
,
 
C
S
A
I
L
 
\
\
\
\


\
\
t
e
x
t
i
t
{
S
e
p
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
P
o
s
t
d
o
c
t
o
r
a
l
 
R
e
s
e
a
r
c
h
e
r
}
 
\
\
h
f
i
l
l
 
G
o
o
g
l
e
 
D
e
e
p
M
i
n
d
 
\
\
\
\


\
\
t
e
x
t
i
t
{
S
e
p
 
2
0
2
0
 
-
-
 
A
u
g
 
2
0
2
2
}




\
\
s
e
c
t
i
o
n
*
{
S
e
l
e
c
t
e
d
 
P
u
b
l
i
c
a
t
i
o
n
s
}




\
\
b
e
g
i
n
{
e
n
u
m
e
r
a
t
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
l
a
b
e
l
=
{
[
\
\
a
r
a
b
i
c
*
]
}
]


 
 
\
\
i
t
e
m
 
\
\
t
e
x
t
b
f
{
C
h
e
n
,
 
S
.
}
,
 
K
u
m
a
r
,
 
A
.
,
 
\
\
&
 
N
g
,
 
A
.
 
(
2
0
2
3
)
.
 
"
M
u
l
t
i
-
M
o
d
a
l
 
F
u
s
i
o
n
 
f
o
r
 
C
l
i
n
i
c
a
l
 
N
L
P
.
"
 
\
\
t
e
x
t
i
t
{
N
a
t
u
r
e
 
M
a
c
h
i
n
e
 
I
n
t
e
l
l
i
g
e
n
c
e
}
,
 
5
(
3
)
,
 
2
4
5
-
-
2
5
8
.


 
 
\
\
i
t
e
m
 
\
\
t
e
x
t
b
f
{
C
h
e
n
,
 
S
.
}
 
\
\
&
 
L
i
,
 
W
.
 
(
2
0
2
2
)
.
 
"
S
e
l
f
-
S
u
p
e
r
v
i
s
e
d
 
V
i
s
u
a
l
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
s
 
a
t
 
S
c
a
l
e
.
"
 
\
\
t
e
x
t
i
t
{
P
r
o
c
e
e
d
i
n
g
s
 
o
f
 
N
e
u
r
I
P
S
 
2
0
2
2
}
.


 
 
\
\
i
t
e
m
 
Z
h
a
n
g
,
 
R
.
,
 
\
\
t
e
x
t
b
f
{
C
h
e
n
,
 
S
.
}
,
 
\
\
&
 
P
a
t
e
l
,
 
D
.
 
(
2
0
2
1
)
.
 
"
E
f
f
i
c
i
e
n
t
 
T
r
a
n
s
f
o
r
m
e
r
 
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
s
 
f
o
r
 
L
o
n
g
 
D
o
c
u
m
e
n
t
s
.
"
 
\
\
t
e
x
t
i
t
{
P
r
o
c
e
e
d
i
n
g
s
 
o
f
 
I
C
M
L
 
2
0
2
1
}
.


\
\
e
n
d
{
e
n
u
m
e
r
a
t
e
}




\
\
s
e
c
t
i
o
n
*
{
T
e
a
c
h
i
n
g
}




\
\
t
e
x
t
b
f
{
6
.
8
6
7
 
M
a
c
h
i
n
e
 
L
e
a
r
n
i
n
g
}
 
\
\
h
f
i
l
l
 
M
I
T
,
 
F
a
l
l
 
2
0
2
3
,
 
F
a
l
l
 
2
0
2
4
 
\
\
\
\


\
\
t
e
x
t
b
f
{
6
.
8
6
4
 
A
d
v
a
n
c
e
d
 
N
L
P
}
 
\
\
h
f
i
l
l
 
M
I
T
,
 
S
p
r
i
n
g
 
2
0
2
4




\
\
s
e
c
t
i
o
n
*
{
A
w
a
r
d
s
 
\
\
&
 
H
o
n
o
r
s
}




\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
]


 
 
\
\
i
t
e
m
 
N
S
F
 
C
A
R
E
E
R
 
A
w
a
r
d
,
 
2
0
2
4


 
 
\
\
i
t
e
m
 
B
e
s
t
 
P
a
p
e
r
 
A
w
a
r
d
,
 
N
e
u
r
I
P
S
 
2
0
2
2


 
 
\
\
i
t
e
m
 
S
t
a
n
f
o
r
d
 
C
S
 
D
i
s
t
i
n
g
u
i
s
h
e
d
 
D
i
s
s
e
r
t
a
t
i
o
n
 
A
w
a
r
d
,
 
2
0
2
0


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
S
e
r
v
i
c
e
}




A
r
e
a
 
C
h
a
i
r
:
 
N
e
u
r
I
P
S
 
2
0
2
3
,
 
I
C
M
L
 
2
0
2
4
 
\
\
\
\


R
e
v
i
e
w
e
r
:
 
J
M
L
R
,
 
T
P
A
M
I
,
 
A
C
L
,
 
E
M
N
L
P




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
3
.
 
M
i
n
i
m
a
l
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
m
i
n
i
m
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
M
i
n
i
m
a
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
U
l
t
r
a
-
c
l
e
a
n
 
d
e
s
i
g
n
 
w
i
t
h
 
g
e
n
e
r
o
u
s
 
w
h
i
t
e
s
p
a
c
e
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
m
i
n
i
m
a
l
"
,


 
 
 
 
t
a
g
s
:
 
[
"
c
l
e
a
n
"
,
 
"
s
i
n
g
l
e
-
p
a
g
e
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
J
a
n
e
 
S
m
i
t
h
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
j
a
n
e
@
s
m
i
t
h
.
i
o
 
 
|
 
 
N
e
w
 
Y
o
r
k
,
 
N
Y
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
P
r
o
d
u
c
t
 
D
e
s
i
g
n
e
r
 
a
t
 
F
i
g
m
a
,
 
2
0
2
1
-
P
r
e
s
e
n
t
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
l
e
t
t
e
r
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
1
.
2
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
6
6
6
6
6
6
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
n
e
w
c
o
m
m
a
n
d
{
\
\
r
s
e
c
t
i
o
n
}
[
1
]
{
%


 
 
\
\
v
s
p
a
c
e
{
1
6
p
t
}


 
 
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
0
.
4
p
t
}


 
 
\
\
v
s
p
a
c
e
{
6
p
t
}


 
 
{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
\
\
u
p
p
e
r
c
a
s
e
{
#
1
}
}
}


 
 
\
\
v
s
p
a
c
e
{
8
p
t
}


}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




{
\
\
L
a
r
g
e
\
\
t
e
x
t
b
f
{
J
a
n
e
 
S
m
i
t
h
}
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
s
m
a
l
l
 
j
a
n
e
@
s
m
i
t
h
.
i
o
 
\
\
q
u
a
d
 
N
e
w
 
Y
o
r
k
,
 
N
Y
 
\
\
q
u
a
d
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
j
a
n
e
s
m
i
t
h
.
d
e
s
i
g
n
}
{
j
a
n
e
s
m
i
t
h
.
d
e
s
i
g
n
}
}




\
\
r
s
e
c
t
i
o
n
{
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
P
r
o
d
u
c
t
 
D
e
s
i
g
n
e
r
}
 
\
\
h
f
i
l
l
 
F
i
g
m
a
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
M
a
r
 
2
0
2
1
 
-
-
 
P
r
e
s
e
n
t
}
}


\
\
v
s
p
a
c
e
{
4
p
t
}




L
e
a
d
 
d
e
s
i
g
n
e
r
 
f
o
r
 
F
i
g
J
a
m
 
c
o
l
l
a
b
o
r
a
t
i
o
n
 
f
e
a
t
u
r
e
s
.
 
S
h
i
p
p
e
d
 
r
e
a
l
-
t
i
m
e
 
c
u
r
s
o
r
s
,
 
s
t
a
m
p
s
,
 
a
n
d
 
s
t
i
c
k
y
 
n
o
t
e
s
 
u
s
e
d
 
b
y
 
2
M
+
 
u
s
e
r
s
 
m
o
n
t
h
l
y
.




\
\
v
s
p
a
c
e
{
1
0
p
t
}


\
\
t
e
x
t
b
f
{
P
r
o
d
u
c
t
 
D
e
s
i
g
n
e
r
}
 
\
\
h
f
i
l
l
 
S
t
r
i
p
e
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
1
8
 
-
-
 
F
e
b
 
2
0
2
1
}
}


\
\
v
s
p
a
c
e
{
4
p
t
}




D
e
s
i
g
n
e
d
 
t
h
e
 
S
t
r
i
p
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
 
c
h
e
c
k
o
u
t
 
f
l
o
w
.
 
R
e
d
u
c
e
d
 
m
e
r
c
h
a
n
t
 
o
n
b
o
a
r
d
i
n
g
 
d
r
o
p
-
o
f
f
 
b
y
 
2
8
\
\
%
.




\
\
r
s
e
c
t
i
o
n
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
B
.
F
.
A
.
 
G
r
a
p
h
i
c
 
D
e
s
i
g
n
}
 
\
\
h
f
i
l
l
 
R
h
o
d
e
 
I
s
l
a
n
d
 
S
c
h
o
o
l
 
o
f
 
D
e
s
i
g
n
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
2
0
1
4
 
-
-
 
2
0
1
8
}
}




\
\
r
s
e
c
t
i
o
n
{
S
k
i
l
l
s
}




F
i
g
m
a
,
 
S
k
e
t
c
h
,
 
A
d
o
b
e
 
C
r
e
a
t
i
v
e
 
S
u
i
t
e
,
 
H
T
M
L
/
C
S
S
,
 
P
r
o
t
o
t
y
p
i
n
g
,
 
U
s
e
r
 
R
e
s
e
a
r
c
h
,
 
D
e
s
i
g
n
 
S
y
s
t
e
m
s




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
4
.
 
T
w
o
-
C
o
l
u
m
n
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
t
w
o
-
c
o
l
u
m
n
"
,


 
 
 
 
n
a
m
e
:
 
"
T
w
o
-
C
o
l
u
m
n
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
i
d
e
b
a
r
 
f
o
r
 
c
o
n
t
a
c
t
 
a
n
d
 
s
k
i
l
l
s
,
 
m
a
i
n
 
b
o
d
y
 
f
o
r
 
e
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
c
r
e
a
t
i
v
e
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
o
d
e
r
n
"
,
 
"
t
w
o
-
c
o
l
u
m
n
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
A
L
E
X
 
R
I
V
E
R
A
 
 
 
 
 
 
 
 
 
 
|
 
 
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
|
"
,


 
 
 
 
 
 
"
C
o
n
t
a
c
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
|
 
 
F
u
l
l
 
S
t
a
c
k
 
D
e
v
e
l
o
p
e
r
"
,


 
 
 
 
 
 
"
a
l
e
x
@
r
i
v
e
r
a
.
d
e
v
 
 
 
 
 
 
|
 
 
S
p
o
t
i
f
y
,
 
2
0
2
2
-
P
r
e
s
e
n
t
"
,


 
 
 
 
 
 
"
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
|
"
,


 
 
 
 
 
 
"
S
k
i
l
l
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
|
 
 
E
d
u
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
a
c
t
,
 
P
y
t
h
o
n
,
 
A
W
S
 
 
 
|
 
 
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
l
e
f
t
=
0
.
5
i
n
,
r
i
g
h
t
=
0
.
6
i
n
,
t
o
p
=
0
.
6
i
n
,
b
o
t
t
o
m
=
0
.
6
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}


\
\
u
s
e
p
a
c
k
a
g
e
{
m
u
l
t
i
c
o
l
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
i
d
e
b
a
r
}
{
H
T
M
L
}
{
2
D
3
7
4
8
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
4
F
4
6
E
5
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
c
o
l
o
r
{
s
i
d
e
b
a
r
}
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
1
p
t
}
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
1
.
5
p
t
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
0
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
s
e
t
l
e
n
g
t
h
{
\
\
c
o
l
u
m
n
s
e
p
}
{
2
4
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
\
\
c
o
l
o
r
{
s
i
d
e
b
a
r
}
A
l
e
x
 
R
i
v
e
r
a
}
}
 
\
\
\
\
[
6
p
t
]


 
 
{
\
\
s
m
a
l
l
 
a
l
e
x
@
r
i
v
e
r
a
.
d
e
v
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
4
1
5
)
 
5
5
5
-
7
8
9
0
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
 
\
\
h
r
e
f
{
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
r
i
v
e
r
a
}
{
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
r
i
v
e
r
a
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
a
r
i
v
e
r
a
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
a
r
i
v
e
r
a
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
v
s
p
a
c
e
{
4
p
t
}




\
\
b
e
g
i
n
{
m
u
l
t
i
c
o
l
s
}
{
2
}




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}




\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
J
a
v
a
S
c
r
i
p
t
,
 
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
,
 
P
y
t
h
o
n
,
 
G
o
 
\
\
\
\


\
\
t
e
x
t
b
f
{
F
r
o
n
t
e
n
d
:
}
 
R
e
a
c
t
,
 
N
e
x
t
.
j
s
,
 
T
a
i
l
w
i
n
d
 
C
S
S
 
\
\
\
\


\
\
t
e
x
t
b
f
{
B
a
c
k
e
n
d
:
}
 
N
o
d
e
.
j
s
,
 
F
a
s
t
A
P
I
,
 
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
 
\
\
\
\


\
\
t
e
x
t
b
f
{
C
l
o
u
d
:
}
 
A
W
S
,
 
D
o
c
k
e
r
,
 
K
u
b
e
r
n
e
t
e
s
,
 
T
e
r
r
a
f
o
r
m
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
o
o
l
s
:
}
 
G
i
t
,
 
C
I
/
C
D
,
 
D
a
t
a
d
o
g
,
 
G
r
a
f
a
n
a




\
\
s
e
c
t
i
o
n
*
{
C
e
r
t
i
f
i
c
a
t
i
o
n
s
}




A
W
S
 
S
o
l
u
t
i
o
n
s
 
A
r
c
h
i
t
e
c
t
 
-
-
 
A
s
s
o
c
i
a
t
e
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
A
m
a
z
o
n
 
W
e
b
 
S
e
r
v
i
c
e
s
,
 
2
0
2
3
}
}




\
\
v
s
p
a
c
e
{
4
p
t
}


G
o
o
g
l
e
 
C
l
o
u
d
 
P
r
o
f
e
s
s
i
o
n
a
l
 
D
a
t
a
 
E
n
g
i
n
e
e
r
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
G
o
o
g
l
e
,
 
2
0
2
2
}
}




\
\
s
e
c
t
i
o
n
*
{
L
a
n
g
u
a
g
e
s
}




E
n
g
l
i
s
h
 
(
N
a
t
i
v
e
)
,
 
S
p
a
n
i
s
h
 
(
F
l
u
e
n
t
)
,
 
P
o
r
t
u
g
u
e
s
e
 
(
C
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
a
l
)




\
\
c
o
l
u
m
n
b
r
e
a
k




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
F
u
l
l
 
S
t
a
c
k
 
D
e
v
e
l
o
p
e
r
}
 
\
\
h
f
i
l
l
 
S
p
o
t
i
f
y
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
A
u
g
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
r
e
c
o
m
m
e
n
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
 
s
e
r
v
i
n
g
 
5
0
M
+
 
l
i
s
t
e
n
e
r
s


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
G
r
a
p
h
Q
L
 
A
P
I
s
 
r
e
d
u
c
i
n
g
 
p
a
y
l
o
a
d
 
s
i
z
e
s
 
b
y
 
6
0
\
\
%


 
 
\
\
i
t
e
m
 
L
e
d
 
m
i
g
r
a
t
i
o
n
 
f
r
o
m
 
m
o
n
o
l
i
t
h
 
t
o
 
m
i
c
r
o
s
e
r
v
i
c
e
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


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
A
i
r
b
n
b
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
2
0
 
-
-
 
J
u
l
 
2
0
2
2
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
 
D
e
v
e
l
o
p
e
d
 
r
e
a
l
-
t
i
m
e
 
p
r
i
c
i
n
g
 
e
n
g
i
n
e
 
f
o
r
 
d
y
n
a
m
i
c
 
l
i
s
t
i
n
g
s


 
 
\
\
i
t
e
m
 
I
m
p
r
o
v
e
d
 
s
e
a
r
c
h
 
r
e
l
e
v
a
n
c
e
 
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
 
b
o
o
k
i
n
g
s
 
b
y
 
1
2
\
\
%


 
 
\
\
i
t
e
m
 
M
e
n
t
o
r
e
d
 
2
 
i
n
t
e
r
n
s
 
t
h
r
o
u
g
h
 
f
u
l
l
 
p
r
o
j
e
c
t
 
l
i
f
e
c
y
c
l
e


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
\
\


S
t
a
n
f
o
r
d
 
U
n
i
v
e
r
s
i
t
y
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
2
0
1
6
 
-
-
 
2
0
2
0
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
9
/
4
.
0
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}




\
\
t
e
x
t
b
f
{
D
e
v
M
e
t
r
i
c
s
}
 
-
-
 
O
p
e
n
-
s
o
u
r
c
e
 
d
e
v
e
l
o
p
e
r
 
p
r
o
d
u
c
t
i
v
i
t
y
 
d
a
s
h
b
o
a
r
d
.
 
1
.
2
K
 
G
i
t
H
u
b
 
s
t
a
r
s
.
 
B
u
i
l
t
 
w
i
t
h
 
R
e
a
c
t
 
a
n
d
 
G
o
.




\
\
e
n
d
{
m
u
l
t
i
c
o
l
s
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
5
.
 
D
e
e
d
y
-
S
t
y
l
e
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
d
e
e
d
y
"
,


 
 
 
 
n
a
m
e
:
 
"
D
e
e
d
y
-
S
t
y
l
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
D
e
n
s
e
 
t
w
o
-
c
o
l
u
m
n
 
t
e
c
h
n
i
c
a
l
 
r
e
s
u
m
e
 
i
n
s
p
i
r
e
d
 
b
y
 
D
e
e
d
y
 
C
V
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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
a
g
s
:
 
[
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
 
"
d
e
n
s
e
"
,
 
"
t
w
o
-
c
o
l
u
m
n
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
P
R
I
Y
A
 
S
H
A
R
M
A
"
,


 
 
 
 
 
 
"
p
r
i
y
a
.
s
h
a
r
m
a
@
g
a
t
e
c
h
.
e
d
u
 
|
 
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
p
r
i
y
a
s
h
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
E
d
u
c
a
t
i
o
n
 
 
 
 
 
 
 
 
 
 
|
 
 
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
G
e
o
r
g
i
a
 
T
e
c
h
 
 
 
 
 
 
 
|
 
 
G
o
o
g
l
e
,
 
S
W
E
 
I
n
t
e
r
n
"
,


 
 
 
 
 
 
"
B
.
S
.
 
C
S
,
 
3
.
9
2
 
G
P
A
 
 
|
 
 
M
e
t
a
,
 
M
L
 
I
n
t
e
r
n
"
,


 
 
 
 
 
 
"
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
|
"
,


 
 
 
 
 
 
"
S
k
i
l
l
s
:
 
C
+
+
,
 
P
y
t
h
o
n
,
 
T
e
n
s
o
r
F
l
o
w
,
 
C
U
D
A
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
l
e
f
t
=
0
.
5
i
n
,
r
i
g
h
t
=
0
.
5
i
n
,
t
o
p
=
0
.
5
i
n
,
b
o
t
t
o
m
=
0
.
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}


\
\
u
s
e
p
a
c
k
a
g
e
{
m
u
l
t
i
c
o
l
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
p
r
i
m
a
r
y
}
{
H
T
M
L
}
{
1
A
1
A
2
E
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
E
9
4
5
6
0
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
u
b
t
e
x
t
}
{
H
T
M
L
}
{
5
5
5
5
5
5
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
c
o
l
o
r
{
p
r
i
m
a
r
y
}
\
\
u
p
p
e
r
c
a
s
e
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
1
p
t
}
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
1
.
5
p
t
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
8
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
s
e
t
l
e
n
g
t
h
{
\
\
c
o
l
u
m
n
s
e
p
}
{
2
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
\
\
c
o
l
o
r
{
p
r
i
m
a
r
y
}
P
r
i
y
a
 
S
h
a
r
m
a
}
}
 
\
\
\
\
[
4
p
t
]


 
 
{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
s
u
b
t
e
x
t
}
 
p
r
i
y
a
.
s
h
a
r
m
a
@
g
a
t
e
c
h
.
e
d
u
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
4
0
4
)
 
5
5
5
-
3
2
1
0
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
A
t
l
a
n
t
a
,
 
G
A
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
s
u
b
t
e
x
t
}
 
\
\
h
r
e
f
{
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
p
r
i
y
a
s
h
}
{
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
p
r
i
y
a
s
h
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
p
r
i
y
a
s
h
a
r
m
a
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
p
r
i
y
a
s
h
a
r
m
a
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
v
s
p
a
c
e
{
2
p
t
}




\
\
b
e
g
i
n
{
m
u
l
t
i
c
o
l
s
}
{
2
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
G
e
o
r
g
i
a
 
I
n
s
t
i
t
u
t
e
 
o
f
 
T
e
c
h
n
o
l
o
g
y
}
 
\
\
\
\


{
\
\
s
m
a
l
l
 
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
,
 
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
i
o
n
 
i
n
 
A
I
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
A
u
g
 
2
0
2
1
 
-
-
 
M
a
y
 
2
0
2
5
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
9
2
/
4
.
0
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
s
u
b
t
e
x
t
}
 
D
e
a
n
'
s
 
L
i
s
t
 
a
l
l
 
s
e
m
e
s
t
e
r
s
.
 
T
A
 
f
o
r
 
C
S
 
4
6
4
1
 
M
a
c
h
i
n
e
 
L
e
a
r
n
i
n
g
.
}




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}




{
\
\
s
m
a
l
l


\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
C
+
+
,
 
P
y
t
h
o
n
,
 
J
a
v
a
,
 
R
u
s
t
,
 
S
Q
L
 
\
\
\
\


\
\
t
e
x
t
b
f
{
M
L
/
A
I
:
}
 
P
y
T
o
r
c
h
,
 
T
e
n
s
o
r
F
l
o
w
,
 
s
c
i
k
i
t
-
l
e
a
r
n
,
 
C
U
D
A
 
\
\
\
\


\
\
t
e
x
t
b
f
{
S
y
s
t
e
m
s
:
}
 
L
i
n
u
x
,
 
D
o
c
k
e
r
,
 
g
R
P
C
,
 
R
e
d
i
s
 
\
\
\
\


\
\
t
e
x
t
b
f
{
W
e
b
:
}
 
R
e
a
c
t
,
 
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
,
 
N
o
d
e
.
j
s
,
 
G
r
a
p
h
Q
L


}




\
\
s
e
c
t
i
o
n
*
{
A
w
a
r
d
s
}




{
\
\
s
m
a
l
l


\
\
t
e
x
t
b
f
{
1
s
t
 
P
l
a
c
e
}
 
-
-
 
H
a
c
k
G
T
 
2
0
2
3
 
(
A
I
 
T
r
a
c
k
)
 
\
\
\
\


\
\
t
e
x
t
b
f
{
G
o
o
g
l
e
 
C
S
R
M
P
 
S
c
h
o
l
a
r
}
 
-
-
 
2
0
2
2
 
\
\
\
\


\
\
t
e
x
t
b
f
{
I
C
P
C
 
R
e
g
i
o
n
a
l
s
}
 
-
-
 
S
o
u
t
h
e
a
s
t
,
 
2
0
2
3


}




\
\
c
o
l
u
m
n
b
r
e
a
k




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
i
n
g
 
I
n
t
e
r
n
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
G
o
o
g
l
e
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
M
a
y
 
2
0
2
4
 
-
-
 
A
u
g
 
2
0
2
4
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
[
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
t
e
x
t
b
u
l
l
e
t
]
 
B
u
i
l
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
d
 
t
r
a
i
n
i
n
g
 
p
i
p
e
l
i
n
e
 
f
o
r
 
L
L
M
 
f
i
n
e
-
t
u
n
i
n
g
 
o
n
 
T
P
U
 
v
5


 
 
\
\
i
t
e
m
[
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
t
e
x
t
b
u
l
l
e
t
]
 
R
e
d
u
c
e
d
 
t
r
a
i
n
i
n
g
 
c
o
n
v
e
r
g
e
n
c
e
 
t
i
m
e
 
b
y
 
3
5
\
\
%
 
v
i
a
 
c
u
s
t
o
m
 
d
a
t
a
 
l
o
a
d
e
r


 
 
\
\
i
t
e
m
[
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
t
e
x
t
b
u
l
l
e
t
]
 
C
o
n
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
 
i
n
t
e
r
n
a
l
 
M
L
 
f
r
a
m
e
w
o
r
k
 
u
s
e
d
 
b
y
 
2
0
0
+
 
r
e
s
e
a
r
c
h
e
r
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
M
L
 
E
n
g
i
n
e
e
r
i
n
g
 
I
n
t
e
r
n
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
M
e
t
a
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
M
a
y
 
2
0
2
3
 
-
-
 
A
u
g
 
2
0
2
3
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
[
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
t
e
x
t
b
u
l
l
e
t
]
 
I
m
p
l
e
m
e
n
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
 
r
e
c
o
m
m
e
n
d
a
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
e
r
v
i
n
g
 
1
0
0
M
+
 
u
s
e
r
s


 
 
\
\
i
t
e
m
[
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
t
e
x
t
b
u
l
l
e
t
]
 
A
/
B
 
t
e
s
t
e
d
 
e
n
g
a
g
e
m
e
n
t
 
f
e
a
t
u
r
e
s
 
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
e
s
s
i
o
n
 
t
i
m
e
 
b
y
 
8
\
\
%


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}




\
\
t
e
x
t
b
f
{
N
e
u
r
a
l
D
B
}
 
-
-
 
V
e
c
t
o
r
 
d
a
t
a
b
a
s
e
 
e
n
g
i
n
e
 
b
u
i
l
t
 
i
n
 
R
u
s
t
 
w
i
t
h
 
H
N
S
W
 
i
n
d
e
x
i
n
g
.
 
8
0
0
+
 
G
i
t
H
u
b
 
s
t
a
r
s
.
 
B
e
n
c
h
m
a
r
k
e
d
 
3
x
 
f
a
s
t
e
r
 
t
h
a
n
 
F
A
I
S
S
 
o
n
 
1
M
 
v
e
c
t
o
r
s
.




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
C
o
d
e
B
u
d
d
y
}
 
-
-
 
A
I
 
p
a
i
r
 
p
r
o
g
r
a
m
m
e
r
 
V
S
 
C
o
d
e
 
e
x
t
e
n
s
i
o
n
 
u
s
i
n
g
 
f
i
n
e
-
t
u
n
e
d
 
C
o
d
e
L
l
a
m
a
.
 
2
K
+
 
i
n
s
t
a
l
l
s
 
o
n
 
V
S
 
C
o
d
e
 
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
.




\
\
e
n
d
{
m
u
l
t
i
c
o
l
s
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
6
.
 
E
x
e
c
u
t
i
v
e
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
e
x
e
c
u
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
E
x
e
c
u
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
F
o
r
m
a
l
 
s
e
r
i
f
 
l
a
y
o
u
t
 
f
o
r
 
s
e
n
i
o
r
 
a
n
d
 
l
e
a
d
e
r
s
h
i
p
 
r
o
l
e
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
e
x
e
c
u
t
i
v
e
"
,


 
 
 
 
t
a
g
s
:
 
[
"
e
x
e
c
u
t
i
v
e
"
,
 
"
s
e
r
i
f
"
,
 
"
f
o
r
m
a
l
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
M
I
C
H
A
E
L
 
T
H
O
M
P
S
O
N
"
,


 
 
 
 
 
 
"
C
h
i
e
f
 
T
e
c
h
n
o
l
o
g
y
 
O
f
f
i
c
e
r
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
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
v
e
 
S
u
m
m
a
r
y
"
,


 
 
 
 
 
 
"
S
e
a
s
o
n
e
d
 
t
e
c
h
n
o
l
o
g
y
 
l
e
a
d
e
r
 
w
i
t
h
 
1
5
+
 
y
e
a
r
s
.
.
.
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
L
e
a
d
e
r
s
h
i
p
 
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
l
e
t
t
e
r
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
1
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
r
e
n
e
w
c
o
m
m
a
n
d
{
\
\
f
a
m
i
l
y
d
e
f
a
u
l
t
}
{
\
\
r
m
d
e
f
a
u
l
t
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
}
{
}
{
0
e
m
}
{
\
\
M
a
k
e
U
p
p
e
r
c
a
s
e
}
[
\
\
v
s
p
a
c
e
{
2
p
t
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
0
.
5
p
t
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
4
p
t
}
{
6
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
M
i
c
h
a
e
l
 
T
h
o
m
p
s
o
n
}
}
 
\
\
\
\
[
6
p
t
]


 
 
{
\
\
l
a
r
g
e
 
C
h
i
e
f
 
T
e
c
h
n
o
l
o
g
y
 
O
f
f
i
c
e
r
}
 
\
\
\
\
[
8
p
t
]


 
 
{
\
\
s
m
a
l
l
 
m
i
c
h
a
e
l
.
t
h
o
m
p
s
o
n
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
2
1
2
)
 
5
5
5
-
8
9
0
0
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
N
e
w
 
Y
o
r
k
,
 
N
Y
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
m
t
h
o
m
p
s
o
n
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
m
t
h
o
m
p
s
o
n
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
v
s
p
a
c
e
{
8
p
t
}




\
\
s
e
c
t
i
o
n
*
{
E
x
e
c
u
t
i
v
e
 
S
u
m
m
a
r
y
}




S
e
a
s
o
n
e
d
 
t
e
c
h
n
o
l
o
g
y
 
l
e
a
d
e
r
 
w
i
t
h
 
1
5
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
d
r
i
v
i
n
g
 
d
i
g
i
t
a
l
 
t
r
a
n
s
f
o
r
m
a
t
i
o
n
 
a
t
 
s
c
a
l
e
.
 
P
r
o
v
e
n
 
t
r
a
c
k
 
r
e
c
o
r
d
 
o
f
 
b
u
i
l
d
i
n
g
 
a
n
d
 
l
e
a
d
i
n
g
 
e
n
g
i
n
e
e
r
i
n
g
 
o
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
 
o
f
 
2
0
0
+
 
e
n
g
i
n
e
e
r
s
,
 
d
e
l
i
v
e
r
i
n
g
 
p
l
a
t
f
o
r
m
s
 
s
e
r
v
i
n
g
 
m
i
l
l
i
o
n
s
 
o
f
 
u
s
e
r
s
,
 
a
n
d
 
a
l
i
g
n
i
n
g
 
t
e
c
h
n
o
l
o
g
y
 
s
t
r
a
t
e
g
y
 
w
i
t
h
 
b
u
s
i
n
e
s
s
 
o
b
j
e
c
t
i
v
e
s
.
 
D
e
e
p
 
e
x
p
e
r
t
i
s
e
 
i
n
 
c
l
o
u
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
,
 
d
a
t
a
 
i
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
,
 
a
n
d
 
A
I
/
M
L
 
s
y
s
t
e
m
s
.




\
\
s
e
c
t
i
o
n
*
{
L
e
a
d
e
r
s
h
i
p
 
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
C
h
i
e
f
 
T
e
c
h
n
o
l
o
g
y
 
O
f
f
i
c
e
r
}
 
\
\
h
f
i
l
l
 
F
i
n
a
n
c
e
H
u
b
 
I
n
c
.
 
\
\
\
\


{
\
\
t
e
x
t
i
t
{
J
a
n
 
2
0
2
1
 
-
-
 
P
r
e
s
e
n
t
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
N
e
w
 
Y
o
r
k
,
 
N
Y
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
4
p
t
]


 
 
\
\
i
t
e
m
 
O
v
e
r
s
e
e
 
e
n
g
i
n
e
e
r
i
n
g
 
o
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
 
o
f
 
2
2
0
 
e
n
g
i
n
e
e
r
s
 
a
c
r
o
s
s
 
1
8
 
t
e
a
m
s


 
 
\
\
i
t
e
m
 
L
e
d
 
c
l
o
u
d
 
m
i
g
r
a
t
i
o
n
 
r
e
d
u
c
i
n
g
 
i
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
 
c
o
s
t
s
 
b
y
 
\
\
$
4
.
2
M
 
a
n
n
u
a
l
l
y


 
 
\
\
i
t
e
m
 
L
a
u
n
c
h
e
d
 
A
I
-
p
o
w
e
r
e
d
 
f
r
a
u
d
 
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
y
s
t
e
m
 
p
r
e
v
e
n
t
i
n
g
 
\
\
$
1
2
0
M
+
 
i
n
 
l
o
s
s
e
s


 
 
\
\
i
t
e
m
 
E
s
t
a
b
l
i
s
h
e
d
 
e
n
g
i
n
e
e
r
i
n
g
 
c
u
l
t
u
r
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
 
i
n
 
9
2
\
\
%
 
r
e
t
e
n
t
i
o
n
 
r
a
t
e


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
8
p
t
}


\
\
t
e
x
t
b
f
{
V
P
 
o
f
 
E
n
g
i
n
e
e
r
i
n
g
}
 
\
\
h
f
i
l
l
 
D
a
t
a
S
c
a
l
e
 
C
o
r
p
.
 
\
\
\
\


{
\
\
t
e
x
t
i
t
{
M
a
r
 
2
0
1
7
 
-
-
 
D
e
c
 
2
0
2
0
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
4
p
t
]


 
 
\
\
i
t
e
m
 
G
r
e
w
 
e
n
g
i
n
e
e
r
i
n
g
 
t
e
a
m
 
f
r
o
m
 
4
0
 
t
o
 
1
5
0
 
e
n
g
i
n
e
e
r
s
 
i
n
 
3
 
y
e
a
r
s


 
 
\
\
i
t
e
m
 
A
r
c
h
i
t
e
c
t
e
d
 
r
e
a
l
-
t
i
m
e
 
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
 
2
B
+
 
e
v
e
n
t
s
 
d
a
i
l
y


 
 
\
\
i
t
e
m
 
D
r
o
v
e
 
S
O
C
 
2
 
T
y
p
e
 
I
I
 
a
n
d
 
G
D
P
R
 
c
o
m
p
l
i
a
n
c
e
 
a
c
r
o
s
s
 
a
l
l
 
s
y
s
t
e
m
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
8
p
t
}


\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
E
n
g
i
n
e
e
r
i
n
g
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
A
m
a
z
o
n
 
W
e
b
 
S
e
r
v
i
c
e
s
 
\
\
\
\


{
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
1
2
 
-
-
 
F
e
b
 
2
0
1
7
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
S
e
a
t
t
l
e
,
 
W
A
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
4
p
t
]


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
d
 
6
 
t
e
a
m
s
 
b
u
i
l
d
i
n
g
 
c
o
r
e
 
A
W
S
 
L
a
m
b
d
a
 
i
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


 
 
\
\
i
t
e
m
 
D
e
l
i
v
e
r
e
d
 
f
e
a
t
u
r
e
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
n
g
 
t
o
 
4
0
\
\
%
 
Y
o
Y
 
r
e
v
e
n
u
e
 
g
r
o
w
t
h


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
M
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
C
a
r
n
e
g
i
e
 
M
e
l
l
o
n
 
U
n
i
v
e
r
s
i
t
y
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
2
0
1
0
 
-
-
 
2
0
1
2
}
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
E
n
g
i
n
e
e
r
i
n
g
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
M
i
c
h
i
g
a
n
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
2
0
0
6
 
-
-
 
2
0
1
0
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
S
u
m
m
a
 
C
u
m
 
L
a
u
d
e
}




\
\
s
e
c
t
i
o
n
*
{
B
o
a
r
d
 
\
\
&
 
A
d
v
i
s
o
r
y
}




\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
]


 
 
\
\
i
t
e
m
 
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
d
v
i
s
o
r
y
 
B
o
a
r
d
,
 
T
e
c
h
S
t
a
r
s
 
N
Y
C
 
(
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
)


 
 
\
\
i
t
e
m
 
B
o
a
r
d
 
M
e
m
b
e
r
,
 
C
o
d
e
.
o
r
g
 
E
d
u
c
a
t
i
o
n
 
I
n
i
t
i
a
t
i
v
e
 
(
2
0
2
0
 
-
-
 
P
r
e
s
e
n
t
)


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
7
.
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
s
o
f
t
w
a
r
e
-
e
n
g
i
n
e
e
r
"
,


 
 
 
 
n
a
m
e
:
 
"
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
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
O
p
t
i
m
i
z
e
d
 
f
o
r
 
t
e
c
h
 
r
o
l
e
s
 
w
i
t
h
 
s
k
i
l
l
s
 
m
a
t
r
i
x
 
a
n
d
 
p
r
o
j
e
c
t
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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
a
g
s
:
 
[
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
 
"
A
T
S
-
f
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


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
R
A
V
I
 
P
A
T
E
L
"
,


 
 
 
 
 
 
"
F
u
l
l
 
S
t
a
c
k
 
E
n
g
i
n
e
e
r
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
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
 
S
k
i
l
l
s
"
,


 
 
 
 
 
 
"
R
e
a
c
t
 
|
 
N
o
d
e
.
j
s
 
|
 
P
y
t
h
o
n
 
|
 
A
W
S
 
|
 
D
o
c
k
e
r
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
B
a
c
k
e
n
d
 
E
n
g
i
n
e
e
r
 
-
 
S
t
r
i
p
e
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
6
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
h
e
a
d
i
n
g
}
{
H
T
M
L
}
{
1
E
2
9
3
B
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
3
B
8
2
F
6
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
u
p
p
e
r
c
a
s
e
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
1
p
t
}
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
1
p
t
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
0
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
R
a
v
i
 
P
a
t
e
l
}
}
 
\
\
\
\
[
4
p
t
]


 
 
{
\
\
s
m
a
l
l
 
r
a
v
i
.
p
a
t
e
l
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
6
5
0
)
 
5
5
5
-
2
4
6
8
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
A
u
s
t
i
n
,
 
T
X
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
 
\
\
h
r
e
f
{
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
r
a
v
i
p
a
t
e
l
}
{
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
r
a
v
i
p
a
t
e
l
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
r
a
v
i
p
a
t
e
l
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
r
a
v
i
p
a
t
e
l
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
r
a
v
i
p
a
t
e
l
.
d
e
v
}
{
r
a
v
i
p
a
t
e
l
.
d
e
v
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
T
e
c
h
n
i
c
a
l
 
S
k
i
l
l
s
}




\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
J
a
v
a
S
c
r
i
p
t
,
 
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
,
 
P
y
t
h
o
n
,
 
G
o
,
 
S
Q
L
,
 
R
u
s
t
 
\
\
\
\


\
\
t
e
x
t
b
f
{
F
r
o
n
t
e
n
d
:
}
 
R
e
a
c
t
,
 
N
e
x
t
.
j
s
,
 
V
u
e
.
j
s
,
 
T
a
i
l
w
i
n
d
 
C
S
S
,
 
W
e
b
p
a
c
k
 
\
\
\
\


\
\
t
e
x
t
b
f
{
B
a
c
k
e
n
d
:
}
 
N
o
d
e
.
j
s
,
 
E
x
p
r
e
s
s
,
 
F
a
s
t
A
P
I
,
 
D
j
a
n
g
o
,
 
G
r
a
p
h
Q
L
,
 
g
R
P
C
 
\
\
\
\


\
\
t
e
x
t
b
f
{
D
a
t
a
:
}
 
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
,
 
M
o
n
g
o
D
B
,
 
R
e
d
i
s
,
 
E
l
a
s
t
i
c
s
e
a
r
c
h
,
 
K
a
f
k
a
 
\
\
\
\


\
\
t
e
x
t
b
f
{
D
e
v
O
p
s
:
}
 
A
W
S
 
(
E
C
2
,
 
L
a
m
b
d
a
,
 
S
3
,
 
R
D
S
)
,
 
D
o
c
k
e
r
,
 
K
u
b
e
r
n
e
t
e
s
,
 
T
e
r
r
a
f
o
r
m
,
 
G
i
t
H
u
b
 
A
c
t
i
o
n
s




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
B
a
c
k
e
n
d
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
S
t
r
i
p
e
,
 
A
u
s
t
i
n
 
T
X
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
M
a
r
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
 
A
r
c
h
i
t
e
c
t
e
d
 
p
a
y
m
e
n
t
 
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
 
p
i
p
e
l
i
n
e
 
h
a
n
d
l
i
n
g
 
\
\
$
2
B
+
 
i
n
 
d
a
i
l
y
 
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


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
i
d
e
m
p
o
t
e
n
c
y
 
f
r
a
m
e
w
o
r
k
 
r
e
d
u
c
i
n
g
 
d
u
p
l
i
c
a
t
e
 
c
h
a
r
g
e
s
 
b
y
 
9
9
.
7
\
\
%


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
r
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
c
e
s
s
i
n
g
 
5
0
0
K
 
r
e
q
u
e
s
t
s
/
s
e
c
 
w
i
t
h
 
s
u
b
-
m
s
 
l
a
t
e
n
c
y


 
 
\
\
i
t
e
m
 
L
e
d
 
t
e
a
m
 
o
f
 
5
 
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
e
l
i
v
e
r
i
n
g
 
P
C
I
 
D
S
S
 
c
o
m
p
l
i
a
n
t
 
t
o
k
e
n
i
z
a
t
i
o
n
 
s
y
s
t
e
m


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
F
u
l
l
 
S
t
a
c
k
 
E
n
g
i
n
e
e
r
}
 
\
\
h
f
i
l
l
 
S
h
o
p
i
f
y
,
 
R
e
m
o
t
e
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
J
u
l
 
2
0
1
9
 
-
-
 
F
e
b
 
2
0
2
2
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
2
p
t
]


 
 
\
\
i
t
e
m
 
D
e
v
e
l
o
p
e
d
 
s
t
o
r
e
f
r
o
n
t
 
r
e
n
d
e
r
i
n
g
 
e
n
g
i
n
e
 
i
m
p
r
o
v
i
n
g
 
p
a
g
e
 
l
o
a
d
 
b
y
 
4
5
\
\
%


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
r
e
a
l
-
t
i
m
e
 
i
n
v
e
n
t
o
r
y
 
s
y
n
c
 
h
a
n
d
l
i
n
g
 
1
0
K
+
 
c
o
n
c
u
r
r
e
n
t
 
s
t
o
r
e
 
u
p
d
a
t
e
s


 
 
\
\
i
t
e
m
 
C
r
e
a
t
e
d
 
i
n
t
e
r
n
a
l
 
C
L
I
 
t
o
o
l
 
a
d
o
p
t
e
d
 
b
y
 
8
0
+
 
e
n
g
i
n
e
e
r
s
 
f
o
r
 
l
o
c
a
l
 
d
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


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}




\
\
t
e
x
t
b
f
{
F
a
s
t
Q
u
e
u
e
}
 
-
-
 
H
i
g
h
-
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
 
m
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
 
i
n
 
R
u
s
t
 
w
i
t
h
 
N
A
T
S
 
p
r
o
t
o
c
o
l
 
c
o
m
p
a
t
i
b
i
l
i
t
y
.
 
1
.
5
K
 
G
i
t
H
u
b
 
s
t
a
r
s
,
 
b
e
n
c
h
m
a
r
k
e
d
 
a
t
 
2
M
 
m
s
g
s
/
s
e
c
.




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
A
P
I
F
o
r
g
e
}
 
-
-
 
O
p
e
n
-
s
o
u
r
c
e
 
A
P
I
 
m
o
c
k
i
n
g
 
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
 
f
r
a
m
e
w
o
r
k
 
f
o
r
 
N
o
d
e
.
j
s
.
 
U
s
e
d
 
b
y
 
5
0
0
+
 
c
o
m
p
a
n
i
e
s
.
 
F
e
a
t
u
r
e
d
 
i
n
 
N
o
d
e
 
W
e
e
k
l
y
.




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
T
e
x
a
s
 
a
t
 
A
u
s
t
i
n
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
2
0
1
5
 
-
-
 
2
0
1
9
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
G
P
A
:
 
3
.
8
5
/
4
.
0
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
8
.
 
M
o
d
e
r
n
 
C
l
e
a
n
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
m
o
d
e
r
n
-
c
l
e
a
n
"
,


 
 
 
 
n
a
m
e
:
 
"
M
o
d
e
r
n
 
C
l
e
a
n
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
o
n
t
e
m
p
o
r
a
r
y
 
d
e
s
i
g
n
 
w
i
t
h
 
c
o
l
o
r
e
d
 
a
c
c
e
n
t
 
s
e
c
t
i
o
n
 
h
e
a
d
e
r
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
c
r
e
a
t
i
v
e
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
o
d
e
r
n
"
,
 
"
c
o
l
o
r
-
a
c
c
e
n
t
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
E
M
M
A
 
N
A
K
A
M
U
R
A
"
,


 
 
 
 
 
 
"
D
a
t
a
 
S
c
i
e
n
t
i
s
t
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
 
 
A
b
o
u
t
"
,


 
 
 
 
 
 
"
 
 
D
a
t
a
 
s
c
i
e
n
t
i
s
t
 
s
p
e
c
i
a
l
i
z
i
n
g
 
i
n
 
M
L
 
p
i
p
e
l
i
n
e
s
.
.
.
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
 
 
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
 
 
D
a
t
a
 
S
c
i
e
n
t
i
s
t
 
-
 
N
e
t
f
l
i
x
,
 
2
0
2
2
-
P
r
e
s
e
n
t
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
7
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
p
r
i
m
a
r
y
}
{
H
T
M
L
}
{
6
3
6
6
F
1
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
d
a
r
k
}
{
H
T
M
L
}
{
1
E
1
B
4
B
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
m
u
t
e
d
}
{
H
T
M
L
}
{
6
4
7
4
8
B
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
c
o
l
o
r
{
p
r
i
m
a
r
y
}
}
{
}
{
0
e
m
}
{
\
\
h
s
p
a
c
e
{
0
p
t
}
}
[
\
\
v
s
p
a
c
e
{
0
p
t
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
2
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
n
e
w
c
o
m
m
a
n
d
{
\
\
a
c
c
e
n
t
l
i
n
e
}
{
\
\
v
s
p
a
c
e
{
2
p
t
}
{
\
\
c
o
l
o
r
{
p
r
i
m
a
r
y
}
\
\
h
r
u
l
e
 
h
e
i
g
h
t
 
2
p
t
}
\
\
v
s
p
a
c
e
{
6
p
t
}
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
\
\
c
o
l
o
r
{
d
a
r
k
}
E
m
m
a
 
N
a
k
a
m
u
r
a
}
}
 
\
\
\
\
[
4
p
t
]


 
 
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
c
o
l
o
r
{
m
u
t
e
d
}
 
D
a
t
a
 
S
c
i
e
n
t
i
s
t
}
 
\
\
\
\
[
6
p
t
]


 
 
{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
 
e
m
m
a
.
n
a
k
a
m
u
r
a
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
3
1
0
)
 
5
5
5
-
7
4
1
2
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
L
o
s
 
A
n
g
e
l
e
s
,
 
C
A
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
 
\
\
h
r
e
f
{
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
n
a
k
a
m
u
r
a
}
{
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
n
a
k
a
m
u
r
a
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
e
n
a
k
a
m
u
r
a
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
e
n
a
k
a
m
u
r
a
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
v
s
p
a
c
e
{
4
p
t
}




\
\
s
e
c
t
i
o
n
*
{
A
b
o
u
t
}


\
\
a
c
c
e
n
t
l
i
n
e


D
a
t
a
 
s
c
i
e
n
t
i
s
t
 
s
p
e
c
i
a
l
i
z
i
n
g
 
i
n
 
b
u
i
l
d
i
n
g
 
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
 
M
L
 
p
i
p
e
l
i
n
e
s
 
a
n
d
 
t
u
r
n
i
n
g
 
c
o
m
p
l
e
x
 
d
a
t
a
s
e
t
s
 
i
n
t
o
 
a
c
t
i
o
n
a
b
l
e
 
b
u
s
i
n
e
s
s
 
i
n
s
i
g
h
t
s
.
 
4
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
i
n
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
 
s
y
s
t
e
m
s
,
 
N
L
P
,
 
a
n
d
 
e
x
p
e
r
i
m
e
n
t
a
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
.




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}


\
\
a
c
c
e
n
t
l
i
n
e




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
D
a
t
a
 
S
c
i
e
n
t
i
s
t
}
 
\
\
h
f
i
l
l
 
{
\
\
c
o
l
o
r
{
m
u
t
e
d
}
N
e
t
f
l
i
x
,
 
L
o
s
 
A
n
g
e
l
e
s
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
A
p
r
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
p
e
r
s
o
n
a
l
i
z
a
t
i
o
n
 
m
o
d
e
l
 
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
o
n
t
e
n
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
 
C
T
R
 
b
y
 
1
8
\
\
%


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
A
/
B
 
t
e
s
t
i
n
g
 
f
r
a
m
e
w
o
r
k
 
u
s
e
d
 
b
y
 
3
0
+
 
d
a
t
a
 
s
c
i
e
n
t
i
s
t
s


 
 
\
\
i
t
e
m
 
D
e
v
e
l
o
p
e
d
 
r
e
a
l
-
t
i
m
e
 
f
e
a
t
u
r
e
 
s
t
o
r
e
 
s
e
r
v
i
n
g
 
2
0
0
M
+
 
m
e
m
b
e
r
 
p
r
o
f
i
l
e
s


 
 
\
\
i
t
e
m
 
P
u
b
l
i
s
h
e
d
 
i
n
t
e
r
n
a
l
 
r
e
s
e
a
r
c
h
 
o
n
 
c
a
u
s
a
l
 
i
n
f
e
r
e
n
c
e
 
f
o
r
 
c
o
n
t
e
n
t
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
D
a
t
a
 
S
c
i
e
n
t
i
s
t
}
 
\
\
h
f
i
l
l
 
{
\
\
c
o
l
o
r
{
m
u
t
e
d
}
S
p
o
t
i
f
y
,
 
N
e
w
 
Y
o
r
k
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
2
0
 
-
-
 
M
a
r
 
2
0
2
2
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
*
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
D
e
v
e
l
o
p
e
d
 
p
l
a
y
l
i
s
t
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
 
a
l
g
o
r
i
t
h
m
 
f
o
r
 
D
i
s
c
o
v
e
r
 
W
e
e
k
l
y


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
N
L
P
 
p
i
p
e
l
i
n
e
 
f
o
r
 
p
o
d
c
a
s
t
 
t
r
a
n
s
c
r
i
p
t
 
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
 
t
o
p
i
c
 
m
o
d
e
l
i
n
g


 
 
\
\
i
t
e
m
 
C
r
e
a
t
e
d
 
d
a
s
h
b
o
a
r
d
s
 
t
r
a
c
k
i
n
g
 
1
5
+
 
K
P
I
s
 
f
o
r
 
c
o
n
t
e
n
t
 
s
t
r
a
t
e
g
y
 
t
e
a
m


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}


\
\
a
c
c
e
n
t
l
i
n
e




\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
P
y
t
h
o
n
,
 
R
,
 
S
Q
L
,
 
S
c
a
l
a
 
\
\
\
\


\
\
t
e
x
t
b
f
{
M
L
/
A
I
:
}
 
P
y
T
o
r
c
h
,
 
T
e
n
s
o
r
F
l
o
w
,
 
s
c
i
k
i
t
-
l
e
a
r
n
,
 
X
G
B
o
o
s
t
,
 
H
u
g
g
i
n
g
 
F
a
c
e
 
\
\
\
\


\
\
t
e
x
t
b
f
{
D
a
t
a
:
}
 
S
p
a
r
k
,
 
A
i
r
f
l
o
w
,
 
d
b
t
,
 
B
i
g
Q
u
e
r
y
,
 
S
n
o
w
f
l
a
k
e
,
 
K
a
f
k
a
 
\
\
\
\


\
\
t
e
x
t
b
f
{
V
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
:
}
 
M
a
t
p
l
o
t
l
i
b
,
 
P
l
o
t
l
y
,
 
T
a
b
l
e
a
u
,
 
S
t
r
e
a
m
l
i
t




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}


\
\
a
c
c
e
n
t
l
i
n
e




\
\
t
e
x
t
b
f
{
M
.
S
.
 
S
t
a
t
i
s
t
i
c
s
}
 
\
\
h
f
i
l
l
 
U
C
L
A
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
2
0
1
8
 
-
-
 
2
0
2
0
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
F
o
c
u
s
:
 
S
t
a
t
i
s
t
i
c
a
l
 
L
e
a
r
n
i
n
g
}




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
B
.
S
.
 
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
s
}
 
\
\
h
f
i
l
l
 
U
C
 
B
e
r
k
e
l
e
y
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
2
0
1
4
 
-
-
 
2
0
1
8
}
}
 
\
\
h
f
i
l
l
 
{
\
\
s
m
a
l
l
 
G
P
A
:
 
3
.
8
8
/
4
.
0
}




\
\
s
e
c
t
i
o
n
*
{
P
u
b
l
i
c
a
t
i
o
n
s
}


\
\
a
c
c
e
n
t
l
i
n
e




{
\
\
s
m
a
l
l
 
N
a
k
a
m
u
r
a
,
 
E
.
 
\
\
&
 
L
e
e
,
 
J
.
 
(
2
0
2
3
)
.
 
"
C
a
u
s
a
l
 
B
a
n
d
i
t
s
 
f
o
r
 
C
o
n
t
e
n
t
 
R
e
c
o
m
m
e
n
d
a
t
i
o
n
s
.
"
 
\
\
t
e
x
t
i
t
{
R
e
c
S
y
s
 
2
0
2
3
}
.
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
9
.
 
J
a
k
e
'
s
 
R
e
s
u
m
e
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
j
a
k
e
s
-
r
e
s
u
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
J
a
k
e
'
s
 
R
e
s
u
m
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
P
o
p
u
l
a
r
 
C
S
 
r
e
s
u
m
e
 
f
o
r
m
a
t
,
 
c
o
m
p
a
c
t
,
 
s
i
n
g
l
e
-
c
o
l
u
m
n
,
 
n
o
 
f
r
i
l
l
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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
a
g
s
:
 
[
"
A
T
S
-
f
r
i
e
n
d
l
y
"
,
 
"
c
o
m
p
a
c
t
"
,
 
"
C
S
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
J
A
K
E
 
R
Y
A
N
"
,


 
 
 
 
 
 
"
1
2
3
-
4
5
6
-
7
8
9
0
 
|
 
j
a
k
e
@
s
u
.
e
d
u
"
,


 
 
 
 
 
 
"
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
j
a
k
e
 
|
 
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
j
a
k
e
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
d
u
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
o
u
t
h
w
e
s
t
e
r
n
 
U
n
i
v
e
r
s
i
t
y
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
l
e
t
t
e
r
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
l
a
t
e
x
s
y
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
[
h
i
d
e
l
i
n
k
s
]
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
-
6
p
t
}
\
\
r
u
l
e
{
\
\
l
i
n
e
w
i
d
t
h
}
{
0
.
4
p
t
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
6
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
s
e
t
l
e
n
g
t
h
{
\
\
t
a
b
c
o
l
s
e
p
}
{
0
i
n
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
n
e
w
c
o
m
m
a
n
d
{
\
\
r
e
s
u
m
e
I
t
e
m
}
[
1
]
{
\
\
i
t
e
m
\
\
s
m
a
l
l
{
#
1
}
}


\
\
n
e
w
c
o
m
m
a
n
d
{
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
}
[
4
]
{


 
 
\
\
i
t
e
m


 
 
\
\
b
e
g
i
n
{
t
a
b
u
l
a
r
*
}
{
\
\
l
i
n
e
w
i
d
t
h
}
{
l
@
{
\
\
e
x
t
r
a
c
o
l
s
e
p
{
\
\
f
i
l
l
}
}
r
}


 
 
 
 
\
\
t
e
x
t
b
f
{
#
1
}
 
&
 
\
\
s
m
a
l
l
 
#
2
 
\
\
\
\


 
 
 
 
\
\
t
e
x
t
i
t
{
\
\
s
m
a
l
l
 
#
3
}
 
&
 
\
\
t
e
x
t
i
t
{
\
\
s
m
a
l
l
 
#
4
}


 
 
\
\
e
n
d
{
t
a
b
u
l
a
r
*
}
\
\
v
s
p
a
c
e
{
-
4
p
t
}


}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
H
u
g
e
\
\
t
e
x
t
b
f
{
J
a
k
e
 
R
y
a
n
}
}
 
\
\
\
\
[
4
p
t
]


 
 
\
\
s
m
a
l
l
 
1
2
3
-
4
5
6
-
7
8
9
0
 
$
|
$


 
 
\
\
h
r
e
f
{
m
a
i
l
t
o
:
j
a
k
e
@
s
u
.
e
d
u
}
{
j
a
k
e
@
s
u
.
e
d
u
}
 
$
|
$


 
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
j
a
k
e
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
j
a
k
e
}
 
$
|
$


 
 
\
\
h
r
e
f
{
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
j
a
k
e
}
{
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
j
a
k
e
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
0
p
t
,
 
l
a
b
e
l
=
{
}
,
 
n
o
s
e
p
]


 
 
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
{
S
o
u
t
h
w
e
s
t
e
r
n
 
U
n
i
v
e
r
s
i
t
y
}
{
G
e
o
r
g
e
t
o
w
n
,
 
T
X
}
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
,
 
M
i
n
o
r
 
i
n
 
B
u
s
i
n
e
s
s
}
{
A
u
g
 
2
0
1
8
 
-
-
 
M
a
y
 
2
0
2
1
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
0
p
t
,
 
l
a
b
e
l
=
{
}
,
 
n
o
s
e
p
]


 
 
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
{
U
n
d
e
r
g
r
a
d
u
a
t
e
 
R
e
s
e
a
r
c
h
 
A
s
s
i
s
t
a
n
t
}
{
J
u
n
 
2
0
2
0
 
-
-
 
P
r
e
s
e
n
t
}
{
T
e
x
a
s
 
A
\
\
&
M
 
U
n
i
v
e
r
s
i
t
y
}
{
C
o
l
l
e
g
e
 
S
t
a
t
i
o
n
,
 
T
X
}


 
 
\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
]


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
D
e
v
e
l
o
p
e
d
 
a
 
R
E
S
T
 
A
P
I
 
u
s
i
n
g
 
F
a
s
t
A
P
I
 
a
n
d
 
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
 
t
o
 
m
a
n
a
g
e
 
3
0
0
0
+
 
j
o
u
r
n
a
l
 
a
r
t
i
c
l
e
s
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
B
u
i
l
t
 
a
 
f
u
l
l
-
s
t
a
c
k
 
w
e
b
 
a
p
p
l
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
 
F
l
a
s
k
,
 
R
e
a
c
t
,
 
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
,
 
a
n
d
 
D
o
c
k
e
r
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
E
x
p
l
o
r
e
d
 
m
e
t
h
o
d
s
 
t
o
 
g
e
n
e
r
a
t
e
 
l
a
r
g
e
 
s
y
n
t
h
e
t
i
c
 
d
a
t
a
s
e
t
s
 
u
s
i
n
g
 
P
y
t
h
o
n
 
a
n
d
 
N
u
m
P
y
}


 
 
\
\
e
n
d
{
i
t
e
m
i
z
e
}




 
 
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
{
I
T
 
S
u
p
p
o
r
t
 
S
p
e
c
i
a
l
i
s
t
}
{
S
e
p
 
2
0
1
8
 
-
-
 
P
r
e
s
e
n
t
}
{
S
o
u
t
h
w
e
s
t
e
r
n
 
U
n
i
v
e
r
s
i
t
y
}
{
G
e
o
r
g
e
t
o
w
n
,
 
T
X
}


 
 
\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
]


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
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
e
 
w
i
t
h
 
m
a
n
a
g
e
r
s
 
t
o
 
s
e
t
 
u
p
 
c
a
m
p
u
s
 
c
o
m
p
u
t
e
r
s
 
u
s
e
d
 
b
y
 
P
C
 
L
a
b
 
s
t
u
d
e
n
t
s
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
A
s
s
e
s
s
 
a
n
d
 
t
r
o
u
b
l
e
s
h
o
o
t
 
c
o
m
p
u
t
e
r
 
p
r
o
b
l
e
m
s
 
b
r
o
u
g
h
t
 
b
y
 
s
t
u
d
e
n
t
s
 
a
n
d
 
f
a
c
u
l
t
y
}


 
 
\
\
e
n
d
{
i
t
e
m
i
z
e
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
0
p
t
,
 
l
a
b
e
l
=
{
}
,
 
n
o
s
e
p
]


 
 
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
{
G
i
t
l
y
t
i
c
s
}
{
P
y
t
h
o
n
,
 
F
l
a
s
k
,
 
R
e
a
c
t
,
 
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
,
 
D
o
c
k
e
r
}
{
\
\
h
r
e
f
{
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
j
a
k
e
/
g
i
t
l
y
t
i
c
s
}
{
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
j
a
k
e
/
g
i
t
l
y
t
i
c
s
}
}
{
J
u
n
 
2
0
2
0
 
-
-
 
P
r
e
s
e
n
t
}


 
 
\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
]


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
D
e
v
e
l
o
p
e
d
 
a
 
f
u
l
l
-
s
t
a
c
k
 
w
e
b
 
a
p
p
l
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
 
G
i
t
H
u
b
 
a
n
a
l
y
t
i
c
s
 
u
s
i
n
g
 
F
l
a
s
k
 
R
E
S
T
 
A
P
I
 
a
n
d
 
R
e
a
c
t
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
V
i
s
u
a
l
i
z
e
d
 
G
i
t
H
u
b
 
d
a
t
a
 
t
o
 
d
e
m
o
n
s
t
r
a
t
e
 
c
o
l
l
a
b
o
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
 
i
n
t
e
r
a
c
t
i
v
e
 
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
 
g
r
a
p
h
s
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
C
o
n
f
i
g
u
r
e
d
 
N
g
i
n
x
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
f
o
r
 
t
h
e
 
w
e
b
 
a
p
p
l
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
 
t
a
r
g
e
t
 
g
r
o
u
p
 
E
C
2
 
i
n
s
t
a
n
c
e
s
}


 
 
\
\
e
n
d
{
i
t
e
m
i
z
e
}




 
 
\
\
r
e
s
u
m
e
S
u
b
h
e
a
d
i
n
g
{
S
i
m
p
l
e
 
P
a
i
n
t
b
a
l
l
}
{
S
p
i
g
o
t
 
A
P
I
,
 
J
a
v
a
,
 
M
a
v
e
n
,
 
T
r
a
v
i
s
C
I
,
 
G
i
t
}
{
\
\
h
r
e
f
{
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
j
a
k
e
/
s
i
m
p
l
e
-
p
a
i
n
t
b
a
l
l
}
{
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
j
a
k
e
/
s
i
m
p
l
e
-
p
a
i
n
t
b
a
l
l
}
}
{
M
a
y
 
2
0
2
0
 
-
-
 
J
u
l
 
2
0
2
0
}


 
 
\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
]


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
D
e
v
e
l
o
p
e
d
 
a
 
M
i
n
e
c
r
a
f
t
 
s
e
r
v
e
r
 
p
l
u
g
i
n
 
t
o
 
e
n
t
e
r
t
a
i
n
 
k
i
d
s
 
u
s
i
n
g
 
g
a
m
e
 
d
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
 
e
x
t
r
a
c
t
 
d
e
s
i
g
n
}


 
 
 
 
\
\
r
e
s
u
m
e
I
t
e
m
{
P
u
b
l
i
s
h
e
d
 
p
l
u
g
i
n
 
t
o
 
w
e
b
s
i
t
e
s
 
g
a
i
n
i
n
g
 
2
K
+
 
d
o
w
n
l
o
a
d
s
 
a
n
d
 
a
 
4
.
5
/
5
-
s
t
a
r
 
r
e
v
i
e
w
}


 
 
\
\
e
n
d
{
i
t
e
m
i
z
e
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
T
e
c
h
n
i
c
a
l
 
S
k
i
l
l
s
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
0
p
t
,
 
l
a
b
e
l
=
{
}
,
 
n
o
s
e
p
]


 
 
\
\
i
t
e
m
 
\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
J
a
v
a
,
 
P
y
t
h
o
n
,
 
C
/
C
+
+
,
 
S
Q
L
,
 
J
a
v
a
S
c
r
i
p
t
,
 
H
T
M
L
/
C
S
S
,
 
R
 
\
\
\
\


 
 
\
\
t
e
x
t
b
f
{
F
r
a
m
e
w
o
r
k
s
:
}
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
F
l
a
s
k
,
 
J
U
n
i
t
,
 
W
o
r
d
P
r
e
s
s
,
 
M
a
t
e
r
i
a
l
-
U
I
,
 
F
a
s
t
A
P
I
 
\
\
\
\


 
 
\
\
t
e
x
t
b
f
{
D
e
v
e
l
o
p
e
r
 
T
o
o
l
s
:
}
 
G
i
t
,
 
D
o
c
k
e
r
,
 
T
r
a
v
i
s
C
I
,
 
G
o
o
g
l
e
 
C
l
o
u
d
 
P
l
a
t
f
o
r
m
,
 
V
S
 
C
o
d
e
,
 
I
n
t
e
l
l
i
J
 
\
\
\
\


 
 
\
\
t
e
x
t
b
f
{
L
i
b
r
a
r
i
e
s
:
}
 
p
a
n
d
a
s
,
 
N
u
m
P
y
,
 
M
a
t
p
l
o
t
l
i
b


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
1
0
.
 
S
i
d
e
b
a
r
 
I
n
f
o
g
r
a
p
h
i
c
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
s
i
d
e
b
a
r
-
i
n
f
o
g
r
a
p
h
i
c
"
,


 
 
 
 
n
a
m
e
:
 
"
S
i
d
e
b
a
r
 
I
n
f
o
g
r
a
p
h
i
c
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
M
o
d
e
r
n
 
t
w
o
-
c
o
l
u
m
n
 
w
i
t
h
 
a
 
c
o
l
o
r
e
d
 
l
e
f
t
 
s
i
d
e
b
a
r
 
p
a
n
e
l
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
c
r
e
a
t
i
v
e
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
o
d
e
r
n
"
,
 
"
s
i
d
e
b
a
r
"
,
 
"
c
o
l
o
r
f
u
l
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
┌
─
─
─
─
─
─
─
─
─
─
┬
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┐
"
,


 
 
 
 
 
 
"
│
 
C
O
N
T
A
C
T
 
 
│
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│
"
,


 
 
 
 
 
 
"
│
 
e
m
a
i
l
 
 
 
 
│
 
 
L
I
S
A
 
M
A
R
T
I
N
E
Z
 
 
 
 
│
"
,


 
 
 
 
 
 
"
│
 
p
h
o
n
e
 
 
 
 
│
 
 
U
X
 
D
e
s
i
g
n
e
r
 
 
 
 
 
 
│
"
,


 
 
 
 
 
 
"
│
 
 
 
 
 
 
 
 
 
 
│
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│
"
,


 
 
 
 
 
 
"
│
 
S
K
I
L
L
S
 
 
 
│
 
 
E
x
p
e
r
i
e
n
c
e
 
 
 
 
 
 
 
│
"
,


 
 
 
 
 
 
"
│
 
F
i
g
m
a
 
 
 
 
│
 
 
A
i
r
b
n
b
,
 
2
0
2
2
-
n
o
w
 
│
"
,


 
 
 
 
 
 
"
└
─
─
─
─
─
─
─
─
─
─
┴
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
┘
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
p
t
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
k
z
}


\
\
u
s
e
p
a
c
k
a
g
e
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
{
f
o
n
t
e
n
c
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
i
d
e
b
a
r
}
{
H
T
M
L
}
{
1
E
2
9
3
B
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
i
d
e
t
e
x
t
}
{
H
T
M
L
}
{
C
B
D
5
E
1
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
i
d
e
h
e
a
d
i
n
g
}
{
H
T
M
L
}
{
F
F
F
F
F
F
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
6
3
6
6
F
1
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
m
a
i
n
b
g
}
{
H
T
M
L
}
{
F
F
F
F
F
F
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
{
H
T
M
L
}
{
3
3
4
1
5
5
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
h
e
a
d
i
n
g
}
{
H
T
M
L
}
{
0
F
1
7
2
A
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
n
o
i
n
d
e
n
t


\
\
b
e
g
i
n
{
t
i
k
z
p
i
c
t
u
r
e
}
[
r
e
m
e
m
b
e
r
 
p
i
c
t
u
r
e
,
 
o
v
e
r
l
a
y
]


 
 
\
\
f
i
l
l
[
s
i
d
e
b
a
r
]
 
(
c
u
r
r
e
n
t
 
p
a
g
e
.
n
o
r
t
h
 
w
e
s
t
)
 
r
e
c
t
a
n
g
l
e
 
(
[
x
s
h
i
f
t
=
6
.
2
c
m
]
c
u
r
r
e
n
t
 
p
a
g
e
.
s
o
u
t
h
 
w
e
s
t
)
;


\
\
e
n
d
{
t
i
k
z
p
i
c
t
u
r
e
}




\
\
n
o
i
n
d
e
n
t


\
\
b
e
g
i
n
{
m
i
n
i
p
a
g
e
}
[
t
]
{
5
.
6
c
m
}


\
\
v
s
p
a
c
e
{
1
2
p
t
}


\
\
h
s
p
a
c
e
{
1
0
p
t
}
\
\
b
e
g
i
n
{
m
i
n
i
p
a
g
e
}
[
t
]
{
4
.
8
c
m
}


\
\
r
a
g
g
e
d
r
i
g
h
t




{
\
\
c
o
l
o
r
{
s
i
d
e
h
e
a
d
i
n
g
}
\
\
L
A
R
G
E
\
\
b
f
s
e
r
i
e
s
 
L
i
s
a
 
M
a
r
t
i
n
e
z
}




\
\
v
s
p
a
c
e
{
4
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
n
o
r
m
a
l
s
i
z
e
 
U
X
 
D
e
s
i
g
n
e
r
}




\
\
v
s
p
a
c
e
{
1
6
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
 
C
O
N
T
A
C
T
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
c
o
l
o
r
{
s
i
d
e
t
e
x
t
}
\
\
s
m
a
l
l


l
i
s
a
.
m
a
r
t
i
n
e
z
@
e
m
a
i
l
.
c
o
m
 
\
\
\
\
[
2
p
t
]


+
1
 
(
4
1
5
)
 
5
5
5
-
3
8
4
7
 
\
\
\
\
[
2
p
t
]


S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
 
\
\
\
\
[
2
p
t
]


l
i
s
a
d
e
s
i
g
n
s
.
c
o
m


}




\
\
v
s
p
a
c
e
{
1
6
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
 
S
K
I
L
L
S
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
c
o
l
o
r
{
s
i
d
e
t
e
x
t
}
\
\
s
m
a
l
l


F
i
g
m
a
 
\
\
&
 
S
k
e
t
c
h
 
\
\
\
\
[
2
p
t
]


A
d
o
b
e
 
C
r
e
a
t
i
v
e
 
S
u
i
t
e
 
\
\
\
\
[
2
p
t
]


P
r
o
t
o
t
y
p
i
n
g
 
\
\
&
 
W
i
r
e
f
r
a
m
i
n
g
 
\
\
\
\
[
2
p
t
]


U
s
e
r
 
R
e
s
e
a
r
c
h
 
\
\
\
\
[
2
p
t
]


D
e
s
i
g
n
 
S
y
s
t
e
m
s
 
\
\
\
\
[
2
p
t
]


H
T
M
L
 
/
 
C
S
S
 
/
 
J
S
 
\
\
\
\
[
2
p
t
]


R
e
a
c
t
 
B
a
s
i
c
s
 
\
\
\
\
[
2
p
t
]


A
c
c
e
s
s
i
b
i
l
i
t
y
 
(
W
C
A
G
)


}




\
\
v
s
p
a
c
e
{
1
6
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
 
E
D
U
C
A
T
I
O
N
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
c
o
l
o
r
{
s
i
d
e
h
e
a
d
i
n
g
}
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
 
B
.
F
.
A
.
 
I
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
 
D
e
s
i
g
n
}




\
\
v
s
p
a
c
e
{
2
p
t
}


{
\
\
c
o
l
o
r
{
s
i
d
e
t
e
x
t
}
\
\
s
m
a
l
l


C
a
l
i
f
o
r
n
i
a
 
C
o
l
l
e
g
e
 
o
f
 
t
h
e
 
A
r
t
s
 
\
\
\
\


2
0
1
4
 
-
-
 
2
0
1
8


}




\
\
v
s
p
a
c
e
{
1
6
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
 
A
W
A
R
D
S
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
c
o
l
o
r
{
s
i
d
e
t
e
x
t
}
\
\
s
m
a
l
l


W
e
b
b
y
 
A
w
a
r
d
 
H
o
n
o
r
e
e
,
 
2
0
2
3
 
\
\
\
\
[
2
p
t
]


I
n
V
i
s
i
o
n
 
D
e
s
i
g
n
 
F
o
r
w
a
r
d
,
 
2
0
2
2


}




\
\
e
n
d
{
m
i
n
i
p
a
g
e
}


\
\
e
n
d
{
m
i
n
i
p
a
g
e
}
%


\
\
h
s
p
a
c
e
{
1
2
p
t
}
%


\
\
b
e
g
i
n
{
m
i
n
i
p
a
g
e
}
[
t
]
{
1
2
.
2
c
m
}


\
\
v
s
p
a
c
e
{
1
4
p
t
}


\
\
r
a
g
g
e
d
r
i
g
h
t




{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
\
\
u
p
p
e
r
c
a
s
e
{
A
b
o
u
t
}
}




\
\
v
s
p
a
c
e
{
2
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
r
u
l
e
{
3
c
m
}
{
2
p
t
}
}




\
\
v
s
p
a
c
e
{
6
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l


U
X
 
d
e
s
i
g
n
e
r
 
w
i
t
h
 
6
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
c
r
a
f
t
i
n
g
 
i
n
t
u
i
t
i
v
e
 
d
i
g
i
t
a
l
 
p
r
o
d
u
c
t
s
.
 
P
a
s
s
i
o
n
a
t
e
 
a
b
o
u
t
 
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
 
d
e
s
i
g
n
,
 
u
s
e
r
 
r
e
s
e
a
r
c
h
,
 
a
n
d
 
b
u
i
l
d
i
n
g
 
s
c
a
l
a
b
l
e
 
d
e
s
i
g
n
 
s
y
s
t
e
m
s
.


}




\
\
v
s
p
a
c
e
{
1
4
p
t
}


{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
\
\
u
p
p
e
r
c
a
s
e
{
E
x
p
e
r
i
e
n
c
e
}
}




\
\
v
s
p
a
c
e
{
2
p
t
}


{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
r
u
l
e
{
3
c
m
}
{
2
p
t
}
}




\
\
v
s
p
a
c
e
{
8
p
t
}


{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
b
f
s
e
r
i
e
s
 
S
e
n
i
o
r
 
U
X
 
D
e
s
i
g
n
e
r
}
 
\
\
h
f
i
l
l
 
{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
 
A
i
r
b
n
b
}




\
\
v
s
p
a
c
e
{
1
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
M
a
r
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
}
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
0
p
t
]


 
 
\
\
i
t
e
m
 
R
e
d
e
s
i
g
n
e
d
 
g
u
e
s
t
 
b
o
o
k
i
n
g
 
f
l
o
w
 
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
 
c
o
n
v
e
r
s
i
o
n
 
b
y
 
2
2
\
\
%


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
a
n
d
 
m
a
i
n
t
a
i
n
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
 
l
i
b
r
a
r
y
 
w
i
t
h
 
1
2
0
+
 
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


 
 
\
\
i
t
e
m
 
L
e
d
 
u
s
e
r
 
r
e
s
e
a
r
c
h
 
s
e
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
 
5
0
+
 
p
a
r
t
i
c
i
p
a
n
t
s
 
a
c
r
o
s
s
 
4
 
c
o
u
n
t
r
i
e
s


 
 
\
\
i
t
e
m
 
M
e
n
t
o
r
e
d
 
3
 
j
u
n
i
o
r
 
d
e
s
i
g
n
e
r
s
 
t
h
r
o
u
g
h
 
A
i
r
b
n
b
'
s
 
d
e
s
i
g
n
 
f
e
l
l
o
w
s
h
i
p


\
\
e
n
d
{
i
t
e
m
i
z
e
}


}




\
\
v
s
p
a
c
e
{
1
0
p
t
}


{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
b
f
s
e
r
i
e
s
 
U
X
 
D
e
s
i
g
n
e
r
}
 
\
\
h
f
i
l
l
 
{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
 
D
r
o
p
b
o
x
}




\
\
v
s
p
a
c
e
{
1
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
1
9
 
-
-
 
F
e
b
 
2
0
2
2
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
}
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
0
p
t
]


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
c
o
l
l
a
b
o
r
a
t
i
v
e
 
e
d
i
t
i
n
g
 
f
e
a
t
u
r
e
s
 
u
s
e
d
 
b
y
 
7
0
0
M
+
 
u
s
e
r
s


 
 
\
\
i
t
e
m
 
C
r
e
a
t
e
d
 
D
r
o
p
b
o
x
 
P
a
p
e
r
 
d
e
s
i
g
n
 
s
y
s
t
e
m
 
r
e
d
u
c
i
n
g
 
d
e
v
 
h
a
n
d
o
f
f
 
t
i
m
e
 
b
y
 
4
0
\
\
%


 
 
\
\
i
t
e
m
 
C
o
n
d
u
c
t
e
d
 
A
/
B
 
t
e
s
t
s
 
o
n
 
f
i
l
e
 
s
h
a
r
i
n
g
 
w
o
r
k
f
l
o
w
s
 
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
 
e
n
g
a
g
e
m
e
n
t
 
b
y
 
1
5
\
\
%


\
\
e
n
d
{
i
t
e
m
i
z
e
}


}




\
\
v
s
p
a
c
e
{
1
0
p
t
}


{
\
\
c
o
l
o
r
{
h
e
a
d
i
n
g
}
\
\
b
f
s
e
r
i
e
s
 
J
u
n
i
o
r
 
U
X
 
D
e
s
i
g
n
e
r
}
 
\
\
h
f
i
l
l
 
{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
 
I
D
E
O
}




\
\
v
s
p
a
c
e
{
1
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l
\
\
t
e
x
t
i
t
{
J
u
l
 
2
0
1
8
 
-
-
 
M
a
y
 
2
0
1
9
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
}
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
c
o
l
o
r
{
b
o
d
y
t
e
x
t
}
\
\
s
m
a
l
l


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
0
p
t
]


 
 
\
\
i
t
e
m
 
C
o
n
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
 
c
l
i
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
 
f
o
r
 
F
o
r
d
,
 
N
i
k
e
,
 
a
n
d
 
t
h
e
 
G
a
t
e
s
 
F
o
u
n
d
a
t
i
o
n


 
 
\
\
i
t
e
m
 
C
r
e
a
t
e
d
 
w
i
r
e
f
r
a
m
e
s
 
a
n
d
 
p
r
o
t
o
t
y
p
e
s
 
f
o
r
 
5
+
 
h
u
m
a
n
-
c
e
n
t
e
r
e
d
 
d
e
s
i
g
n
 
s
p
r
i
n
t
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}


}




\
\
e
n
d
{
m
i
n
i
p
a
g
e
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
1
1
.
 
C
l
a
s
s
i
c
 
S
e
r
i
f
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
c
l
a
s
s
i
c
-
s
e
r
i
f
"
,


 
 
 
 
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
 
S
e
r
i
f
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
T
r
a
d
i
t
i
o
n
a
l
 
T
i
m
e
s
-
s
t
y
l
e
 
r
e
s
u
m
e
,
 
f
o
r
m
a
l
,
 
t
i
m
e
l
e
s
s
,
 
A
T
S
-
s
a
f
e
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
,


 
 
 
 
t
a
g
s
:
 
[
"
t
r
a
d
i
t
i
o
n
a
l
"
,
 
"
s
e
r
i
f
"
,
 
"
A
T
S
-
f
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


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
R
O
B
E
R
T
 
J
.
 
W
I
L
L
I
A
M
S
"
,


 
 
 
 
 
 
"
1
2
3
4
 
M
a
i
n
 
S
t
r
e
e
t
,
 
C
h
i
c
a
g
o
,
 
I
L
 
6
0
6
0
1
"
,


 
 
 
 
 
 
"
(
3
1
2
)
 
5
5
5
-
9
8
7
6
 
|
 
r
o
b
e
r
t
.
w
i
l
l
i
a
m
s
@
e
m
a
i
l
.
c
o
m
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
P
R
O
F
E
S
S
I
O
N
A
L
 
E
X
P
E
R
I
E
N
C
E
"
,


 
 
 
 
 
 
"
S
e
n
i
o
r
 
A
c
c
o
u
n
t
a
n
t
,
 
D
e
l
o
i
t
t
e
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
E
D
U
C
A
T
I
O
N
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
l
e
t
t
e
r
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
7
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
[
h
i
d
e
l
i
n
k
s
]
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
r
e
n
e
w
c
o
m
m
a
n
d
{
\
\
f
a
m
i
l
y
d
e
f
a
u
l
t
}
{
\
\
r
m
d
e
f
a
u
l
t
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
s
c
s
h
a
p
e
}
{
}
{
0
e
m
}
{
\
\
M
a
k
e
U
p
p
e
r
c
a
s
e
}
[
\
\
v
s
p
a
c
e
{
1
p
t
}
\
\
h
r
u
l
e
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
0
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
a
r
g
e
\
\
t
e
x
t
b
f
{
R
o
b
e
r
t
 
J
.
 
W
i
l
l
i
a
m
s
}
}
 
\
\
\
\
[
4
p
t
]


 
 
{
\
\
s
m
a
l
l
 
1
2
3
4
 
M
a
i
n
 
S
t
r
e
e
t
,
 
C
h
i
c
a
g
o
,
 
I
L
 
6
0
6
0
1
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
 
(
3
1
2
)
 
5
5
5
-
9
8
7
6
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
r
o
b
e
r
t
.
w
i
l
l
i
a
m
s
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
r
j
w
i
l
l
i
a
m
s
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
r
j
w
i
l
l
i
a
m
s
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
f
e
s
s
i
o
n
a
l
 
S
u
m
m
a
r
y
}




C
e
r
t
i
f
i
e
d
 
P
u
b
l
i
c
 
A
c
c
o
u
n
t
a
n
t
 
w
i
t
h
 
8
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
i
n
 
a
u
d
i
t
,
 
t
a
x
 
c
o
m
p
l
i
a
n
c
e
,
 
a
n
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
 
r
e
p
o
r
t
i
n
g
 
f
o
r
 
F
o
r
t
u
n
e
 
5
0
0
 
c
l
i
e
n
t
s
.
 
S
t
r
o
n
g
 
a
n
a
l
y
t
i
c
a
l
 
s
k
i
l
l
s
 
w
i
t
h
 
e
x
p
e
r
t
i
s
e
 
i
n
 
G
A
A
P
,
 
S
O
X
 
c
o
m
p
l
i
a
n
c
e
,
 
a
n
d
 
E
R
P
 
s
y
s
t
e
m
s
.
 
P
r
o
v
e
n
 
a
b
i
l
i
t
y
 
t
o
 
m
a
n
a
g
e
 
c
r
o
s
s
-
f
u
n
c
t
i
o
n
a
l
 
t
e
a
m
s
 
a
n
d
 
d
e
l
i
v
e
r
 
h
i
g
h
-
q
u
a
l
i
t
y
 
r
e
s
u
l
t
s
 
u
n
d
e
r
 
t
i
g
h
t
 
d
e
a
d
l
i
n
e
s
.




\
\
s
e
c
t
i
o
n
*
{
P
r
o
f
e
s
s
i
o
n
a
l
 
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
A
u
d
i
t
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
D
e
l
o
i
t
t
e
 
L
L
P
,
 
C
h
i
c
a
g
o
,
 
I
L
 
\
\
\
\


\
\
t
e
x
t
i
t
{
S
e
p
t
e
m
b
e
r
 
2
0
2
1
 
-
-
 
P
r
e
s
e
n
t
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
 
a
u
d
i
t
 
e
n
g
a
g
e
m
e
n
t
s
 
f
o
r
 
8
 
p
u
b
l
i
c
 
c
o
m
p
a
n
y
 
c
l
i
e
n
t
s
 
w
i
t
h
 
c
o
m
b
i
n
e
d
 
r
e
v
e
n
u
e
 
e
x
c
e
e
d
i
n
g
 
\
\
$
1
2
B


 
 
\
\
i
t
e
m
 
S
u
p
e
r
v
i
s
e
 
t
e
a
m
 
o
f
 
1
2
 
a
u
d
i
t
o
r
s
 
a
c
r
o
s
s
 
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
c
u
r
r
e
n
t
 
e
n
g
a
g
e
m
e
n
t
s


 
 
\
\
i
t
e
m
 
I
d
e
n
t
i
f
i
e
d
 
m
a
t
e
r
i
a
l
 
m
i
s
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
 
s
a
v
i
n
g
 
c
l
i
e
n
t
s
 
\
\
$
3
.
2
M
 
i
n
 
p
o
t
e
n
t
i
a
l
 
r
e
g
u
l
a
t
o
r
y
 
p
e
n
a
l
t
i
e
s


 
 
\
\
i
t
e
m
 
D
e
v
e
l
o
p
e
d
 
s
t
a
n
d
a
r
d
i
z
e
d
 
a
u
d
i
t
 
p
r
o
c
e
d
u
r
e
s
 
a
d
o
p
t
e
d
 
f
i
r
m
-
w
i
d
e
 
a
c
r
o
s
s
 
6
 
r
e
g
i
o
n
a
l
 
o
f
f
i
c
e
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
A
u
d
i
t
 
S
e
n
i
o
r
 
A
s
s
o
c
i
a
t
e
}
 
\
\
h
f
i
l
l
 
P
r
i
c
e
w
a
t
e
r
h
o
u
s
e
C
o
o
p
e
r
s
,
 
C
h
i
c
a
g
o
,
 
I
L
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
u
n
e
 
2
0
1
8
 
-
-
 
A
u
g
u
s
t
 
2
0
2
1
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
L
e
d
 
S
O
X
 
c
o
m
p
l
i
a
n
c
e
 
t
e
s
t
i
n
g
 
f
o
r
 
f
i
n
a
n
c
i
a
l
 
s
e
r
v
i
c
e
s
 
c
l
i
e
n
t
s


 
 
\
\
i
t
e
m
 
P
e
r
f
o
r
m
e
d
 
s
u
b
s
t
a
n
t
i
v
e
 
t
e
s
t
i
n
g
 
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
a
l
 
p
r
o
c
e
d
u
r
e
s
 
f
o
r
 
r
e
v
e
n
u
e
 
a
n
d
 
e
x
p
e
n
s
e
 
a
c
c
o
u
n
t
s


 
 
\
\
i
t
e
m
 
T
r
a
i
n
e
d
 
a
n
d
 
s
u
p
e
r
v
i
s
e
d
 
4
 
s
t
a
f
f
 
a
s
s
o
c
i
a
t
e
s
 
d
u
r
i
n
g
 
b
u
s
y
 
s
e
a
s
o
n
 
e
n
g
a
g
e
m
e
n
t
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
S
t
a
f
f
 
A
u
d
i
t
o
r
}
 
\
\
h
f
i
l
l
 
K
P
M
G
 
L
L
P
,
 
C
h
i
c
a
g
o
,
 
I
L
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
u
l
y
 
2
0
1
6
 
-
-
 
M
a
y
 
2
0
1
8
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
E
x
e
c
u
t
e
d
 
a
u
d
i
t
 
f
i
e
l
d
w
o
r
k
 
f
o
r
 
m
a
n
u
f
a
c
t
u
r
i
n
g
 
a
n
d
 
r
e
t
a
i
l
 
i
n
d
u
s
t
r
y
 
c
l
i
e
n
t
s


 
 
\
\
i
t
e
m
 
P
r
e
p
a
r
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
 
s
t
a
t
e
m
e
n
t
 
w
o
r
k
p
a
p
e
r
s
 
a
n
d
 
a
u
d
i
t
 
d
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


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
M
a
s
t
e
r
 
o
f
 
A
c
c
o
u
n
t
a
n
c
y
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
I
l
l
i
n
o
i
s
 
a
t
 
U
r
b
a
n
a
-
C
h
a
m
p
a
i
g
n
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
5
 
-
-
 
2
0
1
6
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
9
/
4
.
0




\
\
v
s
p
a
c
e
{
4
p
t
}


\
\
t
e
x
t
b
f
{
B
.
S
.
 
A
c
c
o
u
n
t
i
n
g
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
I
l
l
i
n
o
i
s
 
a
t
 
U
r
b
a
n
a
-
C
h
a
m
p
a
i
g
n
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
2
 
-
-
 
2
0
1
6
}
 
\
\
h
f
i
l
l
 
M
a
g
n
a
 
C
u
m
 
L
a
u
d
e




\
\
s
e
c
t
i
o
n
*
{
C
e
r
t
i
f
i
c
a
t
i
o
n
s
 
\
\
&
 
S
k
i
l
l
s
}




\
\
t
e
x
t
b
f
{
C
e
r
t
i
f
i
c
a
t
i
o
n
s
:
}
 
C
P
A
 
(
I
l
l
i
n
o
i
s
)
,
 
C
I
A
 
\
\
\
\


\
\
t
e
x
t
b
f
{
S
o
f
t
w
a
r
e
:
}
 
S
A
P
,
 
O
r
a
c
l
e
 
E
R
P
,
 
E
x
c
e
l
 
(
A
d
v
a
n
c
e
d
)
,
 
T
a
b
l
e
a
u
,
 
A
l
t
e
r
y
x
,
 
B
l
o
o
m
b
e
r
g
 
\
\
\
\


\
\
t
e
x
t
b
f
{
S
k
i
l
l
s
:
}
 
G
A
A
P
,
 
I
F
R
S
,
 
S
O
X
 
C
o
m
p
l
i
a
n
c
e
,
 
I
n
t
e
r
n
a
l
 
C
o
n
t
r
o
l
s
,
 
D
a
t
a
 
A
n
a
l
y
t
i
c
s




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
1
2
.
 
C
o
m
p
a
c
t
 
T
e
c
h
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
c
o
m
p
a
c
t
-
t
e
c
h
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
p
a
c
t
 
T
e
c
h
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
l
t
r
a
-
d
e
n
s
e
 
s
i
n
g
l
e
-
p
a
g
e
 
l
a
y
o
u
t
,
 
f
i
t
s
 
m
a
x
i
m
u
m
 
c
o
n
t
e
n
t
 
f
o
r
 
t
e
c
h
 
r
o
l
e
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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
a
g
s
:
 
[
"
c
o
m
p
a
c
t
"
,
 
"
d
e
n
s
e
"
,
 
"
s
i
n
g
l
e
-
p
a
g
e
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
A
N
A
N
Y
A
 
K
R
I
S
H
N
A
N
"
,


 
 
 
 
 
 
"
a
n
a
n
y
a
@
d
e
v
.
i
o
 
|
 
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
n
a
n
y
a
k
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
S
k
i
l
l
s
:
 
G
o
,
 
R
u
s
t
,
 
K
8
s
,
 
g
R
P
C
,
 
K
a
f
k
a
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
S
t
a
f
f
 
E
n
g
i
n
e
e
r
,
 
C
l
o
u
d
f
l
a
r
e
"
,


 
 
 
 
 
 
"
P
r
i
n
c
i
p
a
l
 
E
n
g
i
n
e
e
r
,
 
V
e
r
c
e
l
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
9
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
l
e
f
t
=
0
.
4
i
n
,
r
i
g
h
t
=
0
.
4
i
n
,
t
o
p
=
0
.
3
5
i
n
,
b
o
t
t
o
m
=
0
.
3
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
[
h
i
d
e
l
i
n
k
s
]
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
r
u
l
e
}
{
H
T
M
L
}
{
3
B
8
2
F
6
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
s
u
b
}
{
H
T
M
L
}
{
6
B
7
2
8
0
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
s
m
a
l
l
\
\
b
f
s
e
r
i
e
s
\
\
u
p
p
e
r
c
a
s
e
}
{
}
{
0
e
m
}
{
}
[
\
\
v
s
p
a
c
e
{
0
p
t
}
{
\
\
c
o
l
o
r
{
r
u
l
e
}
\
\
r
u
l
e
{
\
\
l
i
n
e
w
i
d
t
h
}
{
0
.
8
p
t
}
}
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
6
p
t
}
{
3
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
a
r
g
e
\
\
t
e
x
t
b
f
{
A
n
a
n
y
a
 
K
r
i
s
h
n
a
n
}
}
 
\
\
\
\
[
3
p
t
]


 
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
a
n
a
n
y
a
@
d
e
v
.
i
o
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
+
1
 
(
2
0
6
)
 
5
5
5
-
1
1
9
9
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
S
e
a
t
t
l
e
,
 
W
A
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
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
n
a
n
y
a
k
}
{
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
n
a
n
y
a
k
}
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
a
n
a
n
y
a
k
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
a
n
a
n
y
a
k
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
T
e
c
h
n
i
c
a
l
 
S
k
i
l
l
s
}


{
\
\
f
o
o
t
n
o
t
e
s
i
z
e


\
\
t
e
x
t
b
f
{
L
a
n
g
u
a
g
e
s
:
}
 
G
o
,
 
R
u
s
t
,
 
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
,
 
P
y
t
h
o
n
,
 
C
+
+
 
\
\
q
u
a
d


\
\
t
e
x
t
b
f
{
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
:
}
 
K
u
b
e
r
n
e
t
e
s
,
 
T
e
r
r
a
f
o
r
m
,
 
H
e
l
m
,
 
P
r
o
m
e
t
h
e
u
s
,
 
G
r
a
f
a
n
a
 
\
\
\
\


\
\
t
e
x
t
b
f
{
B
a
c
k
e
n
d
:
}
 
g
R
P
C
,
 
K
a
f
k
a
,
 
R
e
d
i
s
,
 
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
,
 
D
y
n
a
m
o
D
B
,
 
E
l
a
s
t
i
c
s
e
a
r
c
h
 
\
\
q
u
a
d


\
\
t
e
x
t
b
f
{
C
l
o
u
d
:
}
 
A
W
S
,
 
G
C
P
,
 
C
l
o
u
d
f
l
a
r
e
 
W
o
r
k
e
r
s


}




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}




{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
S
t
a
f
f
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
C
l
o
u
d
f
l
a
r
e
,
 
A
u
s
t
i
n
 
T
X
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
A
p
r
 
2
0
2
3
 
-
-
 
P
r
e
s
e
n
t
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
0
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
1
p
t
]


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
A
r
c
h
i
t
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
o
m
p
u
t
i
n
g
 
p
l
a
t
f
o
r
m
 
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
 
4
5
M
 
r
e
q
u
e
s
t
s
/
s
e
c
 
a
c
r
o
s
s
 
3
0
0
+
 
d
a
t
a
 
c
e
n
t
e
r
s
 
w
o
r
l
d
w
i
d
e
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
D
e
s
i
g
n
e
d
 
z
e
r
o
-
d
o
w
n
t
i
m
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
 
s
y
s
t
e
m
 
f
o
r
 
W
o
r
k
e
r
s
 
r
u
n
t
i
m
e
 
r
e
d
u
c
i
n
g
 
r
o
l
l
o
u
t
 
f
a
i
l
u
r
e
s
 
b
y
 
9
4
\
\
%
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
L
e
d
 
8
-
p
e
r
s
o
n
 
t
e
a
m
 
b
u
i
l
d
i
n
g
 
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
 
K
V
 
s
t
o
r
e
 
w
i
t
h
 
s
u
b
-
m
i
l
l
i
s
e
c
o
n
d
 
P
9
9
 
r
e
a
d
 
l
a
t
e
n
c
y
 
g
l
o
b
a
l
l
y
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
A
u
t
h
o
r
e
d
 
1
2
 
R
F
C
s
 
a
d
o
p
t
e
d
 
b
y
 
e
n
g
i
n
e
e
r
i
n
g
 
o
r
g
;
 
m
e
n
t
o
r
e
d
 
5
 
s
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
 
t
o
 
s
t
a
f
f
-
l
e
v
e
l
 
p
r
o
m
o
t
i
o
n
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
P
r
i
n
c
i
p
a
l
 
E
n
g
i
n
e
e
r
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
V
e
r
c
e
l
,
 
R
e
m
o
t
e
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
J
a
n
 
2
0
2
1
 
-
-
 
M
a
r
 
2
0
2
3
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
0
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
1
p
t
]


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
B
u
i
l
t
 
s
e
r
v
e
r
l
e
s
s
 
f
u
n
c
t
i
o
n
 
r
u
n
t
i
m
e
 
s
e
r
v
i
n
g
 
8
B
+
 
i
n
v
o
c
a
t
i
o
n
s
/
m
o
n
t
h
 
w
i
t
h
 
9
9
.
9
9
\
\
%
 
u
p
t
i
m
e
 
S
L
A
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
O
p
t
i
m
i
z
e
d
 
c
o
l
d
 
s
t
a
r
t
 
t
i
m
e
s
 
b
y
 
6
5
\
\
%
 
t
h
r
o
u
g
h
 
V
8
 
i
s
o
l
a
t
e
 
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
 
s
n
a
p
s
h
o
t
 
p
r
e
l
o
a
d
i
n
g
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
D
e
s
i
g
n
e
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
a
l
 
s
t
a
t
i
c
 
r
e
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
 
(
I
S
R
)
 
b
a
c
k
e
n
d
 
h
a
n
d
l
i
n
g
 
2
M
+
 
p
a
g
e
 
r
e
b
u
i
l
d
s
 
d
a
i
l
y
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
S
t
r
i
p
e
,
 
S
e
a
t
t
l
e
 
W
A
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
J
u
n
 
2
0
1
8
 
-
-
 
D
e
c
 
2
0
2
0
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
0
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
1
p
t
]


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
D
e
v
e
l
o
p
e
d
 
f
r
a
u
d
 
d
e
t
e
c
t
i
o
n
 
p
i
p
e
l
i
n
e
 
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
 
5
0
0
K
+
 
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
/
m
i
n
 
w
i
t
h
 
9
9
.
9
7
\
\
%
 
a
c
c
u
r
a
c
y
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
B
u
i
l
t
 
i
d
e
m
p
o
t
e
n
c
y
 
l
a
y
e
r
 
f
o
r
 
P
a
y
m
e
n
t
s
 
A
P
I
 
e
l
i
m
i
n
a
t
i
n
g
 
d
u
p
l
i
c
a
t
e
 
c
h
a
r
g
e
s
 
a
c
r
o
s
s
 
r
e
t
r
y
 
s
t
o
r
m
s
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
M
i
g
r
a
t
e
d
 
m
o
n
o
l
i
t
h
i
c
 
R
u
b
y
 
s
e
r
v
i
c
e
 
t
o
 
G
o
 
m
i
c
r
o
s
e
r
v
i
c
e
s
 
r
e
d
u
c
i
n
g
 
P
9
9
 
l
a
t
e
n
c
y
 
f
r
o
m
 
8
0
0
m
s
 
t
o
 
4
5
m
s
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
3
p
t
}


{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
S
o
f
t
w
a
r
e
 
E
n
g
i
n
e
e
r
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
A
m
a
z
o
n
,
 
S
e
a
t
t
l
e
 
W
A
 
\
\
e
n
s
p
a
c
e
 
$
\
\
v
e
r
t
$
 
\
\
e
n
s
p
a
c
e
 
J
u
l
 
2
0
1
6
 
-
-
 
M
a
y
 
2
0
1
8
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
0
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
1
p
t
]


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
B
u
i
l
t
 
i
n
v
e
n
t
o
r
y
 
f
o
r
e
c
a
s
t
i
n
g
 
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
c
e
s
s
i
n
g
 
1
0
0
M
+
 
S
K
U
 
u
p
d
a
t
e
s
 
d
a
i
l
y
 
f
o
r
 
A
m
a
z
o
n
 
F
u
l
f
i
l
l
m
e
n
t
}


 
 
\
\
i
t
e
m
[
\
\
t
e
x
t
b
u
l
l
e
t
]
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
R
e
d
u
c
e
d
 
w
a
r
e
h
o
u
s
e
 
m
i
s
r
o
u
t
i
n
g
 
b
y
 
1
8
\
\
%
 
t
h
r
o
u
g
h
 
M
L
-
b
a
s
e
d
 
r
o
u
t
i
n
g
 
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
}


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
j
e
c
t
s
}




{
\
\
f
o
o
t
n
o
t
e
s
i
z
e


\
\
t
e
x
t
b
f
{
E
d
g
e
D
B
}
 
-
-
 
D
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
 
d
a
t
a
b
a
s
e
 
e
n
g
i
n
e
 
i
n
 
R
u
s
t
 
o
p
t
i
m
i
z
e
d
 
f
o
r
 
e
d
g
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
s
.
 
3
.
2
K
 
G
i
t
H
u
b
 
s
t
a
r
s
.
 
F
e
a
t
u
r
e
d
 
i
n
 
R
u
s
t
 
W
e
e
k
l
y
.
 
\
\
\
\


\
\
t
e
x
t
b
f
{
K
u
b
e
F
o
r
g
e
}
 
-
-
 
K
u
b
e
r
n
e
t
e
s
 
o
p
e
r
a
t
o
r
 
f
o
r
 
z
e
r
o
-
d
o
w
n
t
i
m
e
 
d
a
t
a
b
a
s
e
 
m
i
g
r
a
t
i
o
n
s
.
 
U
s
e
d
 
b
y
 
2
0
0
+
 
c
o
m
p
a
n
i
e
s
 
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
.


}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
M
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
W
a
s
h
i
n
g
t
o
n
,
 
2
0
1
4
 
-
-
 
2
0
1
6
}


\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
\
\
c
o
l
o
r
{
s
u
b
}
 
F
o
c
u
s
:
 
D
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
 
S
y
s
t
e
m
s
}
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
t
e
x
t
b
f
{
B
.
T
e
c
h
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
}
 
\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
I
I
T
 
B
o
m
b
a
y
,
 
2
0
1
0
 
-
-
 
2
0
1
4
}


\
\
h
f
i
l
l
 
{
\
\
f
o
o
t
n
o
t
e
s
i
z
e
\
\
c
o
l
o
r
{
s
u
b
}
 
G
o
l
d
 
M
e
d
a
l
i
s
t
}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
1
3
.
 
A
T
S
 
O
p
t
i
m
i
z
e
d
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
a
t
s
-
o
p
t
i
m
i
z
e
d
"
,


 
 
 
 
n
a
m
e
:
 
"
A
T
S
 
O
p
t
i
m
i
z
e
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
M
a
x
i
m
u
m
 
A
T
S
 
c
o
m
p
a
t
i
b
i
l
i
t
y
,
 
p
l
a
i
n
,
 
p
a
r
s
e
a
b
l
e
,
 
z
e
r
o
 
f
o
r
m
a
t
t
i
n
g
 
t
r
i
c
k
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
,


 
 
 
 
t
a
g
s
:
 
[
"
A
T
S
-
f
r
i
e
n
d
l
y
"
,
 
"
p
l
a
i
n
"
,
 
"
s
a
f
e
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
M
A
R
I
A
 
G
O
N
Z
A
L
E
Z
"
,


 
 
 
 
 
 
"
m
a
r
i
a
.
g
o
n
z
a
l
e
z
@
e
m
a
i
l
.
c
o
m
 
|
 
(
5
5
5
)
 
2
3
4
-
5
6
7
8
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
S
U
M
M
A
R
Y
"
,


 
 
 
 
 
 
"
M
a
r
k
e
t
i
n
g
 
p
r
o
f
e
s
s
i
o
n
a
l
 
w
i
t
h
 
6
+
 
y
e
a
r
s
.
.
.
"
,


 
 
 
 
 
 
"
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
"
,


 
 
 
 
 
 
"
W
O
R
K
 
E
X
P
E
R
I
E
N
C
E
"
,


 
 
 
 
 
 
"
M
a
r
k
e
t
i
n
g
 
M
a
n
a
g
e
r
,
 
H
u
b
S
p
o
t
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
1
p
t
,
l
e
t
t
e
r
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
7
5
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
[
h
i
d
e
l
i
n
k
s
]
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
l
a
r
g
e
\
\
b
f
s
e
r
i
e
s
}
{
}
{
0
e
m
}
{
\
\
M
a
k
e
U
p
p
e
r
c
a
s
e
}
[
\
\
v
s
p
a
c
e
{
2
p
t
}
\
\
h
r
u
l
e
]


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
0
p
t
}
{
4
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


 
 
{
\
\
L
A
R
G
E
\
\
t
e
x
t
b
f
{
M
a
r
i
a
 
G
o
n
z
a
l
e
z
}
}
 
\
\
\
\
[
6
p
t
]


 
 
{
\
\
s
m
a
l
l
 
m
a
r
i
a
.
g
o
n
z
a
l
e
z
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
(
5
5
5
)
 
2
3
4
-
5
6
7
8
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
A
u
s
t
i
n
,
 
T
X
}
 
\
\
\
\
[
2
p
t
]


 
 
{
\
\
s
m
a
l
l
 
\
\
h
r
e
f
{
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
m
a
r
i
a
g
o
n
z
a
l
e
z
}
{
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
m
a
r
i
a
g
o
n
z
a
l
e
z
}
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
s
e
c
t
i
o
n
*
{
S
u
m
m
a
r
y
}




R
e
s
u
l
t
s
-
d
r
i
v
e
n
 
m
a
r
k
e
t
i
n
g
 
p
r
o
f
e
s
s
i
o
n
a
l
 
w
i
t
h
 
6
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
i
n
 
d
i
g
i
t
a
l
 
m
a
r
k
e
t
i
n
g
,
 
b
r
a
n
d
 
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
 
c
o
n
t
e
n
t
 
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
.
 
P
r
o
v
e
n
 
e
x
p
e
r
t
i
s
e
 
i
n
 
S
E
O
/
S
E
M
,
 
m
a
r
k
e
t
i
n
g
 
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
,
 
a
n
d
 
d
a
t
a
-
d
r
i
v
e
n
 
c
a
m
p
a
i
g
n
 
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
.
 
T
r
a
c
k
 
r
e
c
o
r
d
 
o
f
 
d
r
i
v
i
n
g
 
r
e
v
e
n
u
e
 
g
r
o
w
t
h
 
t
h
r
o
u
g
h
 
m
u
l
t
i
-
c
h
a
n
n
e
l
 
m
a
r
k
e
t
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
i
e
s
.




\
\
s
e
c
t
i
o
n
*
{
W
o
r
k
 
E
x
p
e
r
i
e
n
c
e
}




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
M
a
r
k
e
t
i
n
g
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
H
u
b
S
p
o
t
,
 
A
u
s
t
i
n
 
T
X
 
\
\
\
\


\
\
t
e
x
t
i
t
{
M
a
r
c
h
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
 
\
\
$
2
.
4
M
 
a
n
n
u
a
l
 
m
a
r
k
e
t
i
n
g
 
b
u
d
g
e
t
 
a
c
r
o
s
s
 
p
a
i
d
,
 
o
r
g
a
n
i
c
,
 
a
n
d
 
e
m
a
i
l
 
c
h
a
n
n
e
l
s


 
 
\
\
i
t
e
m
 
I
n
c
r
e
a
s
e
d
 
q
u
a
l
i
f
i
e
d
 
l
e
a
d
 
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
 
b
y
 
4
5
\
\
%
 
Y
o
Y
 
t
h
r
o
u
g
h
 
S
E
O
 
a
n
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
r
a
t
e
g
y
 
o
v
e
r
h
a
u
l


 
 
\
\
i
t
e
m
 
B
u
i
l
t
 
a
n
d
 
l
a
u
n
c
h
e
d
 
A
B
M
 
p
r
o
g
r
a
m
 
t
a
r
g
e
t
i
n
g
 
e
n
t
e
r
p
r
i
s
e
 
a
c
c
o
u
n
t
s
,
 
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
 
\
\
$
8
M
 
i
n
 
p
i
p
e
l
i
n
e


 
 
\
\
i
t
e
m
 
L
e
d
 
t
e
a
m
 
o
f
 
6
 
m
a
r
k
e
t
e
r
s
 
a
c
r
o
s
s
 
c
o
n
t
e
n
t
,
 
d
e
m
a
n
d
 
g
e
n
,
 
a
n
d
 
m
a
r
k
e
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
s


 
 
\
\
i
t
e
m
 
I
m
p
l
e
m
e
n
t
e
d
 
m
a
r
k
e
t
i
n
g
 
a
t
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
o
d
e
l
 
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
m
p
a
i
g
n
 
R
O
I
 
m
e
a
s
u
r
e
m
e
n
t
 
a
c
c
u
r
a
c
y
 
b
y
 
6
0
\
\
%


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
D
i
g
i
t
a
l
 
M
a
r
k
e
t
i
n
g
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
M
a
i
l
c
h
i
m
p
,
 
A
t
l
a
n
t
a
 
G
A
 
\
\
\
\


\
\
t
e
x
t
i
t
{
J
u
n
e
 
2
0
1
9
 
-
-
 
F
e
b
r
u
a
r
y
 
2
0
2
2
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
d
 
G
o
o
g
l
e
 
A
d
s
 
a
n
d
 
M
e
t
a
 
A
d
s
 
c
a
m
p
a
i
g
n
s
 
w
i
t
h
 
c
o
m
b
i
n
e
d
 
m
o
n
t
h
l
y
 
s
p
e
n
d
 
o
f
 
\
\
$
3
5
0
K


 
 
\
\
i
t
e
m
 
G
r
e
w
 
o
r
g
a
n
i
c
 
b
l
o
g
 
t
r
a
f
f
i
c
 
f
r
o
m
 
2
0
0
K
 
t
o
 
1
.
2
M
 
m
o
n
t
h
l
y
 
s
e
s
s
i
o
n
s
 
t
h
r
o
u
g
h
 
S
E
O
 
s
t
r
a
t
e
g
y


 
 
\
\
i
t
e
m
 
L
a
u
n
c
h
e
d
 
e
m
a
i
l
 
n
u
r
t
u
r
e
 
s
e
q
u
e
n
c
e
s
 
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
 
t
r
i
a
l
-
t
o
-
p
a
i
d
 
c
o
n
v
e
r
s
i
o
n
 
b
y
 
2
8
\
\
%


 
 
\
\
i
t
e
m
 
P
a
r
t
n
e
r
e
d
 
w
i
t
h
 
p
r
o
d
u
c
t
 
t
e
a
m
 
t
o
 
i
m
p
r
o
v
e
 
o
n
b
o
a
r
d
i
n
g
 
r
e
d
u
c
i
n
g
 
c
h
u
r
n
 
b
y
 
1
5
\
\
%


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
M
a
r
k
e
t
i
n
g
 
C
o
o
r
d
i
n
a
t
o
r
}
 
\
\
h
f
i
l
l
 
B
u
f
f
e
r
,
 
R
e
m
o
t
e
 
\
\
\
\


\
\
t
e
x
t
i
t
{
A
u
g
u
s
t
 
2
0
1
7
 
-
-
 
M
a
y
 
2
0
1
9
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
6
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
C
o
o
r
d
i
n
a
t
e
d
 
s
o
c
i
a
l
 
m
e
d
i
a
 
s
t
r
a
t
e
g
y
 
a
c
r
o
s
s
 
5
 
p
l
a
t
f
o
r
m
s
 
r
e
a
c
h
i
n
g
 
2
M
+
 
f
o
l
l
o
w
e
r
s


 
 
\
\
i
t
e
m
 
C
r
e
a
t
e
d
 
m
o
n
t
h
l
y
 
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
 
r
e
p
o
r
t
s
 
f
o
r
 
l
e
a
d
e
r
s
h
i
p
 
u
s
i
n
g
 
G
o
o
g
l
e
 
A
n
a
l
y
t
i
c
s
 
a
n
d
 
T
a
b
l
e
a
u


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
d
 
c
o
n
t
e
n
t
 
c
a
l
e
n
d
a
r
 
a
n
d
 
p
r
o
d
u
c
e
d
 
3
+
 
b
l
o
g
 
p
o
s
t
s
 
p
e
r
 
w
e
e
k


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}




\
\
t
e
x
t
b
f
{
B
.
B
.
A
.
 
M
a
r
k
e
t
i
n
g
}
 
\
\
h
f
i
l
l
 
U
n
i
v
e
r
s
i
t
y
 
o
f
 
T
e
x
a
s
 
a
t
 
A
u
s
t
i
n
 
\
\
\
\


\
\
t
e
x
t
i
t
{
2
0
1
3
 
-
-
 
2
0
1
7
}
 
\
\
h
f
i
l
l
 
G
P
A
:
 
3
.
7
/
4
.
0




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}




\
\
t
e
x
t
b
f
{
M
a
r
k
e
t
i
n
g
:
}
 
S
E
O
,
 
S
E
M
,
 
C
o
n
t
e
n
t
 
S
t
r
a
t
e
g
y
,
 
E
m
a
i
l
 
M
a
r
k
e
t
i
n
g
,
 
A
B
M
,
 
M
a
r
k
e
t
i
n
g
 
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
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
o
o
l
s
:
}
 
H
u
b
S
p
o
t
,
 
S
a
l
e
s
f
o
r
c
e
,
 
G
o
o
g
l
e
 
A
n
a
l
y
t
i
c
s
,
 
G
o
o
g
l
e
 
A
d
s
,
 
M
e
t
a
 
A
d
s
,
 
T
a
b
l
e
a
u
,
 
M
a
r
k
e
t
o
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
e
c
h
n
i
c
a
l
:
}
 
H
T
M
L
/
C
S
S
,
 
S
Q
L
,
 
A
/
B
 
T
e
s
t
i
n
g
,
 
M
a
r
k
e
t
i
n
g
 
A
t
t
r
i
b
u
t
i
o
n
,
 
C
R
M
 
M
a
n
a
g
e
m
e
n
t




\
\
s
e
c
t
i
o
n
*
{
C
e
r
t
i
f
i
c
a
t
i
o
n
s
}




G
o
o
g
l
e
 
A
n
a
l
y
t
i
c
s
 
C
e
r
t
i
f
i
e
d
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
H
u
b
S
p
o
t
 
I
n
b
o
u
n
d
 
M
a
r
k
e
t
i
n
g
 
C
e
r
t
i
f
i
e
d
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
M
e
t
a
 
B
l
u
e
p
r
i
n
t
 
C
e
r
t
i
f
i
e
d




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
,


 
 
}
,




 
 
/
/
 
─
─
 
1
4
.
 
B
o
l
d
 
H
e
a
d
e
r
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
b
o
l
d
-
h
e
a
d
e
r
"
,


 
 
 
 
n
a
m
e
:
 
"
B
o
l
d
 
H
e
a
d
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
E
y
e
-
c
a
t
c
h
i
n
g
 
l
a
r
g
e
 
n
a
m
e
 
w
i
t
h
 
c
o
l
o
r
e
d
 
a
c
c
e
n
t
 
b
a
r
 
d
i
v
i
d
e
r
s
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
c
r
e
a
t
i
v
e
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
o
d
e
r
n
"
,
 
"
b
o
l
d
"
,
 
"
c
o
l
o
r
-
a
c
c
e
n
t
"
]
,


 
 
 
 
p
r
e
v
i
e
w
L
i
n
e
s
:
 
[


 
 
 
 
 
 
"
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
"
,


 
 
 
 
 
 
"
 
 
D
A
N
I
E
L
 
K
I
M
"
,


 
 
 
 
 
 
"
 
 
P
r
o
d
u
c
t
 
M
a
n
a
g
e
r
"
,


 
 
 
 
 
 
"
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
═
"
,


 
 
 
 
 
 
"
"
,


 
 
 
 
 
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
 
 
 
 
"
 
 
S
e
n
i
o
r
 
P
M
,
 
N
o
t
i
o
n
"
,


 
 
 
 
 
 
"
 
 
P
M
,
 
S
l
a
c
k
"
,


 
 
 
 
]
,


 
 
 
 
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
F
i
l
e
s
:
 
[
]
,


 
 
 
 
s
o
u
r
c
e
:
 
`
\
\
d
o
c
u
m
e
n
t
c
l
a
s
s
[
1
0
p
t
,
a
4
p
a
p
e
r
]
{
a
r
t
i
c
l
e
}


\
\
u
s
e
p
a
c
k
a
g
e
[
m
a
r
g
i
n
=
0
.
6
i
n
]
{
g
e
o
m
e
t
r
y
}


\
\
u
s
e
p
a
c
k
a
g
e
{
e
n
u
m
i
t
e
m
}


\
\
u
s
e
p
a
c
k
a
g
e
[
h
i
d
e
l
i
n
k
s
]
{
h
y
p
e
r
r
e
f
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
t
l
e
s
e
c
}


\
\
u
s
e
p
a
c
k
a
g
e
{
x
c
o
l
o
r
}


\
\
u
s
e
p
a
c
k
a
g
e
{
t
i
k
z
}




\
\
d
e
f
i
n
e
c
o
l
o
r
{
p
r
i
m
a
r
y
}
{
H
T
M
L
}
{
0
F
1
7
2
A
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
a
c
c
e
n
t
}
{
H
T
M
L
}
{
F
5
9
E
0
B
}


\
\
d
e
f
i
n
e
c
o
l
o
r
{
m
u
t
e
d
}
{
H
T
M
L
}
{
6
4
7
4
8
B
}




\
\
t
i
t
l
e
f
o
r
m
a
t
{
\
\
s
e
c
t
i
o
n
}
{
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
\
\
c
o
l
o
r
{
p
r
i
m
a
r
y
}
\
\
u
p
p
e
r
c
a
s
e
}
{
}
{
0
e
m
}
{
}


\
\
t
i
t
l
e
s
p
a
c
i
n
g
*
{
\
\
s
e
c
t
i
o
n
}
{
0
p
t
}
{
1
2
p
t
}
{
2
p
t
}




\
\
s
e
t
l
e
n
g
t
h
{
\
\
p
a
r
i
n
d
e
n
t
}
{
0
p
t
}


\
\
p
a
g
e
s
t
y
l
e
{
e
m
p
t
y
}




\
\
n
e
w
c
o
m
m
a
n
d
{
\
\
a
c
c
e
n
t
b
a
r
}
{
\
\
v
s
p
a
c
e
{
2
p
t
}
\
\
n
o
i
n
d
e
n
t
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
r
u
l
e
{
\
\
l
i
n
e
w
i
d
t
h
}
{
2
.
5
p
t
}
}
\
\
v
s
p
a
c
e
{
6
p
t
}
}




\
\
b
e
g
i
n
{
d
o
c
u
m
e
n
t
}




%
 
─
─
─
 
H
e
a
d
e
r
 
B
l
o
c
k
 
─
─
─


\
\
b
e
g
i
n
{
c
e
n
t
e
r
}


\
\
b
e
g
i
n
{
t
i
k
z
p
i
c
t
u
r
e
}


 
 
\
\
f
i
l
l
[
p
r
i
m
a
r
y
]
 
(
-
9
.
2
,
 
-
1
.
4
)
 
r
e
c
t
a
n
g
l
e
 
(
9
.
2
,
 
1
.
4
)
;


 
 
\
\
n
o
d
e
[
a
n
c
h
o
r
=
c
e
n
t
e
r
]
 
a
t
 
(
0
,
 
0
.
3
5
)
 
{
\
\
c
o
l
o
r
{
w
h
i
t
e
}
\
\
H
u
g
e
\
\
b
f
s
e
r
i
e
s
 
D
a
n
i
e
l
 
K
i
m
}
;


 
 
\
\
n
o
d
e
[
a
n
c
h
o
r
=
c
e
n
t
e
r
]
 
a
t
 
(
0
,
 
-
0
.
3
5
)
 
{
\
\
c
o
l
o
r
{
a
c
c
e
n
t
}
\
\
n
o
r
m
a
l
s
i
z
e
\
\
b
f
s
e
r
i
e
s
 
S
e
n
i
o
r
 
P
r
o
d
u
c
t
 
M
a
n
a
g
e
r
}
;


 
 
\
\
n
o
d
e
[
a
n
c
h
o
r
=
c
e
n
t
e
r
]
 
a
t
 
(
0
,
 
-
0
.
9
)
 
{
\
\
c
o
l
o
r
{
w
h
i
t
e
}
\
\
f
o
o
t
n
o
t
e
s
i
z
e
 
d
a
n
i
e
l
.
k
i
m
@
e
m
a
i
l
.
c
o
m
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
(
4
1
5
)
 
5
5
5
-
8
8
2
1
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
 
\
\
e
n
s
p
a
c
e
 
$
\
\
c
d
o
t
$
 
\
\
e
n
s
p
a
c
e
 
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
d
a
n
i
e
l
k
i
m
}
;


\
\
e
n
d
{
t
i
k
z
p
i
c
t
u
r
e
}


\
\
e
n
d
{
c
e
n
t
e
r
}




\
\
v
s
p
a
c
e
{
6
p
t
}




\
\
s
e
c
t
i
o
n
*
{
P
r
o
f
i
l
e
}


\
\
a
c
c
e
n
t
b
a
r


P
r
o
d
u
c
t
 
l
e
a
d
e
r
 
w
i
t
h
 
7
+
 
y
e
a
r
s
 
o
f
 
e
x
p
e
r
i
e
n
c
e
 
s
h
i
p
p
i
n
g
 
B
2
B
 
S
a
a
S
 
p
r
o
d
u
c
t
s
 
f
r
o
m
 
0
-
t
o
-
1
 
a
n
d
 
s
c
a
l
i
n
g
 
t
o
 
m
i
l
l
i
o
n
s
 
o
f
 
u
s
e
r
s
.
 
D
e
e
p
 
e
x
p
e
r
t
i
s
e
 
i
n
 
u
s
e
r
 
r
e
s
e
a
r
c
h
,
 
d
a
t
a
-
d
r
i
v
e
n
 
p
r
i
o
r
i
t
i
z
a
t
i
o
n
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
f
u
n
c
t
i
o
n
a
l
 
t
e
a
m
 
l
e
a
d
e
r
s
h
i
p
.
 
P
a
s
s
i
o
n
a
t
e
 
a
b
o
u
t
 
b
u
i
l
d
i
n
g
 
t
o
o
l
s
 
t
h
a
t
 
m
a
k
e
 
t
e
a
m
s
 
m
o
r
e
 
p
r
o
d
u
c
t
i
v
e
.




\
\
s
e
c
t
i
o
n
*
{
E
x
p
e
r
i
e
n
c
e
}


\
\
a
c
c
e
n
t
b
a
r




\
\
t
e
x
t
b
f
{
S
e
n
i
o
r
 
P
r
o
d
u
c
t
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
N
o
t
i
o
n
,
 
S
a
n
 
F
r
a
n
c
i
s
c
o
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
J
a
n
 
2
0
2
2
 
-
-
 
P
r
e
s
e
n
t
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
L
e
d
 
N
o
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
s
 
l
a
u
n
c
h
,
 
l
a
r
g
e
s
t
 
p
r
o
d
u
c
t
 
l
a
u
n
c
h
 
i
n
 
c
o
m
p
a
n
y
 
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
 
2
M
+
 
a
d
o
p
t
i
o
n
s
 
i
n
 
f
i
r
s
t
 
m
o
n
t
h


 
 
\
\
i
t
e
m
 
D
r
o
v
e
 
3
5
\
\
%
 
i
n
c
r
e
a
s
e
 
i
n
 
e
n
t
e
r
p
r
i
s
e
 
r
e
t
e
n
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
 
w
o
r
k
f
l
o
w
 
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
 
f
e
a
t
u
r
e
s


 
 
\
\
i
t
e
m
 
M
a
n
a
g
e
d
 
r
o
a
d
m
a
p
 
f
o
r
 
1
5
-
p
e
r
s
o
n
 
e
n
g
i
n
e
e
r
i
n
g
 
t
e
a
m
 
a
c
r
o
s
s
 
3
 
p
r
o
d
u
c
t
 
a
r
e
a
s


 
 
\
\
i
t
e
m
 
R
a
n
 
4
0
+
 
u
s
e
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
s
 
a
n
d
 
s
y
n
t
h
e
s
i
z
e
d
 
i
n
s
i
g
h
t
s
 
i
n
t
o
 
p
r
o
d
u
c
t
 
s
t
r
a
t
e
g
y
 
p
r
e
s
e
n
t
a
t
i
o
n
s
 
f
o
r
 
C
-
s
u
i
t
e


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
P
r
o
d
u
c
t
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
S
l
a
c
k
,
 
S
a
n
 
F
r
a
n
c
i
s
c
o
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
M
a
r
 
2
0
1
9
 
-
-
 
D
e
c
 
2
0
2
1
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
S
h
i
p
p
e
d
 
S
l
a
c
k
 
C
o
n
n
e
c
t
,
 
e
n
a
b
l
i
n
g
 
c
r
o
s
s
-
o
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
 
m
e
s
s
a
g
i
n
g
 
f
o
r
 
7
5
0
K
+
 
c
o
m
p
a
n
i
e
s


 
 
\
\
i
t
e
m
 
I
m
p
r
o
v
e
d
 
c
h
a
n
n
e
l
 
d
i
s
c
o
v
e
r
y
 
r
e
d
u
c
i
n
g
 
t
i
m
e
-
t
o
-
v
a
l
u
e
 
f
o
r
 
n
e
w
 
w
o
r
k
s
p
a
c
e
 
m
e
m
b
e
r
s
 
b
y
 
4
0
\
\
%


 
 
\
\
i
t
e
m
 
D
e
s
i
g
n
e
d
 
e
x
p
e
r
i
m
e
n
t
a
t
i
o
n
 
f
r
a
m
e
w
o
r
k
 
a
d
o
p
t
e
d
 
b
y
 
8
 
p
r
o
d
u
c
t
 
t
e
a
m
s
 
f
o
r
 
f
e
a
t
u
r
e
 
r
o
l
l
o
u
t
s


 
 
\
\
i
t
e
m
 
C
o
l
l
a
b
o
r
a
t
e
d
 
w
i
t
h
 
d
e
s
i
g
n
 
a
n
d
 
e
n
g
i
n
e
e
r
i
n
g
 
t
o
 
r
e
d
u
c
e
 
o
n
b
o
a
r
d
i
n
g
 
d
r
o
p
-
o
f
f
 
b
y
 
2
5
\
\
%


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
v
s
p
a
c
e
{
6
p
t
}


\
\
t
e
x
t
b
f
{
A
s
s
o
c
i
a
t
e
 
P
r
o
d
u
c
t
 
M
a
n
a
g
e
r
}
 
\
\
h
f
i
l
l
 
A
t
l
a
s
s
i
a
n
,
 
S
a
n
 
F
r
a
n
c
i
s
c
o
 
\
\
\
\


{
\
\
s
m
a
l
l
\
\
c
o
l
o
r
{
m
u
t
e
d
}
\
\
t
e
x
t
i
t
{
J
u
n
 
2
0
1
7
 
-
-
 
F
e
b
 
2
0
1
9
}
}


\
\
b
e
g
i
n
{
i
t
e
m
i
z
e
}
[
l
e
f
t
m
a
r
g
i
n
=
1
2
p
t
,
 
n
o
s
e
p
,
 
t
o
p
s
e
p
=
3
p
t
]


 
 
\
\
i
t
e
m
 
L
a
u
n
c
h
e
d
 
J
i
r
a
 
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
 
r
u
l
e
s
 
f
e
a
t
u
r
e
,
 
a
d
o
p
t
e
d
 
b
y
 
1
0
0
K
+
 
t
e
a
m
s
 
w
i
t
h
i
n
 
f
i
r
s
t
 
q
u
a
r
t
e
r


 
 
\
\
i
t
e
m
 
A
n
a
l
y
z
e
d
 
u
s
a
g
e
 
d
a
t
a
 
t
o
 
i
d
e
n
t
i
f
y
 
a
n
d
 
p
r
i
o
r
i
t
i
z
e
 
t
o
p
 
5
 
w
o
r
k
f
l
o
w
 
p
a
i
n
 
p
o
i
n
t
s


\
\
e
n
d
{
i
t
e
m
i
z
e
}




\
\
s
e
c
t
i
o
n
*
{
E
d
u
c
a
t
i
o
n
}


\
\
a
c
c
e
n
t
b
a
r




\
\
t
e
x
t
b
f
{
M
.
B
.
A
.
}
 
\
\
h
f
i
l
l
 
S
t
a
n
f
o
r
d
 
G
r
a
d
u
a
t
e
 
S
c
h
o
o
l
 
o
f
 
B
u
s
i
n
e
s
s
,
 
2
0
1
7
 
\
\
\
\


\
\
t
e
x
t
b
f
{
B
.
S
.
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
}
 
\
\
h
f
i
l
l
 
U
C
 
B
e
r
k
e
l
e
y
,
 
2
0
1
5




\
\
s
e
c
t
i
o
n
*
{
S
k
i
l
l
s
}


\
\
a
c
c
e
n
t
b
a
r




{
\
\
s
m
a
l
l


\
\
t
e
x
t
b
f
{
P
r
o
d
u
c
t
:
}
 
R
o
a
d
m
a
p
 
S
t
r
a
t
e
g
y
,
 
U
s
e
r
 
R
e
s
e
a
r
c
h
,
 
A
/
B
 
T
e
s
t
i
n
g
,
 
O
K
R
s
,
 
A
g
i
l
e
/
S
c
r
u
m
,
 
S
Q
L
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
o
o
l
s
:
}
 
J
i
r
a
,
 
F
i
g
m
a
,
 
A
m
p
l
i
t
u
d
e
,
 
M
i
x
p
a
n
e
l
,
 
L
o
o
k
e
r
,
 
N
o
t
i
o
n
,
 
L
i
n
e
a
r
 
\
\
\
\


\
\
t
e
x
t
b
f
{
T
e
c
h
n
i
c
a
l
:
}
 
P
y
t
h
o
n
,
 
S
Q
L
,
 
A
P
I
s
,
 
S
y
s
t
e
m
 
D
e
s
i
g
n
,
 
D
a
t
a
 
M
o
d
e
l
i
n
g


}




\
\
e
n
d
{
d
o
c
u
m
e
n
t
}
`
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
L
a
t
e
x
T
e
m
p
l
a
t
e
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
:
 
L
a
t
e
x
T
e
m
p
l
a
t
e
 
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
 
{


 
 
r
e
t
u
r
n
 
L
A
T
E
X
_
T
E
M
P
L
A
T
E
S
.
f
i
n
d
(
(
t
)
 
=
>
 
t
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


