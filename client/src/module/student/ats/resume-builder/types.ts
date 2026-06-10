
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
 
P
e
r
s
o
n
a
l
I
n
f
o
 
{


 
 
f
u
l
l
N
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


 
 
e
m
a
i
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
h
o
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


 
 
l
o
c
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


 
 
l
i
n
k
e
d
I
n
:
 
s
t
r
i
n
g
;


 
 
p
o
r
t
f
o
l
i
o
:
 
s
t
r
i
n
g
;


}




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
r
t
D
a
t
e
:
 
s
t
r
i
n
g
;


 
 
e
n
d
D
a
t
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
u
r
r
e
n
t
:
 
b
o
o
l
e
a
n
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


}




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
 
E
d
u
c
a
t
i
o
n
 
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


 
 
i
n
s
t
i
t
u
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
e
g
r
e
e
:
 
s
t
r
i
n
g
;


 
 
f
i
e
l
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
t
a
r
t
D
a
t
e
:
 
s
t
r
i
n
g
;


 
 
e
n
d
D
a
t
e
:
 
s
t
r
i
n
g
;


 
 
g
p
a
:
 
s
t
r
i
n
g
;


}




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
 
P
r
o
j
e
c
t
 
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
;


 
 
l
i
n
k
:
 
s
t
r
i
n
g
;


}




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


 
 
i
s
s
u
e
r
:
 
s
t
r
i
n
g
;


 
 
d
a
t
e
:
 
s
t
r
i
n
g
;


}




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
 
R
e
s
u
m
e
D
a
t
a
 
{


 
 
p
e
r
s
o
n
a
l
I
n
f
o
:
 
P
e
r
s
o
n
a
l
I
n
f
o
;


 
 
s
u
m
m
a
r
y
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
p
e
r
i
e
n
c
e
:
 
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
[
]
;


 
 
e
d
u
c
a
t
i
o
n
:
 
E
d
u
c
a
t
i
o
n
[
]
;


 
 
s
k
i
l
l
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
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
[
]
;


 
 
c
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
 
t
y
p
e
 
T
e
m
p
l
a
t
e
I
d
 
=
 
"
c
l
a
s
s
i
c
"
 
|
 
"
m
o
d
e
r
n
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
c
o
m
p
a
c
t
"
;




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
n
f
i
g
 
{


 
 
i
d
:
 
T
e
m
p
l
a
t
e
I
d
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


 
 
a
c
c
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
m
p
o
n
e
n
t
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
d
a
t
a
:
 
R
e
s
u
m
e
D
a
t
a
;
 
s
e
c
t
i
o
n
O
r
d
e
r
?
:
 
s
t
r
i
n
g
[
]
 
}
>
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
 
d
e
f
a
u
l
t
R
e
s
u
m
e
D
a
t
a
:
 
R
e
s
u
m
e
D
a
t
a
 
=
 
{


 
 
p
e
r
s
o
n
a
l
I
n
f
o
:
 
{


 
 
 
 
f
u
l
l
N
a
m
e
:
 
"
A
r
j
u
n
 
M
e
h
t
a
"
,


 
 
 
 
e
m
a
i
l
:
 
"
a
r
j
u
n
.
m
e
h
t
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
"
,


 
 
 
 
p
h
o
n
e
:
 
"
+
9
1
 
9
8
7
6
5
 
4
3
2
1
0
"
,


 
 
 
 
l
o
c
a
t
i
o
n
:
 
"
P
u
n
e
,
 
M
a
h
a
r
a
s
h
t
r
a
"
,


 
 
 
 
l
i
n
k
e
d
I
n
:
 
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
a
r
j
u
n
m
e
h
t
a
"
,


 
 
 
 
p
o
r
t
f
o
l
i
o
:
 
"
a
r
j
u
n
m
e
h
t
a
.
d
e
v
"
,


 
 
}
,


 
 
s
u
m
m
a
r
y
:


 
 
 
 
"
F
i
n
a
l
-
y
e
a
r
 
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
 
s
t
u
d
e
n
t
 
w
i
t
h
 
h
a
n
d
s
-
o
n
 
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
 
b
u
i
l
d
i
n
g
 
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
 
P
y
t
h
o
n
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
 
s
o
l
v
i
n
g
 
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
 
p
r
o
b
l
e
m
s
 
t
h
r
o
u
g
h
 
c
l
e
a
n
,
 
s
c
a
l
a
b
l
e
 
c
o
d
e
.
"
,


 
 
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
:
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
e
x
p
-
1
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
e
c
h
N
o
v
a
 
S
o
l
u
t
i
o
n
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
"
,


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
:
 
"
M
a
y
 
2
0
2
5
"
,


 
 
 
 
 
 
e
n
d
D
a
t
e
:
 
"
"
,


 
 
 
 
 
 
c
u
r
r
e
n
t
:
 
t
r
u
e
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
-
 
B
u
i
l
t
 
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
 
u
s
i
n
g
 
R
e
a
c
t
 
a
n
d
 
D
3
.
j
s
 
s
e
r
v
i
n
g
 
5
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
n
-
 
O
p
t
i
m
i
z
e
d
 
R
E
S
T
 
A
P
I
s
 
w
i
t
h
 
R
e
d
i
s
 
c
a
c
h
i
n
g
,
 
r
e
d
u
c
i
n
g
 
a
v
e
r
a
g
e
 
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
 
b
y
 
3
5
%
\
n
-
 
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
 
a
 
6
-
p
e
r
s
o
n
 
a
g
i
l
e
 
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
 
t
w
o
-
w
e
e
k
 
s
p
r
i
n
t
 
c
y
c
l
e
s
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
e
x
p
-
2
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
d
e
C
r
a
f
t
 
L
a
b
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
F
r
o
n
t
e
n
d
 
D
e
v
e
l
o
p
e
r
 
I
n
t
e
r
n
"
,


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
:
 
"
J
u
n
 
2
0
2
4
"
,


 
 
 
 
 
 
e
n
d
D
a
t
e
:
 
"
A
u
g
 
2
0
2
4
"
,


 
 
 
 
 
 
c
u
r
r
e
n
t
:
 
f
a
l
s
e
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
-
 
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
u
s
a
b
l
e
 
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
 
a
d
o
p
t
e
d
 
b
y
 
3
 
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
n
-
 
M
i
g
r
a
t
e
d
 
l
e
g
a
c
y
 
j
Q
u
e
r
y
 
c
o
d
e
b
a
s
e
 
t
o
 
R
e
a
c
t
,
 
i
m
p
r
o
v
i
n
g
 
l
o
a
d
 
t
i
m
e
 
b
y
 
5
0
%
\
n
-
 
W
r
o
t
e
 
u
n
i
t
 
t
e
s
t
s
 
w
i
t
h
 
J
e
s
t
 
a
c
h
i
e
v
i
n
g
 
9
0
%
 
c
o
d
e
 
c
o
v
e
r
a
g
e
"
,


 
 
 
 
}
,


 
 
]
,


 
 
