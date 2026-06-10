
i
m
p
o
r
t
 
{


 
 
d
s
a
T
e
m
p
l
a
t
e
s
,


 
 
b
e
h
a
v
i
o
r
a
l
T
e
m
p
l
a
t
e
s
,


 
 
s
y
s
t
e
m
T
e
m
p
l
a
t
e
s
,


 
 
f
r
o
n
t
e
n
d
T
e
m
p
l
a
t
e
s
,


 
 
b
a
c
k
e
n
d
T
e
m
p
l
a
t
e
s
,


 
 
h
r
T
e
m
p
l
a
t
e
s
,


}
 
f
r
o
m
 
"
.
/
i
n
t
e
r
v
i
e
w
T
e
m
p
l
a
t
e
s
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
 
Q
u
e
s
t
i
o
n
 
{


 
 
c
a
t
e
g
o
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


 
 
a
n
s
w
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


 
 
t
i
p
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




/
*
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
 
B
A
S
E
 
Q
U
E
S
T
I
O
N
S
 
(
s
e
e
d
 
o
n
l
y
)


─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
 
*
/




c
o
n
s
t
 
D
S
A
:
 
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
D
S
A
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
 
i
s
 
a
n
 
a
r
r
a
y
?
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
A
 
l
i
n
e
a
r
 
s
t
r
u
c
t
u
r
e
 
w
i
t
h
 
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
 
m
e
m
o
r
y
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
O
(
1
)
 
a
c
c
e
s
s
"
,
 
"
F
i
x
e
d
 
s
i
z
e
"
]
,


 
 
}
,


 
 
{


 
 
 
 
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
D
S
A
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
 
i
s
 
a
 
s
t
a
c
k
?
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
L
I
F
O
 
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
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
U
s
e
d
 
i
n
 
r
e
c
u
r
s
i
o
n
"
]
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
 
B
E
H
A
V
I
O
R
A
L
:
 
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
B
e
h
a
v
i
o
r
a
l
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
e
l
l
 
m
e
 
a
b
o
u
t
 
y
o
u
r
s
e
l
f
.
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
S
h
o
r
t
 
s
t
r
u
c
t
u
r
e
d
 
i
n
t
r
o
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
P
a
s
t
 
→
 
P
r
e
s
e
n
t
 
→
 
F
u
t
u
r
e
"
]
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
 
S
Y
S
T
E
M
_
D
E
S
I
G
N
:
 
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
D
e
s
i
g
n
 
a
 
U
R
L
 
s
h
o
r
t
e
n
e
r
.
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
M
a
p
 
l
o
n
g
 
U
R
L
 
t
o
 
s
h
o
r
t
 
k
e
y
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
U
s
e
 
c
a
c
h
e
 
+
 
D
B
"
]
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
 
F
R
O
N
T
E
N
D
:
 
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
F
r
o
n
t
e
n
d
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
 
i
s
 
D
O
M
?
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
B
r
o
w
s
e
r
 
r
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
 
o
f
 
H
T
M
L
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
J
S
 
i
n
t
e
r
a
c
t
s
 
w
i
t
h
 
D
O
M
"
]
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
 
B
A
C
K
E
N
D
:
 
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
B
a
c
k
e
n
d
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
 
i
s
 
R
E
S
T
 
A
P
I
?
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
H
T
T
P
-
b
a
s
e
d
 
A
P
I
 
d
e
s
i
g
n
 
s
t
y
l
e
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
G
E
T
 
P
O
S
T
 
P
U
T
 
D
E
L
E
T
E
"
]
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
 
H
R
:
 
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
H
R
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
 
a
r
e
 
y
o
u
r
 
s
t
r
e
n
g
t
h
s
?
"
,


 
 
 
 
a
n
s
w
e
r
:
 
"
S
k
i
l
l
s
 
r
e
l
e
v
a
n
t
 
t
o
 
r
o
l
e
.
"
,


 
 
 
 
t
i
p
s
:
 
[
"
B
e
 
s
p
e
c
i
f
i
c
"
]
,


 
 
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
 
f
i
l
l
T
e
m
p
l
a
t
e
(
t
e
m
p
l
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
,
 
v
a
l
u
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
 
s
t
r
i
n
g
>
)
 