e
d
u
c
a
t
i
o
n
:
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
e
d
u
-
1
"
,


 
 
 
 
 
 
i
n
s
t
i
t
u
t
i
o
n
:
 
"
P
u
n
e
 
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
"
,


 
 
 
 
 
 
d
e
g
r
e
e
:
 
"
B
.
T
e
c
h
"
,


 
 
 
 
 
 
f
i
e
l
d
:
 
"
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
 
&
 
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
"
,


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
:
 
"
A
u
g
 
2
0
2
2
"
,


 
 
 
 
 
 
e
n
d
D
a
t
e
:
 
"
M
a
y
 
2
0
2
6
"
,


 
 
 
 
 
 
g
p
a
:
 
"
8
.
7
/
1
0
"
,


 
 
 
 
}
,


 
 
]
,


 
 
s
k
i
l
l
s
:
 
[


 
 
 
 
"
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
R
e
a
c
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
y
t
h
o
n
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
G
i
t
"
,


 
 
 
 
"
D
o
c
k
e
r
"
,


 
 
 
 
"
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
"
,


 
 
 
 
"
R
E
S
T
 
A
P
I
s
"
,


 
 
]
,


 
 
p
r
o
j
e
c
t
s
:
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
p
r
o
j
-
1
"
,


 
 
 
 
 
 
n
a
m
e
:
 
"
S
t
u
d
y
S
y
n
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
A
 
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
 
s
t
u
d
y
 
p
l
a
t
f
o
r
m
 
w
i
t
h
 
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
o
c
u
m
e
n
t
 
e
d
i
t
i
n
g
,
 
v
i
d
e
o
 
c
a
l
l
s
,
 
a
n
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
l
a
s
h
c
a
r
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
.
 
S
e
r
v
e
s
 
2
0
0
+
 
a
c
t
i
v
e
 
s
t
u
d
e
n
t
 
u
s
e
r
s
.
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
 
"
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
 
S
o
c
k
e
t
.
i
o
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
 
O
p
e
n
A
I
 
A
P
I
"
,


 
 
 
 
 
 
l
i
n
k
:
 
"
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
j
u
n
m
e
h
t
a
/
s
t
u
d
y
s
y
n
c
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
p
r
o
j
-
2
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
p
e
n
s
e
T
r
a
c
k
e
r
 
C
L
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
 
e
x
p
e
n
s
e
 
t
r
a
c
k
e
r
 
w
i
t
h
 
b
u
d
g
e
t
 
a
l
e
r
t
s
,
 
C
S
V
 
e
x
p
o
r
t
,
 
a
n
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
i
n
g
 
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
s
.
 
P
u
b
l
i
s
h
e
d
 
o
n
 
n
p
m
 
w
i
t
h
 
3
0
0
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
.
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
 
"
N
o
d
e
.
j
s
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
 
S
Q
L
i
t
e
,
 
C
h
a
r
t
.
j
s
"
,


 
 
 
 
 
 
l
i
n
k
:
 
"
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
j
u
n
m
e
h
t
a
/
e
x
p
e
n
s
e
-
c
l
i
"
,


 
 
 
 
}
,


 
 
]
,


 
 
c
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
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
c
e
r
t
-
1
"
,


 
 
 
 
 
 
n
a
m
e
:
 
"
A
W
S
 
C
l
o
u
d
 
P
r
a
c
t
i
t
i
o
n
e
r
"
,


 
 
 
 
 
 
i
s
s
u
e
r
:
 
"
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
"
,


 
 
 
 
 
 
d
a
t
e
:
 
"
J
a
n
 
2
0
2
5
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
c
e
r
t
-
2
"
,


 
 
 
 
 
 
n
a
m
e
:
 
"
M
e
t
a
 
F
r
o
n
t
-
E
n
d
 
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


 
 
 
 
 
 
i
s
s
u
e
r
:
 
"
C
o
u
r
s
e
r
a
 
/
 
M
e
t
a
"
,


 
 
 
 
 
 
d
a
t
e
:
 
"
S
e
p
 
2
0
2
4
"
,


 
 
 
 
}
,


 
 
]
,


}
;