{


 
 
r
e
t
u
r
n
 
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
v
a
l
u
e
s
)
.
r
e
d
u
c
e
(


 
 
 
 
(
a
c
c
,
 
[
k
e
y
,
 
v
a
l
]
)
 
=
>
 
a
c
c
.
r
e
p
l
a
c
e
A
l
l
(
`
{
$
{
k
e
y
}
}
`
,
 
v
a
l
)
,


 
 
 
 
t
e
m
p
l
a
t
e


 
 
)
;


}




c
o
n
s
t
 
v
a
l
u
e
P
o
o
l
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
 
{


 
 
c
o
n
c
e
p
t
:
 
[
"
a
r
r
a
y
"
,
 
"
s
t
a
c
k
"
,
 
"
q
u
e
u
e
"
,
 
"
g
r
a
p
h
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
A
P
I
"
]
,




 
 
s
y
s
t
e
m
:
 
[
"
U
R
L
 
s
h
o
r
t
e
n
e
r
"
,
 
"
c
h
a
t
 
s
y
s
t
e
m
"
,
 
"
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
f
e
e
d
 
s
y
s
t
e
m
"
]
,




 
 
s
k
i
l
l
:
 
[
"
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
"
,
 
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
 
"
d
e
b
u
g
g
i
n
g
"
,
 
"
o
w
n
e
r
s
h
i
p
"
]
,




 
 
s
i
t
u
a
t
i
o
n
:
 
[
 
"
a
 
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
"
,
 
"
a
 
t
e
a
m
 
c
o
n
f
l
i
c
t
"
,
 
"
a
 
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
 
b
u
g
"
,
"
a
 
f
a
i
l
u
r
e
"
,
]
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
:
 
[
 
"
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
"
,
 
"
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
 
f
a
i
l
u
r
e
s
"
,
 
"
u
n
e
x
p
e
c
t
e
d
 
b
u
g
s
"
,
 
]
,




 
 
s
c
e
n
a
r
i
o
:
 
[
 
"
a
 
h
i
g
h
-
p
r
e
s
s
u
r
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
"
,
 
"
a
 
c
l
i
e
n
t
 
e
s
c
a
l
a
t
i
o
n
"
,
"
a
 
p
r
o
j
e
c
t
 
d
e
l
a
y
"
,
 
]
,


}
;


/
*
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
 
G
E
N
E
R
A
T
O
R


─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
 
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
 
g
e
n
e
r
a
t
e
(


 
 
b
a
s
e
:
 
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
,


 
 
t
e
m
p
l
a
t
e
s
:
 
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
n
s
w
e
r
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
 
t
i
p
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
 
}
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
 
s
t
r
i
n
g
,


 
 
t
a
r
g
e
t
 
=
 
3
0


)
:
 
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
 
[
.
.
.
b
a
s
e
]
;




 
 
l
e
t
 
i
 
=
 
0
;






 
 
w
h
i
l
e
 
(
r
e
s
u
l
t
.
l
e
n
g
t
h
 
<
 
t
a
r
g
e
t
)
 
{


 
 
c
o
n
s
t
 
c
o
n
c
e
p
t
 
=
 
v
a
l
u
e
P
o
o
l
.
c
o
n
c
e
p
t
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
c
o
n
c
e
p
t
.
l
e
n
g
t
h
]
;


 
 
c
o
n
s
t
 
s
y
s
t
e
m
 
=
 
v
a
l
u
e
P
o
o
l
.
s
y
s
t
e
m
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
s
y
s
t
e
m
.
l
e
n
g
t
h
]
;


 
 
c
o
n
s
t
 
s
k
i
l
l
 
=
 
v
a
l
u
e
P
o
o
l
.
s
k
i
l
l
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
s
k
i
l
l
.
l
e
n
g
t
h
]
;


 
 
c
o
n
s
t
 
s
i
t
u
a
t
i
o
n
 
=
 
v
a
l
u
e
P
o
o
l
.
s
i
t
u
a
t
i
o
n
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
s
i
t
u
a
t
i
o
n
.
l
e
n
g
t
h
]
;


 
 
c
o
n
s
t
 
c
h
a
l
l
e
n
g
e
 
=
 
v
a
l
u
e
P
o
o
l
.
c
h
a
l
l
e
n
g
e
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
c
h
a
l
l
e
n
g
e
.
l
e
n
g
t
h
]
;


 
 
c
o
n
s
t
 
s
c
e
n
a
r
i
o
 
=
 
v
a
l
u
e
P
o
o
l
.
s
c
e
n
a
r
i
o
[
i
 
%
 
v
a
l
u
e
P
o
o
l
.
s
c
e
n
a
r
i
o
.
l
e
n
g
t
h
]
;




 
 
c
o
n
s
t
 
v
a
r
i
a
b
l
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
 
s
t
r
i
n
g
>
 
=
 
{


 
 
 
 
c
o
n
c
e
p
t
,


 
 
 
 
s
y
s
t
e
m
,


 
 
 
 
s
k
i
l
l
,


 
 
 
 
s
i
t
u
a
t
i
o
n
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
,


 
 
 
 
s
c
e
n
a
r
i
o
,


 
 
 
 
}
;


 
 
 
 
r
e
s
u
l
t
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
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
 
i
 
%
 
3
 
=
=
=
 
0
 
?
 
"
E
a
s
y
"
 
:
 
i
 
%
 
3
 
=
=
=
 
1
 
?
 
"
M
e
d
i
u
m
"
 
:
 
"
H
a
r
d
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
 
f
i
l
l
T
e
m
p
l
a
t
e
(


 
 
 
 
 
 
 
 
t
e
m
p
l
a
t
e
s
.
q
u
e
s
t
i
o
n
[
i
 
%
 
t
e
m
p
l
a
t
e
s
.
q
u
e
s
t
i
o
n
.
l
e
n
g
t
h
]
,


 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
s


 
 
 
 
 
 
 
 
)
,




 
 
 
 
 
 
 
 
a
n
s
w
e
r
:
 
f
i
l
l
T
e
m
p
l
a
t
e
(


 
 
 
 
 
 
 
 
t
e
m
p
l
a
t
e
s
.
a
n
s
w
e
r
[
i
 
%
 
t
e
m
p
l
a
t
e
s
.
a
n
s
w
e
r
.
l
e
n
g
t
h
]
,


 
 
 
 
 
 
 
 
v
a
r
i
a
b
l
e
s


 
 
 
 
 
 
 
 
)
,




 
 
 
 
 
 
 
 
t
i
p
s
:
 
t
e
m
p
l
a
t
e
s
.
t
i
p
s
[
i
 
%
 
t
e
m
p
l
a
t
e
s
.
t
i
p
s
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
)
;




 
 
 
 
i
+
+
;


 
 
}




 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
;


}




/
*
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
 
F
I
N
A
L
 
E
X
P
O
R
T
 
(
3
0
 
E
A
C
H
)


─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
 
*
/




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


 
 
.
.
.
g
e
n
e
r
a
t
e
(
D
S
A
,
 
d
s
a
T
e
m
p
l
a
t
e
s
,
 
"
D
S
A
"
)
,


 
 
.
.
.
g
e
n
e
r
a
t
e
(
B
E
H
A
V
I
O
R
A
L
,
 
b
e
h
a
v
i
o
r
a
l
T
e
m
p
l
a
t
e
s
,
 
"
B
e
h
a
v
i
o
r
a
l
"
)
,


 
 
.
.
.
g
e
n
e
r
a
t
e
(
S
Y
S
T
E
M
_
D
E
S
I
G
N
,
 
s
y
s
t
e
m
T
e
m
p
l
a
t
e
s
,
 
"
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
"
)
,


 
 
.
.
.
g
e
n
e
r
a
t
e
(
F
R
O
N
T
E
N
D
,
 
f
r
o
n
t
e
n
d
T
e
m
p
l
a
t
e
s
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
"
)
,


 
 
.
.
.
g
e
n
e
r
a
t
e
(
B
A
C
K
E
N
D
,
 
b
a
c
k
e
n
d
T
e
m
p
l
a
t
e
s
,
 
"
B
a
c
k
e
n
d
"
)
,


 
 
.
.
.
g
e
n
e
r
a
t
e
(
H
R
,
 
h
r
T
e
m
p
l
a
t
e
s
,
 
"
H
R
"
)
,


]
;
